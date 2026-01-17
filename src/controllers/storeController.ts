import { Request, Response } from 'express';
import { getStores, getStoresAvailability } from '../services/storeService';
import { Coordinates } from '../models/storeModel';
import logger from '../utils/logger';

export const getStoresController = async (req: Request, res: Response) => {
  const stores = await getStores();
  res.json(stores);
};

export const getStoresAvailabilityController = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.params.x || !req.params.y) {
      logger.error('Missing latitude or longitude');
      res.status(404).json({
        message: 'Missing latitude or longitude',
      });
    }
    if (req.params.x === '' || req.params.y === '') {
      logger.error('Invalid latitude or longitude');
      res.status(400).json({
        message: 'Invalid latitude or longitude',
      });
    }
    const x = req.params.x as string;
    const y = req.params.y as string;
    const coordinates: Coordinates = {
      x: parseFloat(x),
      y: parseFloat(y),
    };
    const stores = await getStoresAvailability(coordinates);
    res.json(stores);
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};