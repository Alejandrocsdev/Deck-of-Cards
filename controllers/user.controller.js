const usersService = require('../services/user.service');

const { asyncHandler } = require('../middlewares');

exports.getUsers = asyncHandler(async (req, res) => {
  const users = await usersService.findAll();
  res.json(users);
});

exports.createUser = asyncHandler(async (req, res) => {
  const user = await usersService.create(req.body);
  res.status(201).json(user);
});
