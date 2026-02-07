# Note

## CLI

1.  Create seed file

    npx sequelize seed:generate --name users
    - Bulk insert

          await queryInterface.bulkInsert('users', users);

      Insert array of objects, with:
      - created_at: new Date()
      - updated_at: new Date()

    - Bulk delete

          await queryInterface.bulkDelete('users', null, {});

2.  Migrate data into the database

        npx sequelize db:seed:all
