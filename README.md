# express-panda-api
This is nodejs REST API used with crud-helper package npm and mongodb database 

## requirements 

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

## api doc

[check this awesome api doc with postman ](https://documenter.getpostman.com/view/11334837/Szt5gWhR)
