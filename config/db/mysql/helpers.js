const metaFields = ['createdAt', 'updatedAt'];

const helpers = {
  exclude(row, fields = []) {
    const data = typeof row?.toJSON === 'function' ? row.toJSON() : { ...row };

    fields.forEach((field) => delete data[field]);

    const builder = {
      noId() {
        delete data.id;
        return builder;
      },
      noMeta() {
        metaFields.forEach((field) => delete data[field]);
        return builder;
      },
      public() {
        delete data.id;
        metaFields.forEach((field) => delete data[field]);
        return builder;
      },
      json() {
        return data;
      },
    };

    return builder;
  },
};

module.exports = helpers;
