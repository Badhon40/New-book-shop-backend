import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import Stripe from 'stripe';
import router from './app/Routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import Config from './app/Config';
import Book from './app/Modules/Book/Book.model';

const app: Application = express();
const stripe = require('stripe')(Config.stripe_sk);

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

// Routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Book Shop');
});

// Stripe Checkout Session Creation
app.post('/api/v1/create-checkout-session', async (req: Request, res: Response) => {
  try {
    const { product, user } = req.body;

    if (!product || !user) {
      return res.status(400).json({ error: 'Product and user information are required.' });
    }

    const lineItems = [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.title,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: 1,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `https://book-shop-frontend-weld-tau.vercel.app/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: 'https://book-shop-frontend-weld-tau.vercel.app/failed',
      metadata: {
        email: user.email,
        product: product._id,
        quantity: 1,
        totalPrice: Math.round(product.price * 100),
        author: product.author,
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create session' });
  }
});

// Retrieve Checkout Session Details
app.get('/api/v1/checkout-session/:sessionId', async (req: Request, res: Response) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);

    const {
      email,
      product: productId,
      quantity,
      totalPrice,
    } = session.metadata;

    const product = await Book.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({
      paymentStatus: session.payment_status,
      userEmail: email,
      productId: productId,
      productQuantity: quantity,
      productPrice: totalPrice,
      productTitle: product.title,
      productAuthor: product.author,
    });
  } catch (error) {
    console.error('Error retrieving checkout session:', error);
    res.status(500).json({ error: 'Failed to retrieve session details' });
  }
});

// Global Error Handler
app.use(globalErrorHandler);

export const App = app;
