const crudHelper = require('crud-helper');
const pandaModel = require('../models/panda');
const extra = require('../helpers/extra');


module.exports = {
    create: crudHelper.create(pandaModel,(req)=>{
        const {name,skill} = req.body;
        return {name:name,skill:skill};
    }),
    getByMany: crudHelper.get(pandaModel,'find',(req)=>{
        return {};
    }),
    getById: crudHelper.get(pandaModel,'findOne',(req)=>{
        return {_id: req.params.id};
    }),
    updateById: crudHelper.update(pandaModel,'findOneAndUpdate',(req)=>{
        return {_id: req.params.id};
    },(req)=>{
        const {name,skill} = req.body;
        const myBody = {name:name,skill:skill};
        return extra.flexible(myBody);
    }),
    deleteById: crudHelper.delete(pandaModel,'findOneAndDelete',(req)=>{
    return {_id: req.params.id};
    }),

}
