# express-panda-api
This is nodejs REST API used with crud-helper package npm and mongodb database 

## requirements 
- add user `th3m7J0` as admin:
```
use admin
db.createUser(
  {
    user: "th3m7J0",
    pwd: "niceTryHaha",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
```
- connect as admin to a `mongo client` and add api db auth : 
```
use dev_api
db.createUser(
  {
    user: "th3m7J0",
    pwd: "niceTryHaha",
    roles: [ { role: "readWrite", db: "dev_api" } ]
  }
)
```
- add .env file in `app/var/` with the following variables:
```
DEBUG=api:server
CONTEXT=api

NODE_ENV=dev
PORT=3000

PROD_DB_USERNAME=th3m7J0
PROD_DB_PASSWORD=niceTryHaha
PROD_DB_HOST=localhost
PROD_DB_PORT=27017
PROD_DB_NAME=prod_api

DEV_DB_USERNAME=th3m7J0
DEV_DB_PASSWORD=niceTryHaha
DEV_DB_HOST=localhost
DEV_DB_PORT=27017
DEV_DB_NAME=dev_api

TEST_DB_USERNAME=th3m7J0
TEST_DB_PASSWORD=niceTryHaha
TEST_DB_HOST=localhost
TEST_DB_PORT=27017
TEST_DB_NAME=test_api

SENDGRID_API_KEY=
MESSAGEBIRD_API_KEY=

OTHER_API_URL=

JWT_ACCESS_KEY=
```
## start API
- run the panda api in dev mode: `npm run dev`

## api doc
[check this awesome api doc with postman ](https://documenter.getpostman.com/view/11334837/Szt5gWhR)
