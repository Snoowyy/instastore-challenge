import { config } from 'dotenv';
import { MigrationOptions } from 'node-pg-migrate';

config();

const databaseUrl = process.env.DATABASE_URL || `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;

const migrationConfig: MigrationOptions = {
  databaseUrl,
  migrationsTable: 'pgmigrations',
  dir: 'migrations',
  // Puedes agregar más configuraciones aquí si es necesario
};

export default migrationConfig;
