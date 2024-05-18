import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import logger from '../utils/logger';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    logger.error('Access token is missing');
    return res.status(401).json({ message: 'Access token is missing or invalid' });
  }
  next();
  /**
   * Replace with the API endpoint to validate the access token
   */
  /*try {
    const response = await axios.post('URL-AUTH-SERVICE', { token });

    if (response.data.valid) {
      next();
    } else {
      res.status(401).json({ message: 'Invalid access token' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to validate access token', error: error  });
  } */
};

export default validateToken;
