const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controllers');
//api/thoughts
router.route('/').get(getAllThoughts);
//api/thoughts/<userId>
router.route("/:userId").post(addThought);
//api/thoughts/:id
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
module.exports = router;