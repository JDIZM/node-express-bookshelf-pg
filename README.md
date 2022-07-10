# bookshelf-postgres

- node
- bookshelf
- knex
- postgres
- express

https://bookshelfjs.org/


dump db https://simplebackups.com/blog/docker-postgres-backup-restore-guide-with-examples/

```
docker exec bookshelf-postgres_db_1 /usr/bin/pg_dump -U postgres postgres > backup.sql 
```