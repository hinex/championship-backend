# Championship backend 
## Installation
Before run application need to install the latest version of Node.js. 

#### Configuration
First need to change the configuration files for server. Configuration files already into `./config` directory. Configuration files are available for each `NODE_ENV` separately. They also extend from the `default.js` file.
```
config
├── default.js
├── development.js
├── production.js
└── staging.js
```

Documentation: https://github.com/lorenwest/node-config/wiki

#### ENV

| Key                  | Description                  | Default     |
| -------------------- |:----------------------------:| -----------:|
| NODE_ENV             | Env for run application      | development |
| API_PORT             | Port for application         | 5000        |
| DB_HOST              | Host for PostgreSQL server   | 127.0.0.1   |
| DB_NAME              | Name for database            | tt_db       |
| DB_USER              | User name for PostgreSQL     | tt_user     |
| DB_PASSWORD          | Password name for PostgreSQL | tt_password |

#### Run
Before run need to install dependencies, migrations and seeds.
```bash
npm i
npm run migration
npm run seed
``` 

Run with debugger:
```bash
npm run dev
```

Run for staging/production:
```bash
npm run start
```

## Routes

#### GET /countries

*Response:*
```json
{
    "status": true,
    "result": [
        {
            "id": 1,
            "name": "Russia",
            "created_at": "2019-02-13T07:51:59.732Z",
            "updated_at": "2019-02-13T07:51:59.732Z"
        }
    ]
}
```

#### GET /countries/1

*Response:*
```json
{
    "status": true,
    "result": {
        "country": {
            "id": 1,
            "name": "Russia",
            "created_at": "2019-02-13T07:51:59.732Z",
            "updated_at": "2019-02-13T07:51:59.732Z"
        },
        "teams": [
            {
                "id": 1,
                "country": "Russia",
                "name": "Spartak Moscow",
                "created_at": "2019-02-13T07:51:59.739Z",
                "updated_at": "2019-02-13T07:51:59.739Z"
            },
            {
                "id": 2,
                "country": "Russia",
                "name": "CSKA Moscow",
                "created_at": "2019-02-13T07:51:59.739Z",
                "updated_at": "2019-02-13T07:51:59.739Z"
            }
        ]
    }
}
```

#### POST /countries/create
Country Creation Method.

Payload description:

| Key  | Description     | Is Required? |
| ---- |:---------------:| ------------:|
| name | Name of country | yes          |

*Request:*
```bash
curl -X POST \
  http://localhost:5000/countries/create \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{"name": "Turkey"}'
```

*Response (success):*
```json
{
    "status": true
}
```

*Response (error):*
```json
{
    "status": false,
    "error": "validation error child \"name\" fails because [\"name\" is required]"
}
```

#### PUT /countries/update
Country Update Method.

Payload description:

| Key     | Description     | Is Required? |
| ------- |:---------------:| ------------:|
| id      | Item ID         | yes          |
| name    | Name of country | yes          |

*Request:*
```bash
curl -X PUT \
  http://localhost:5000/counntries/update \
  -H 'Content-Type: application/json' \
  -d '{"id": 9, "name": "Egypt"}'
```

*Response (success):*
```json
{
    "status": true
}
```

*Response (error):*
```json
{
    "status": false,
    "error": "validation error child \"id\" fails because [\"id\" is required]. child \"name\" fails because [\"name\" is required]"
}
```

#### DELETE /countries/delete
Country Delete Method.

Payload description:

| Key     | Description     | Is Required? |
| ------- |:---------------:| ------------:|
| id      | Item ID         | yes          |

*Request:*
```bash
curl -X DELETE \
  http://localhost:5000/teams/delete \
  -H 'Content-Type: application/json' \
  -d '{"id": 3}'
```

*Response (success):*
```json
{
    "status": true
}
```

*Response (error):*
```json
{
    "status": false,
    "error": "validation error child \"id\" fails because [\"id\" is required]"
}
```
