build-dev:
	docker build -t client-dev -f Dockerfile.dev .

run:
	docker run -i -d -p 5000:5000 client-dev


##########



build-local:
	docker build \
		-t client-production:local \
		--build-arg CADDYFILE=Caddyfile.local \
		--build-arg BASE_URL=http://localhost:5001/api \
		-f Dockerfile.production .


##########

build-production:
	docker build \
		-t client-production:production \
		--build-arg CADDYFILE=Caddyfile.production \
		--build-arg BASE_URL=https://app.capstone.civdev.rocks/api \
		-f Dockerfile.production .


.PHONY: build-dev build-local build-production