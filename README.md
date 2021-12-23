## UALR Capstone Fall 2021

# Helen - A Call Tracking App

[![CircleCI](https://circleci.com/gh/ualr-TEAM2/capstone.svg?style=svg)](https://circleci.com/gh/ualr-TEAM2/capstone)

### Quickstart

```bash
# Run in development mode:
make dev-up


# Run in development mode, rebuilding images:
make dev-build
```

To seed the database with dummy data, connect to a shell on the running api container and run a couple npm scripts

```bash
# Connect to a shell on the running api container and seed the database with dummy data

make api-shell

~/api $ npm run migrate
~/api $ npm run seed

# To rollback database tables
~/api $ npm run migratedown
```

Build containers for production

```bash
# Build Docker images :
make api-build
make client-build


# Run specific image :
make api-run
make client-run


# Push images to Docker Hub:
make api-push
make client-push
```
