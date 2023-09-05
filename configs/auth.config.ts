import { JwtOptions } from 'jsonwebtoken';

const authConfig: JwtOptions = {
  secret: process.env.JWT_SECRET || 'defaultSecret',
  expiresIn: '1h',
};

export default authConfig;
