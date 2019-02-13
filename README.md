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

| Key                  | Description                 | Default      |
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
