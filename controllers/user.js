const { User } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            });
    },

    getUserById(req, res) {
        User.findOne({ _id: req.params.id })
            .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
            }
            res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
    },

    createUser(req, res) {
        User.create(req.body)
            .then(userData => res.json(userData))
            .catch(err => res.status(400).json(err));
    },

    updateUser(req, res) {
        User.findOneAndUpdate({_id: req.params.id}, body, { new: true })
            .then(userData => {
                if (!userData) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
                }
                res.json(userData);
            })
            .catch(err => res.status(400).json(err));
    },

    deleteUser(req, res) {
        User.findOneAndDelete({_id: req.params.id})
            .then(userData => {
                if(!userData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(userData);
            })
            .catch(err => res.status(400).json(err));
    },

    addFriend( req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            { $push: { friends: req.params.friendId }},
            { new: true }
        )
        .then(userData => {
            if(!userData) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
            }
            res.json(userData);
        })
        .catch(err => res.status(400).json(err));
    },

    deleteFriend( req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            { $pull: { friends: req.params.friendId }},
            { new: true }
        )
        .then(userData => {
            if(!userData) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
            }
            res.json(userData);
        })
        .catch(err => res.status(400).json(err));
    }
}


module.exports = userController;