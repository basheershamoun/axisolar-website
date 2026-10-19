.PHONY: up install build preview shell down clean

RUN = docker compose run --rm

up:             ## Start the dev server at http://localhost:4321
	docker compose up

install:        ## Install deps into the node_modules volume
	$(RUN) app npm ci

build:          ## Production build into dist/
	$(RUN) app npm run build

preview:        ## Build, then serve dist/ at http://localhost:4321
	$(RUN) --service-ports app sh -c "npm run build && npm run preview -- --host 0.0.0.0"

shell:          ## Shell inside the container
	$(RUN) app bash

down:           ## Stop containers
	docker compose down

clean:          ## Stop containers and drop the node_modules volume
	docker compose down -v
