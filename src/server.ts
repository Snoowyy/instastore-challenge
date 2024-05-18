import app from './app';
import pool from './config/database';
import logger from './utils/logger';
const PORT = process.env.PORT || 3000;

pool.connect()
  .then(() => {
    console.log('Connected to the database');
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error(err);
  });
