import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  db_url: process.env.DATABASE_URL,
  jwt_secret: process.env.JWT_SECRET,
  bcrypt_salt_round: process.env.BCRYPT_SALTROUND,
  stripe_sk: process.env.STRIPE_SK,
};
