## Setup

```bash
OS
install docker v.3.1.1
npm install - g serverless
npm install -g typescript

inside the project
npm install
serverless dynamodb install (or to use a persistent docker dynamodb instead, open a new terminal: cd ./dynamodb && docker-compose up -d)
serverless offline start
serverless dynamodb migrate (this imports schema)
```

## Run service offline

```bash
serverless offline start
```

## Usage

You can create, retrieve, update, or delete vehicles with the following commands:

### Create a Vehicle

```bash
curl -X POST -H "Content-Type:application/graphql" -d "mutation {createVehicle(make: \"VW\", model: \"Golf\", transmission: MANUAL_GEARBOX, mileage: 10000, fuel_type: PETROL, vehicle_type: SUV, vehicle_color: \"BLACK\") { id make model transmission mileage fuel_type vehicle_type vehicle_color }}" "http://localhost:3000/dev/vehicles"
```

Example Result:
```bash
{"data":{"createVehicle":{"id":"de741d00-d810-11eb-9ced-f5458d80f4f6","make":"VW","model":"Golf","transmission":"MANUAL_GEARBOX","mileage":10000,"fuel_type":"PETROL","vehicle_type":"SUV","vehicle_color":"BLACK"}}}%
```

### List all Vehicles

```bash
curl -X POST -H "Content-Type:application/graphql" -d "query { listVehicles { id make model transmission mileage fuel_type vehicle_type vehicle_color } }" "http://localhost:3000/dev/vehicles"
```

Example output:
```bash
{"data":{"listVehicles":[{"id":"2a342640-d80c-11eb-b8d2-153cb284dce0","make":"VW","model":"Touareg","transmission":"MANUAL_GEARBOX","mileage":10000,"fuel_type":"PETROL","vehicle_type":"SUV","vehicle_color":"BLACK"},
{"id":"de741d00-d810-11eb-9ced-f5458d80f4f6","make":"VW","model":"Golf","transmission":"MANUAL_GEARBOX","mileage":10000,"fuel_type":"PETROL","vehicle_type":"SUV","vehicle_color":"BLACK"}]}}%
```

### Get one Vehicle

```bash
# Replace the <id> part with a real id from your todos table
curl -X POST -H "Content-Type:application/graphql" -d "query {viewVehicle(id: \"<id>\") { id make model transmission mileage fuel_type vehicle_type vehicle_color }}" "http://localhost:3000/dev/vehicles"
```

Example Result:
```bash
{"data":{"viewVehicle":{"id":"de741d00-d810-11eb-9ced-f5458d80f4f6","make":"VW","model":"Golf","transmission":"MANUAL_GEARBOX","mileage":10000,"fuel_type":"PETROL","vehicle_type":"SUV","vehicle_color":"BLACK"}}}%
```

### Update a Vehicle

```bash
# Replace the <id> part with a real id from your vehicles table
curl -X POST -H "Content-Type:application/graphql" -d "mutation {updateVehicle(id: \"<id>\", make: \"VW\", model: \"Touareg\", transmission: MANUAL_GEARBOX, mileage: 10000, fuel_type: PETROL, vehicle_type: SUV, vehicle_color: \"BLACK\") { id make model transmission mileage fuel_type vehicle_type vehicle_color }}" "http://localhost:3000/dev/vehicles"
```

Example Result:
```bash
{"data":{"updateVehicle":{"id":"2a342640-d80c-11eb-b8d2-153cb284dce0","make":"VW","model":"Touareg","transmission":"MANUAL_GEARBOX","mileage":10000,"fuel_type":"PETROL","vehicle_type":"SUV","vehicle_color":
"BLACK"}}}
```

### Delete a Vehicle

```bash
# Replace the <id> part with a real id from your vehicles table
curl -X POST -H "Content-Type:application/graphql" -d "mutation {removeVehicle(id: \"<id>\")}" "http://localhost:3000/dev/vehicles"
```

Example Result:
```bash
{"data":{"removeVehicle":true}}
```