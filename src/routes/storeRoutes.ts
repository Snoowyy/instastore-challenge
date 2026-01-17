import { Router } from 'express';
import { getStoresController, getStoresAvailabilityController } from '../controllers/storeController';
import validateToken from '../middleware/authMiddleware';

const storeRoutes = Router();

/**
 * @swagger
 * /api/stores/availability/{x}/{y}:
 * 
 *   get:
 *     tags:
 *       - Stores Availability
 *     summary: Get stores availability by coordinates
 *     description: Get stores availability by coordinates
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: x
 *         description: Latitude
 *         required: true
 *         schema:
 *           type: number
 *       - in: path
 *         name: y
 *         description: Longitude
 *         required: true
 *         schema:
 *           type: number
 * 
 *     responses:
 *       200:
 *         description: OK
 *         content: 
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StoreAvailability'
 *             example:
 *               [
 *                 {
 *                   "storeId": 1,
 *                   "storeName": "Supermarket",
 *                   "address": "Calle de la calle, 123",
 *                   "latitude": -3.141592653589793,
 *                   "longitude": -1.618033988749895,
 *                   "isOpen": true,
 *                   "nextDeliveryTime": "19/5/2024, 8:00:00 a. m."
 *                 }
 *               ]
 * 
 *         400:
 *           description: Bad request
 *           content:           
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Missing latitude or longitude
 *               example:
 *                 {
 *                   "message": "Invalid latitude or longitude"
 *                 }
 *         404:
 *           description: Not found
 *           content:           
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Invalid latitude or longitude
 *               example:
 *                 {
 *                   "message": "Missing latitude or longitude"
 *                 }
 */

storeRoutes.get('/availability/:x/:y', validateToken, getStoresAvailabilityController);
export default storeRoutes;