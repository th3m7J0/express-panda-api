const {catchAsync,AppError} = require('../../config/errorsHandler');


module.exports = {
    exist:  (data) => {
        return (data !== null && data!== undefined && data!=='' && data.length !== 0);
    },

};
