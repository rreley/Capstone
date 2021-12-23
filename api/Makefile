build-dev:
	docker build -t api-dev -f Dockerfile.dev .

run:
	docker run -d -p 5001:5001 api-dev

##########

build:
	docker build -t api-server .

run:
	docker run -d -p 5001:5001 api-server



.PHONY: build run