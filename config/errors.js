const {sendErrorProd,sendErrorDev,AppError} = require('./errorsHandler');



module.exports = {
	notFound:  (req, res, next)=> {
		return next(new AppError(404,'page not found'));
	},
	handleOthers:  (context)=>{
		// eslint-disable-next-line no-unused-vars
		return (err, req, res,next)=> {
			if (process.env.NODE_ENV === 'dev') {
				// set a context to the err object
				err.context = context;
				sendErrorDev(err,res);
			} else if (process.env.NODE_ENV === 'prod') {
				sendErrorProd(err,res);
			}
		};
	},
};
