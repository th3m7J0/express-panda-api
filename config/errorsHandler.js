class AppError extends Error {
	constructor(status, msg ) {
		super(msg);

		this.status = status;
		this.msg = msg;
		this.isOperational = true;
	}
}


const sendErrorDev = (err, res) => {
	//console.log(err);
	if(err.name === 'CastError' || err.code === 11000 || err.name === 'ValidationError')
		return res.status(400).json({context:err.context,msg: 'invalid data',err:err});

	if(err.isOperational === true)
		return res.status(err.status).json({context:err.context,msg:err.msg,where:err.where});

	console.log(err);
	return res.status(err.status || 500).json({context:err.context, msg:'Something went very wrong!',err: err });
};

const sendErrorProd = (err, res) => {
	if(err.name === 'CastError' || err.code === 11000 || err.name === 'ValidationError')
		return res.status(400).json({msg: 'invalid data'});

	if(err.isOperational === true)
		return res.status(err.status).json({msg:err.msg});

	console.log(err);
	return res.status(500).json({ msg:'Something went very wrong!'});
};




const catchAsync = (fn,where) => {
	return (req, res, next) => {
		fn(req, res, next).catch(err=>{
			err.where = where;
			next(err);
		});
	};
};

module.exports = {
	AppError,
	catchAsync,
	sendErrorDev,
	sendErrorProd
};
