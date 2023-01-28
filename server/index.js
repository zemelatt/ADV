const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const db = require("./db/db");

const cookieParser = require("cookie-parser");
const { auth } = require("./authcontroler");

const {
  register,
  login,
  logOut,
  allAdventure,
  myadv,
  addAdventure,
  getUpdatingfile,
  Updating,
  deleteAdv,
  view,
} = require("./routecontrol/routeControl");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// photo uploading
app.use("/uploads", express.static("./uploads"));
const multer = require("multer");
const imgconfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `image-${Date.now()}.${file.originalname}`);
  },
});

const upload = multer({
  storage: imgconfig,
  // fileFilter: (req, file, cb) => {
  //   if (
  //     file.mimetype == "image/png" ||
  //     file.mimetype == "image/jpg" ||
  //     file.mimetype == "image/jpeg"
  //   ) {
  //     cb(null, true);
  //   } else {
  //     cb(null, false);
  //     return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
  //   }
  // },
});

// using Router
app.use("/all-adventures", allAdventure); // getting all adventure
app.use("/delete-token", logOut); // logout
app.use("/my-adv/:id", myadv); //view my adventure

app.use("/member", upload.single("photo"), register); // rigestring user
app.use("/login", upload.single("photo"), login); //login user
app.use("/sharing_adventure", upload.single("photo"), auth, addAdventure); //add adventure
app.use("/updating/:id", auth, getUpdatingfile); // getupdating file
app.use("/update/:id", upload.single("photo"), auth, Updating); // updating file
///delete/my-adv/${id}
app.use("/delete/my-adv_id/:NUM", auth, deleteAdv); //delete adv

app.listen(2222, () => {
  console.log("server runing on 2222");
});
