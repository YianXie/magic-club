<!-- Get the .dump file from cloud database -->
`pg_dump <render-external-url> -F c -f cloud_backup.dump`


<!-- Restore to local database -->

<!-- Drop and recreate the local database (for cleaner sync) -->
`dropdb -U <username> magicclub_db`
`createdb -U <username> magicclub_db`

<!-- Restore (overwrite) -->
`pg_restore -U <username> -d magicclub_db -c cloud_backup.dump`


<!-- If there is permission issues -->
`psql -U <admin-user> -d magicclub_db`
```bash
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN SELECT tablename FROM pg_tables WHERE schemaname = 'public' LOOP
        EXECUTE 'ALTER TABLE public.' || quote_ident(r.tablename) || ' OWNER TO magicclub';
    END LOOP;
    
    FOR r IN SELECT sequence_name FROM information_schema.sequences WHERE sequence_schema = 'public' LOOP
        EXECUTE 'ALTER SEQUENCE public.' || quote_ident(r.sequence_name) || ' OWNER TO magicclub';
    END LOOP;

    FOR r IN SELECT routine_name FROM information_schema.routines WHERE specific_schema = 'public' LOOP
        EXECUTE 'ALTER FUNCTION public.' || quote_ident(r.routine_name) || ' OWNER TO magicclub';
    END LOOP;
END
$$;
```