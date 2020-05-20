// db env
const prod = {
    db: {
        username: process.env.PROD_DB_USERNAME || 'th3m7J0',
        password: process.env.PROD_DB_PASSWORD || 'niceTryHaha',
        host: process.env.PROD_DB_HOST || 'localhost',
        port: parseInt(process.env.PROD_DB_PORT) || 27017,
        name: process.env.PROD_DB_NAME || 'prod_api'
    }
};


const dev = {
    db: {
        username: process.env.DEV_DB_USERNAME || 'th3m7J0',
        password: process.env.DEV_DB_PASSWORD || 'niceTryHaha',
        host: process.env.DEV_DB_HOST || 'localhost',
        port: parseInt(process.env.DEV_DB_PORT) || 27017,
        name: process.env.DEV_DB_NAME || 'dev_api'
    }
};

const test = {
    db: {
        username: process.env.TEST_DB_USERNAME || 'th3m7J0',
        password: process.env.TEST_DB_PASSWORD || 'niceTryHaha',
        host: process.env.TEST_DB_HOST || 'localhost',
        port: parseInt(process.env.TEST_DB_PORT) || 27017,
        name: process.env.TEST_DB_NAME || 'test_api'
    }
};

const config = {
    dev,
    test,
    prod
};

//Set up mongoose connection
const mongoose = require('mongoose');
const { db: { username, password, host, port, name } } = config[process.env.NODE_ENV];
const connectionString = `mongodb://${username}:${password}@${host}:${port}/${name}`;

mongoose.connect(connectionString,{ useNewUrlParser: true,  useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


module.exports = mongoose;
