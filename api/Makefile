cp_env = cp environments/development.env .env

start:
	$(cp_env)
	docker compose -f docker-compose.yaml up -d

stop:
	docker compose -f docker-compose.yaml down	

build:
	$(cp_env)
	docker compose -f docker-compose.yaml up --build -d

logs:
	docker logs -f api