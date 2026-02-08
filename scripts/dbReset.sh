#!/bin/bash

ENV=$1

npx sequelize db:drop --env $ENV
npx sequelize db:create --env $ENV
npx sequelize db:migrate --env $ENV
npx sequelize db:seed:all --env $ENV