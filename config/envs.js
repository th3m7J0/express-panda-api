const dotenv = require('dotenv');
const result = dotenv.config({path: 'app/var/.env'});
if (result.error) {
	throw result.error;
}
const { parsed: envs } = result;


module.exports = envs;
