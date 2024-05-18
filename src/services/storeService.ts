import pool from "../config/database";
import { Store, StoreAvailability, Coordinates } from "../models/storeModel";

export const getStores = async (): Promise<Store[]> => {
  const result = await pool.query("SELECT * FROM stores");
  const stores: Store[] = result.rows.map((store: any) => ({
    id: store.id,
    name: store.name,
    address: store.address,
    coordinates: {
      x: store.coordinates.x,
      y: store.coordinates.y,
    },
    startWorkingTime: store.startWorkingTime,
    endWorkingTime: store.endWorkingTime,
  }));
  return stores;
};

export const getStoresAvailability = async (
  coordinates: Coordinates
): Promise<StoreAvailability[]> => {
  const result = await pool.query(
  `SELECT * FROM stores WHERE ST_Distance (
            ST_Transform(ST_SetSRID(coordinates::geometry, 4326),3857),
            ST_Transform(ST_SetSRID (ST_MakePoint ($1, $2),4326), 3857)
            ) < 10000;
  `,
    [coordinates.x, coordinates.y]
  );
  const stores: StoreAvailability[] = await Promise.all(result.rows.map(async (store: any) => ({
    storeId: store.id,
    storeName: store.name,
    address: store.address,
    latitude: store.coordinates.x,
    longitude: store.coordinates.y,
    isOpen: checkIsOpen(store.startWorkingAt, store.endWorkingAt),
    nextDeliveryTime: await checkNextDeliveryTime(store.id, store.startWorkingAt),
  })));
  return stores;
};

const checkIsOpen = (startWorkingTime: string, endWorkingTime: string): boolean => {
  const now = new Date();
  const nowTime = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  return nowTime > startWorkingTime && nowTime < endWorkingTime;
};

const checkNextDeliveryTime = async (id: number, startWorkingTime: string): Promise<string> => {
  const result = await pool.query(
    `SELECT * FROM deliveries WHERE "storeId" = $1 and DATE("deliveryTime") = CURRENT_DATE`,
    [id]
  );
  const now = new Date();
  if (result.rows.length === 0) {
    now.setHours(now.getHours() + 1);
    return now.toLocaleString();
  }
  const deliveryTime = new Date(result.rows[0].deliveryTime);
  const [h, m, s] = startWorkingTime.split(':').map(Number);
  deliveryTime.setDate(deliveryTime.getDate() + 1);
  deliveryTime.setHours(h);
  deliveryTime.setMinutes(m);
  deliveryTime.setSeconds(s);
  return deliveryTime.toLocaleString();
};