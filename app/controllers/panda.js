const crudHelper = require('crud-helper');
const pandaModel = require('../models/panda');
const extra = require('../helpers/extra');


module.exports = {
    create: crudHelper.create(pandaModel,(req)=>{
        const {name,skill} = req.body;
        return {name:name,skill:skill};
    }),
    getByMany: crudHelper.getByMany(pandaModel),
    getById: crudHelper.getById(pandaModel),
    updateById: crudHelper.updateById(pandaModel,(req)=>{
        const {name,skill} = req.body;
        const myBody = {name:name,skill:skill};
        return extra.flexible(myBody);
    }),
    deleteById: crudHelper.deleteById(pandaModel),

}
