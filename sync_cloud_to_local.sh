#!/bin/bash

# Get the variables
source .env

# Get the changes from the cloud
pg_dump $DATABASE_URL -F c -f cloud_backup.dump

# Recreate the database for cleaner sync
dropdb -U $DATABASE_USER $DATABASE_NAME
createdb -U $DATABASE_USER $DATABASE_NAME

# Restore (overwrite) the local database
pg_restore -U $DATABASE_USER -d $DATABASE_NAME cloud_backup.dump --no-owner --no-acl

# Clean up the backup file
rm cloud_backup.dump
echo "Temporary backup file removed."
echo "Local database is now in sync with the cloud."