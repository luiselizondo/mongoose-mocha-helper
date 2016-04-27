# Mongoose Mocha Helper
Use a real database to do unit testing with Mocha and Mongoose

## Usage
Just require the module in your tests files and pass a MongoDB.
It has to be a *real* database, you can create one with Docker.

```
  var mongodb = mongodb://127.0.0.1:27017/mydatabase;
  require('mongoose-mocha-helper')(mongodb);
```

## Creating a database with Docker
You can use Docker to create a database and run your tests. If you're using docker-compose you can
create a script like the following:

```
#!/bin/bash

docker-compose -f docker-compose-dev.yml up -d db
docker-compose -f docker-compose-dev.yml run --rm web npm test

docker-compose -f docker-compose-dev.yml stop db
docker-compose -f docker-compose-dev.yml rm -f db
```

## License
Released under the MIT License
