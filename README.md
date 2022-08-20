# bookshelf-postgres

- node
- bookshelf
- knex
- postgres
- express

https://bookshelfjs.org/

### setup

this uses pnpm for package management

https://pnpm.io/installation

then run `pnpm install` to install the project dependencies

### importing the db

```
npm run db:copy && db:import
```

alternatively from the shell you can import the db with

```
psql -U postgres -d postgres < backup.sql
```

If you encounter
`ERROR: invalid byte sequence for encoding "UTF8": 0xff`

Simply create a new backup.sql file and copy the contents of the old file into a new file.
Then run the import scripts.

- https://dba.stackexchange.com/questions/4777/how-to-solve-utf8-invalid-byte-sequence-copy-errors-on-a-restore-when-the-sourc

```
echo $LANG
`en_US.utf8` or `en_GB.UTF-8`

export LANG=en_GB.UTF-8
```

### backing up the db

to backup the db simply run `npm run db:backup` this will run the following command on the docker container

```
docker exec <db-container-name> /usr/bin/pg_dump -U postgres postgres > backup.sql
```

### adding new tables

### migrations with knex

install knex globally `npm install -g knex`

- https://www.jsparling.com/set-up-bookshelf-js-for-node-js/
- https://knexjs.org/guide/migrations.html

1. create a knexfile
2. `npx knex migrate:make create_table`
