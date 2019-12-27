import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/Auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;
    return next();
  } catch (error) {
    return res.status(400).json({ error: 'Token inválido' });
  }
};
