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

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);  // /api/users/:userId/friends/:friendId

module.exports = router;  // Export the router
