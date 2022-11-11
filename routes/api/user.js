const router = require('express').Router();
const {
   getAllUsers,
   getUserById,
   createUser,
   updateUser,
   deleteUser,
   addFriend,
   deleteFriend, 
} = require('../../controllers/user');

router.route('/').get(getAllUsers).post(createUser).put(updateUser);

router.route('/:userId').get(getUserById).delete(deleteUser);

router.route('/:userId/friend').post(addFriend);

router.route('/:userId/friend/friendId').delete(deleteFriend);

module.exports = router;