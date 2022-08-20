# bookshelf-postgres

- node
- [bookshelf](https://bookshelfjs.org/)
- [knex](https://knexjs.org/guide/migrations.html)
- postgres
- express

### setup

this uses pnpm for package management

https://pnpm.io/installation

1. install the project dependencies `pnpm install`
2. create a `.env` file with the contents of `.env.example`
3. `knex migrate:latest`
4. `knex seed:run`
5. `npm run dev`
6. test the api endpoints work with [VSCode REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

### importing the db

imports a db from local `backup.sql` file

```
npm run db:drop
npm run db:create
npm run db:import
```

alternatively you can copy the db to the container with `npm run db:copy` and from the shell you can import the db with:

```
psql -U postgres -d <dbname> < backup.sql
```

If you encounter
`ERROR: invalid byte sequence for encoding "UTF8": 0xff`

Simply create a new backup.sql file and copy the contents of the old file into a new file.
Then run the import scripts.

also check the collation of your db if you encounter issues

```
echo $LANG
`en_US.utf8` or `en_GB.UTF-8`

export LANG=en_GB.UTF-8
```

### backing up the db

to backup the db simply run `npm run db:backup` this will run the following command on the docker container

```
docker exec <db-container-name> /usr/bin/pg_dump -U <dbuser> <dbname> > backup.sql
```

### adding new tables

you will need to create new tables with a migration or with a custom script

### migrations with knex

to use migrations install knex globally `npm install -g knex`

- https://www.jsparling.com/set-up-bookshelf-js-for-node-js/
- https://knexjs.org/guide/schema-builder.html#datetime

You can create and run migrations with the knex cli.

1. create a migration `knex migrate:make create_table`
2. add logic to the migration file to create required tables
3. run the migration `knex migrate:latest` to update the db with new tables

### seeds

you can see the database with data; the migrations will only create the required tables

To run a seed use `npm run seed:run` to run the seed file
