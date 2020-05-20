const {sendErrorProd,sendErrorDev,AppError} = require('./errorsHandler');



module.exports = {
	notFound: function (req, res, next) {
		return next(new AppError(404,'page not found'));
	},
	// eslint-disable-next-line no-unused-vars
	handleOthers: function (err, req, res,next) {

		if (process.env.NODE_ENV === 'dev') {
			// set a context to the err object
			err.context = 'express-generator-enhanced';
			sendErrorDev(err,res);
		} else if (process.env.NODE_ENV === 'prod') {
			sendErrorProd(err,res);
		}
	},
};
