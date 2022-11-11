const router = require('express').Router();

const {
    getAllThought,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
} = require('../../controllers/thought');

router.route('/').get(getAllThought).post(createThought);

router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;