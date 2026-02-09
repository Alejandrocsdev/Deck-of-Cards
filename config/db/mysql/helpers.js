const { Model } = require('sequelize');

const getPrimaryKeys = (instance) => {
  return instance.constructor.primaryKeyAttributes;
};

const getForeignKeys = (instance) => {
  const attributes = instance.constructor.rawAttributes;
  const fields = Object.keys(attributes);
  return fields.filter((key) => attributes[key].references);
};

const getTimestamps = (instance) => {
  const attributes = instance.constructor._timestampAttributes;
  return Object.values(attributes);
};

const helpers = {
  exclude(row, fields = []) {
    if (!(row instanceof Model)) {
      throw new TypeError('exclude() expects a Sequelize Model instance');
    }

    const pkFields = getPrimaryKeys(row);
    const fkFields = getForeignKeys(row);
    const timeFields = getTimestamps(row);

    const data = row.toJSON();

    fields.forEach((field) => delete data[field]);

    const builder = {
      pk() {
        pkFields.forEach((field) => delete data[field]);
        return builder;
      },
      fk() {
        fkFields.forEach((field) => delete data[field]);
        return builder;
      },
      time() {
        timeFields.forEach((field) => delete data[field]);
        return builder;
      },
      // Public DTO: remove PKs, FKs, and timestamps
      public() {
        pkFields.forEach((field) => delete data[field]);
        fkFields.forEach((field) => delete data[field]);
        timeFields.forEach((field) => delete data[field]);
        return builder;
      },
      json() {
        return data;
      },
    };

    return builder;
  },
  excludeEach(rows, fields = []) {
    if (!Array.isArray(rows)) {
      throw new TypeError('excludeEach() expects an array');
    }

    // Gracefully handle empty arrays with chainable no-op builder
    if (rows.length === 0) {
      return {
        pk() {
          return this;
        },
        fk() {
          return this;
        },
        time() {
          return this;
        },
        public() {
          return this;
        },
        json() {
          return [];
        },
      };
    }

    // Guard: ensure all elements are Sequelize Model instances
    rows.forEach((row) => {
      if (!(row instanceof Model)) {
        throw new TypeError(
          'excludeEach() expects a Sequelize Model instances',
        );
      }
    });

    // Use first row to extract shared model metadata
    const model = rows[0];

    const pkFields = getPrimaryKeys(model);
    const fkFields = getForeignKeys(model);
    const timeFields = getTimestamps(model);

    const datas = rows.map((row) => {
      const data = row.toJSON();
      fields.forEach((field) => delete data[field]);
      return data;
    });

    const builder = {
      pk() {
        datas.forEach((data) => {
          pkFields.forEach((field) => delete data[field]);
        });
        return builder;
      },
      fk() {
        datas.forEach((data) => {
          fkFields.forEach((field) => delete data[field]);
        });
        return builder;
      },
      time() {
        datas.forEach((data) => {
          timeFields.forEach((field) => delete data[field]);
        });
        return builder;
      },
      // Public DTO: remove PKs, FKs, and timestamps from all items
      public() {
        datas.forEach((data) => {
          pkFields.forEach((field) => delete data[field]);
          fkFields.forEach((field) => delete data[field]);
          timeFields.forEach((field) => delete data[field]);
        });
        return builder;
      },
      json() {
        return datas;
      },
    };

    return builder;
  },
};

module.exports = helpers;
