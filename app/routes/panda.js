const express = require('express');
const router = express.Router();
const pandaController = require('../controllers/panda');

router.route('/')
    // add panda using panda model
    .post(
        pandaController.create
    )
    // get all pandas
    .get(
        pandaController.getByMany
    )

router.route('/:id')
    // get panda by id
    .get(
        pandaController.getById
    )
    // put panda by id
    .put(
        pandaController.updateById
    )
    //delete panda by id
    .delete(
        pandaController.deleteById
    )


module.exports = router;
