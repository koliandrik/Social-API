const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController.js');  // Import the thought controller

router.route('/').get(getAllThoughts).post(createThought);  // /api/thoughts

router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);  // /api/thoughts/:thoughtId

router.route('/:thoughtId/reactions').post(addReaction);  // /api/thoughts/:thoughtId/reactions

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);  // /api/thoughts/:thoughtId/reactions/:reactionId

module.exports = router;  // Export the router