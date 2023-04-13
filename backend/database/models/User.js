import { makeuid } from "../../utils/functions.js";
import { Schema, model } from "mongoose";

var UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User Name Is Required"],
    },
    email: {
      type: String,
      required: [true, "User Email Is Required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "User Password Is Required"],
      min: [6, "Password canot be leth than 6 chracters"],
      max: [25, "Password canot be more than 25 chracters"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    userType: {
      type: String,
      enum: ["user", "creator"],
      default: "user",
    },
    username: {
      type: String,
      default: () => makeuid(20),
    },
    access_token: {
      type: String,
      default: () => makeuid(60),
    },
    refresh_token: {
      type: String,
      default: () => makeuid(60),
    },
    avatar: {
      type: String,
      default: "",
    },
    coins: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

var User = model("User", UserSchema);

export async function getUsers() {
  try {
    const users = await User.find({});
    return {
      status: "Sucess",
      length: users.length,
      users: users,
    };
  } catch (error) {
    return {
      status: "Error",
      error: error.message,
    };
  }
}
export async function findUser(id) {
  try {
    const user = await User.findById(id).exec();
    return {
      status: "Sucess",
      data: user,
    };
  } catch (error) {
    return {
      status: "Error",
      error: "User Not Found",
    };
  }
}
export async function findByEmail(email) {
  try {
    const user = await User.findOne({ email: email });
    return {
      status: "Sucess",
      data: user,
    };
  } catch (error) {
    return {
      status: "Error",
      error: "User Not Found",
    };
  }
}
export async function addUser(data) {
  try {
    const newUser = new User({
      ...data,
    });
    await newUser.save();
    return {
      status: "Sucess",
      data: newUser,
    };
  } catch (error) {
    if (error.code === 11000) {
      return {
        status: "Error",
        error: "Sorry But Some Data Taken From Another Person",
        NeddedToCHange: error.keyValue,
        e: error,
      };
    }
    return {
      status: "Error",
      error: error.message,
    };
  }
}

export async function deleteUser(id) {
  try {
    const user = await User.findByIdAndDelete(id);
    return {
      status: "Sucess",
      data: "User Url Hass Benn  Delete Successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "Error",
      error: error.message,
    };
  }
}

export async function updateUser(id, data) {
  try {
    const user = await User.findById(id);
    user.name = data.name ?? user.name;
    user.email = data.email ?? user.email;
    user.password = data.password ?? user.password;
    user.username = data.username ?? user.username;
    await user.save();
    return {
      status: "Sucess",
      data: user ?? "No Data Found",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "Error",
      error: error.errors ?? error,
    };
  }
}

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         userType:
 *           type: string
 *           enum : ["user", "creator"]
 *         password:
 *           type: string
 *         isAdmin:
 *           type: boolean
 *         username:
 *           type: string
 *         avatar:
 *           type: string
 *         coins:
 *           type: number
 *         access_token:
 *           type: string
 *         refresh_token:
 *           type: string
 */
