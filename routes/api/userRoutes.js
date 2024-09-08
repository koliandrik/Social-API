const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController.js');  // Import the user controller

router.route('/').get(getUsers).post(createUser);  // /api/users

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);  // /api/users/:userId

router.route('/:userId/friends/').post(addFriend);  // /api/users/:userId/friends

router.route('/:userId/friends/:friendId').delete(removeFriend);  // /api/users/:userId/friends/:friendId

module.exports = router;  // Export the router
