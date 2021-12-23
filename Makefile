######################################

#Build the API and Client docker files from root dir (DEV)
build-dev:
	cd api && $(MAKE) build-dev
	cd client && $(MAKE) build-dev

run-dev:
	ENV=dev docker-compose -f docker-compose-dev.yml up

dev-stop:
	ENV=dev docker-compose -f docker-compose-dev.yml stop
	
dev-down:
	ENV=dev docker-compose -f docker-compose-dev.yml down

#Build production with remote DB (LOCAL)
build-local:
	cd client && $(MAKE) build-local
	cd api && $(MAKE) build

run-local:
	ENV=local docker-compose -f docker-compose-production.yml up

#Build production with remote DB (PROD)
build-production:
	cd api && $(MAKE) build
	cd client && $(MAKE) build-production

run-production:
	ENV=production docker-compose -f docker-compose-production.yml up

prod-stop:
	ENV=local docker-compose -f docker-compose-production.yml stop

prod-down:
	ENV=local docker-compose -f docker-compose-production.yml down

prune:
	docker image prune -a

nuke-image: 
	docker images -a -q | xargs docker rmi -f

######################################

#Run db up migration to populate table
migrate-up:
	knex migrate:latest --knexfile ./api/src/knex/knexfile.ts

#Run db down migration to rollback table
migrate-down:
	knex migrate:rollback --knexfile ./api/src/knex/knexfile.ts

######################################

# Connect to shell on running container
api-shell:
	docker exec -it capstone_api_1 /bin/sh

client-shell:
	docker exec -it capstone_client_1 /bin/sh

SSH_STRING:=root@137.184.29.121

ssh:
	ssh $(SSH_STRING)

######################################

copy-files:
	scp -r ./* $(SSH_STRING):/root/


.PHONY: dev-stop dev-down migrate-up migrate-down \
		prod-stop prod-down build-dev api-shell \
		client-shell ssh run-production build-production \
		run-local build-local run-dev prune
