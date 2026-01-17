
/** @swagger
 * components:
 *   schemas:
 *     Store:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         name:
 *           type: string
 *         address:
 *           type: string
 *         coordinates:
 *           type: object
 *           properties:
 *             x:
 *               type: number
 *             y:
 *               type: number
 *         startWorkingTime:
 *           type: string
 *         endWorkingTime:
 *           type: string
 *     StoreAvailability:
 *       type: object
 *       properties:
 *         storeId:
 *           type: number
 *         storeName:
 *           type: string
 *         address:
 *           type: string
 *         latitude:
 *           type: number
 *         longitude:
 *           type: number
 *         isOpen:
 *           type: boolean
 *         nextDeliveryTime:
 *           type: string
 */
export interface StoreAvailability {
  storeId: number;
  storeName: string;
  address: string;
  latitude: number;
  longitude: number;
  isOpen: boolean;
  nextDeliveryTime: string;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface Store {
  id: number;
  name: string;
  address: string;
  coordinates: Coordinates;
  startWorkingTime: string;
  endWorkingTime: string;
}

