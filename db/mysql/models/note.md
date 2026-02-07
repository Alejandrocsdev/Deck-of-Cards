# Note

## CLI

- Create `model` and migration files

      npx sequelize model:generate \
       --name test \
       --attributes \
      	name:string,isActive:boolean,age:integer,score:float,balance:decimal,birthday:date,type:enum \
      	--underscored

## Manual Configuration

1.  Make class and model capital (3 places)

2.  Add tableName

        modelName: 'Test',
        tableName: 'tests',
        underscored: true,

3.  Optional: disable timestamps (createdAt, updatedAt)

    Default: true

        timestamps: false

4.  Add allowNull

        {
        allowNull: false,
        type: DataTypes.STRING
        },

    - STRING
    - TEXT
    - BOOLEAN
    - INTEGER
    - FLOAT
    - DECIMAL
    - BIGINT
    - DATE
    - DATEONLY
    - ENUM
