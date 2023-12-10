const { Router } = require('express');
const { checkUserBody } = require('../middlewares/validator');
const { AddUser, UpdateUser, DeleteUser, GetUsers, GetUser, Login, BanUser } = require('../controllers/user');
const { auth, isDoctor } = require('../middlewares/auth');

const router = Router();

router.route('/')
    .get(GetUsers)
    .post(checkUserBody, AddUser);
router.route('/:id')
    .get(GetUser)
    .put(auth, UpdateUser)
    .delete(auth, DeleteUser);

router.post('/login', Login);
router.put('/ban/:id', auth, isDoctor, BanUser);

module.exports = router;