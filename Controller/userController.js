const User = require("../Model/userModel");
const freelancer = require("../Model/freelancerModel");
const client = require("../Model/clientModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  role: Joi.string().valid("user", "freelancer"),
  password: Joi.string().required(),
});

exports.saveUser = async (req, res) => {
  try {
    const doesUserExist = await User.findOne({ email: req.body.email });

    await schema.validateAsync(req.body);

    if (doesUserExist !== null) {
      return res.status(400).json({ message: "email already exists" });
    }
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
      role: req.body.role,
    });

    if (user.role === "freelancer") {
      freelancer.create({
        _id: user.id,
      });
    } else {
      client.create({
        _id: user.id,
      })
    }
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        email: user.email,
      },
      "DEVZOID"
    );

    user.password = undefined;
    res.status(200).send({ message: "created", user, token });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.deleteUser = (req, res) => {
  res.status(200).json({
    message: "User Deleted",
  });
};

exports.findUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
      return res.status(404).send({ message: "User does not exist" });
    }

    const compare = await bcrypt.compare(req.body.password, user.password);
    if (compare === false) {
      return res.status(404).send({ message: "Wrong Email or Password" });
    }

    user.password = undefined;

    const token = jwt.sign(
      { id: user._id, role: user.role, email: user.email },
      "DEVZOID"
    );

    res.status(200).send({ message: "Logged in", user, token });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};


