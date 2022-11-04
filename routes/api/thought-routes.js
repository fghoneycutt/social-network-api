const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controllers');
//api/thoughts
router.route('/').get(getAllThoughts);
//api/thoughts/<userId>
router.route("/:userId").post(addThought);
//api/thoughts/:id
router
    .route("/:id")
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/:reactionId').delete(removeReaction);
//api/thoughts/
module.exports = router;