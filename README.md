# busell-express-test
buy-sell test project

## Install and run mongodb

Open [guide install mongodb](https://github.com/CongTran96/busell-express-test/blob/master/docs/MONGODB_INSTALL.txt) and install step by step

## Install project

* Clone project

```bash
    git clone https://github.com/CongTran96/busell-express-test.git
```

* Go to project

```bash
    cd busell-express-test
```

* Install dependencies

```bash
    yarn
```

* Config eenvironment

```
    open .env file and config
```

* Run project

```bash
    yarn dev:server
```


## Go to the 404 page

* get more fun, go [vampie-404](http://localhost:3000/vampie) or [ops-404](http://localhost:3000/go-to-404)

## Interact with the API

Recommend use POSTMEN to get,post,...

* import sample users data by

```
    GET
    url: localhost:3000/import-data
```

* register user

```
    POST
    url: localhost:3000/api/v1/users/register
    headers: 
        Content-Type: application/x-www-form-urlencoded
    body:
        use x-www-form-urlencoded
        { name, email, password, fullname }
```

* get token base email, password

```
    POST
    url: localhost:3000/api/v1/auth/login
    headers: 
        Content-Type: application/x-www-form-urlencoded
    body:
        use x-www-form-urlencoded
        { email, password }
```

* get auth info

```
    GET
    url: localhost:3000/api/v1/auth
    headers: 
        Content-Type: application/x-www-form-urlencoded
        x-access-token: token
```

* get all user

```
    GET
    url: localhost:3000/api/v1/users
    headers: 
        Content-Type: application/x-www-form-urlencoded
        x-access-token: token
```