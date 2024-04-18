import Knex from 'knex';

const knex2 = Knex(
    {
        client: 'mysql2', 
        connection: {
          host: process.env.HOSTDB,
          port: process.env.PORTDB,
          user: process.env.USERDB,
          password: process.env.PASSWORDDB,
          database: process.env.DATABASEDB,
        },
    }
);

export default knex2;