const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());
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

const db = require("./db/db"); // importing database

app.post("/sharing_adventure", upload.single("photo"), (req, res) => {
  const { countryName, placeName, advType, description } = req.body;
  const { filename } = req.file;

  // a function changing 1st letter to capital letter
  let names = [countryName, placeName, advType, description];
  const chenger = function (input) {
    let coll = [];
    for (i = 0; i < 4; i++) {
      coll.push(input[i].charAt(0).toUpperCase() + input[i].slice(1));
    }
    return coll;
  };

  let allCpitals = chenger(names);

  const sql = `INSERT INTO adventurelist (adv_id, countryName, placeName, advType, description, imgFile) values(null,'${allCpitals[0]}','${allCpitals[1]}','${allCpitals[2]}','${allCpitals[3]}', '${filename}')`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ note: "added" });
  });
});
app.post("/member", upload.single("photo"), (req, res) => {
  const { name, email } = req.body;
  const nameOfPerson = name.charAt(0).toUpperCase() + name.slice(1);
  const sql = `INSERT INTO userList (id, userName, userEmail) values(300,'${nameOfPerson}','${email}')`;

  db.query(`select * from userList where id=${nameOfPerson}`, (err, replay) => {
    if (err) throw err;
    if (replay) {
      db.query(sql, (err, result) => {
        if (err) console.log(err);
      });
    } else {
      res.send({ msg: "already registered" });
    }
  });
});
app.get("/all-adventures", (req, res) => {
  const allsql = "select * from adventurelist";
  db.query(allsql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(2222, () => {
  console.log("server runing on 2222");
});
