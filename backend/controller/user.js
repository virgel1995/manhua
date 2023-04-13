import bcrypt from "bcryptjs";
import {
  addUser,
  findByEmail,
  findUser,
  getUsers,
} from "../database/models/User.js";
import { generateToken } from "../utils/functions.js";

async function Register(req, res) {
  const data = req.body;
  const rigsterUser = {
    name: data.name,
    email: data.email,
    password: bcrypt.hashSync(data.password),
  };
  const newUser = await addUser(rigsterUser);
  res.status(200).send({
    user: newUser,
    token: generateToken(newUser),
  });
}

async function Login(req, res) {
  const data = req.body;
  const userData = await findByEmail(data.email);
  const user = userData.data;
  // console.log(user)
  if (user) {
    if (bcrypt.compareSync(data.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: "Invalid email or password" });
}

async function getUser(req, res) {
  const id = req.params.id;
  const user = await findUser(id);
  res.send(user);
}


export async function AllUsers(req, res) {
  const users = await getUsers();
  res.send(users);
}
export { Login, Register, getUser };
