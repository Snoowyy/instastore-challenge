/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable("stores", {
      id: "id",
      name: { type: "varchar(1000)", notNull: true },
      startWorkingAt: {
        type: "timestamp",
        notNull: true,
      },
      endWorkingAt: {
        type: "timestamp",
        notNull: true,
      },
      coordinates: {
        type: "point",
        notNull: true,
      },
      createdAt: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp"),
      },
      updateAt: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp"),
        nullable: true,
      },
    });
    pgm.createTable("deliveries", {
      id: "id",
      storeId: {
        type: "integer",
        notNull: true,
        references: '"stores"',
        onDelete: "cascade",
      },
      deliveryTime: {
        type: "timestamp",
        notNull: true,
      },
      createdAt: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp"),
      },
      updateAt: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp"),
        nullable: true,
      },
    });
};
exports.down = (pgm) => {};
