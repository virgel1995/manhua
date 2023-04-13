import mongoose, { Schema, model } from "mongoose";

const websitesModel = new Schema(
  {
    url: {
      type: String,
      required: [true, "Website Url is Required"],
      unique: [true, " Sorry But we Have Website With Same Url"],
    },
    logo: {
      type: String,
    },
    type: {
      type: String,
      enum: ["manga", "manhua", "anime"],
      default: "manga",
    },
    langs: [String],
    user: {
      required: [true, "User Id is Required"],
      type: mongoose.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Webs = model("Websites", websitesModel);

export async function getSites() {
  try {
    const webs = await Webs.find({});
    // webs.map((data) => {
    //   console.log(data);
    // });

    return {
      status: "Success",
      data: webs,
    };
  } catch (error) {
    return {
      status: "Failed",
      error: error,
    };
  }
}

export async function addSite(data) {
  try {
    const langs = data.langs.map((lang) => lang);
    const web = new Webs({
      url: data.link,
      logo: data.logo,
      langs: langs,
      user: data.user,
    });

    await web.save();
    return {
      status: "Sucess",
      data: web,
    };
  } catch (error) {
    // console.log(error);
    if (error.code === 11000) {
      return {
        status: "Error",
        error: "Sorry But Some Data Taken From Another Person",
        NeddedToCHange: error.keyValue,
      };
    }
    return {
      status: "Error",
      error: error.message,
    };
  }
}
export async function updateSite(id, data) {
  try {
    const website = await Webs.findById(id);
    if (data.langs) {
      const langs = website.langs
        .map((lang) => lang)
        .filter((value) => data.langs.includes(value));
      data.langs = data.langs.filter((e) => e !== langs.toString());
      console.log(data.langs);
      data.langs.map((lang) => website.langs.push(lang));
    }
    website.url = data.url ?? website.url;
    website.logo = data.logo ?? website.logo;
    website.type = data.type ?? website.type;
    await website.save();
    return {
      status: "Sucess",
      data: website ?? "No Data Found",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "Error",
      error: error.errors ?? error,
    };
  }
}

export async function deleteSite(id) {
  try {
     await Webs.findByIdAndDelete(id);
    return {
      status: "Sucess",
      data: "Website Url Hass Benn  Delete Successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "Error",
      error: error.message,
    };
  }
}

export async function findById(id) {
  try {
    const website = await Webs.findById(id);
    // console.log(Object.keys(website.langs),Object.values(website.langs));

    return {
      status: "Sucess",
      data: website ?? "No Data Found",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "Error",
      error: error.message,
    };
  }
}


/**
 * @swagger
 * components:
 *   schemas:
 *     Websites:
 *       type: object
 *       properties:
 *         url:
 *           type: string
 *         logo:
 *           type: string
 *         type:
 *           type: string
 *           enum : ["manga", "manhua", "anime"]
 *         langs:
 *           type: array[String]
 *         user:
 *            $ref: '#/components/schemas/User'
 */