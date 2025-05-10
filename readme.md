# Book Store

An interactive and user-friendly online platform to explore, buy, and manage a collection of books. The application provides a seamless shopping experience, allowing users to browse through various categories, view detailed descriptions, and purchase their favorite books.

live link : (https://book-shop-frontend-weld-tau.vercel.app)

server link : (https://book-shop-backend-rho.vercel.app)

## Features

* 📚 **Browse Books:** Discover a wide range of books across different genres.
* 🔍 **Search & Filter:** Quickly find books by title, author, genre, or price.
* 🛒 **Shopping Cart:** Add books to your cart and manage your selections before checkout.
* 💳 **Secure Checkout:** Smooth and secure payment process.
* 📝 **User Authentication:** Sign up, log in, and manage your account.
* ⭐ **Ratings & Reviews:** View and add reviews for books.
* 📦 **Order History:** Track your previous purchases and order status.

## Technologies Used

* **Frontend:** React, Redux, TailwindCSS
* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Token)
* **Payment Integration:** Stripe
* **State Management:** Redux Toolkit

## Getting Started

### Prerequisites

* Node.js
* MongoDB
* Git

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/book-store.git

# Navigate to the project directory
cd book-store

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be running at `http://localhost:3000`.

### Environment Variables

Create a `.env` file in the root directory and add the following:

```
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
STRIPE_SECRET_KEY=your-stripe-secret-key
```

## Usage

* Visit the homepage to explore books.
* Use the search bar and filters to refine your search.
* Add books to your cart and proceed to checkout.
* View your order history and manage your profile.

---

# Backend Documentation

This section covers the backend structure, API documentation, and server configurations.

## Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm run dev
```

The backend server runs on `http://localhost:5000` by default.

### Environment Variables

Create a `.env` file inside the `backend` directory:

```
PORT=5000
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
STRIPE_SECRET_KEY=your-stripe-secret-key
```

## API Endpoints

| Method | Endpoint             | Description                    |
| ------ | -------------------- | ------------------------------ |
| GET    | `/api/v1/books`         | Fetch all books                |
| GET    | `/api/v1/books/:id`     | Get details of a specific book |
| POST   | `/api/v1/auth/register` | Register a new user            |
| POST   | `/api/v1/auth/login`    | User login                     |
| POST   | `/api/v1/orders`        | Create a new order             |
| GET    | `/api/v1/orders`        | Fetch all orders               |

## Deployment

To deploy the backend:

1. Make sure all environment variables are set up correctly.
2. Deploy to platforms like **Heroku, DigitalOcean, or Vercel**.
3. Set up your MongoDB database on **MongoDB Atlas**.

```bash
# For Heroku deployment
heroku create
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set JWT_SECRET=your-jwt-secret
heroku config:set STRIPE_SECRET_KEY=your-stripe-secret-key

git push heroku main
```

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback, feel free to reach out:

* **Email:** [your-email@example.com](mailto:your-email@example.com)
* **GitHub:** [your-username](https://github.com/your-username)

---

Happy Reading! 📖✨
