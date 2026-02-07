# Note

## CLI

1.  Create model and `migration` files

        npx sequelize model:generate \
         --name test \
         --attributes \
        	name:string,isActive:boolean,age:integer,score:float,balance:decimal,birthday:date,type:enum \
        	--underscored

2.  Create migration file

        npx sequelize migration:generate \
        --name add-email-to-users

    - Add column

          queryInterface.addColumn('users', 'email', {
          allowNull: false,
          type: Sequelize.STRING,
          }),

    - Remove column

          queryInterface.removeColumn('users', 'email');

3.  Migrate data into the database

        npx sequelize db:migrate

## Manual Configuration

1. Manually make fields snake case

2. Rename file, `create-test` => `create-tests`
