const bcrypt = require("bcrypt");
const db = require("../db/db");
const jwt = require("jsonwebtoken");

// creating token
let maxAgee = 2 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "wknjkwbcjc", { expiresIn: maxAgee });
};
module.exports.allAdventure = (req, res) => {
  const allsql = "select * from adventurelist";
  db.query(allsql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
module.exports.logOut = (req, res) => {
  res.clearCookie("token");
  console.log("logout");
  res.send({ msg: "deleted token" });
};

module.exports.myadv = (req, res) => {
  const id = req.params.id;

  const adv = `select * from adventurelist where user_id='${id}' `;
  db.query(adv, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
};
module.exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const allSmallLetter = name.toLowerCase();
  const nameOfPerson =
    allSmallLetter.toLowerCase().charAt(0).toUpperCase() +
    allSmallLetter.slice(1);
  const sql = `INSERT INTO userList (id, userName, userEmail,password) values(null,'${nameOfPerson}','${email}','${hashedPassword}')`;
  db.query(
    `select * from userList where userName='${nameOfPerson}' AND userEmail='${email}'`,
    (err, replay) => {
      if (err) throw err;
      if (replay.length > 1) {
        res.send({ msg: "already registered" });
      } else {
        db.query(sql, (err, result) => {
          if (err) console.log(err);
          res.send(result);
        });
      }
    }
  );
};
module.exports.login = (req, res) => {
  const { name, password } = req.body;
  const sql = `select * from userList where userName='${name}'`;
  db.query(sql, async (err, result) => {
    if (err) throw err;
    if (result.length == 0) {
      res.send({ msg: "Err: User doesn't exist " });
    } else {
      const comparingPass = await bcrypt.compare(password, result[0].password);
      if (comparingPass) {
        const token = createToken(result[0].id);
        res.cookie("token", token, { httpOnly: true });
        if (name == "admin" && password == "test12") {
          res.send({ destination: "admin", id: result[0].id });
        } else {
          res.send({ destination: "user", id: result[0].id });
        }
      } else {
        res.send({ msg: "Err: password is not correct" });
      }
    }
  });
};
module.exports.addAdventure = async (req, res) => {
  const { countryName, placeName, advType, description } = req.body;
  const { filename } = req.file;
  let reqq = req.cookies.token;
  let decoding = await parseJwt(reqq);
  let decodedId = JSON.stringify(decoding.id);
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
  const sql = `INSERT INTO adventurelist (adv_id, countryName, placeName, advType, description, imgFile, user_id) values(null,'${allCpitals[0]}','${allCpitals[1]}','${allCpitals[2]}','${allCpitals[3]}', '${filename}', '${decodedId}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ msg: "Your adventure is added" });
  });
};

module.exports.getUpdatingfile = (req, res) => {
  const id = req.params.id;
  const adv = `select * from adventurelist where adv_id='${id}' `;
  db.query(adv, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
module.exports.Updating = (req, res) => {
  const { id } = req.params;
  const { countryName, placeName, advType, description } = req.body;
  const updateMySql = `UPDATE adventurelist set countryName='${countryName}', placeName='${placeName}',advType='${advType}', description='${description}' where adv_id=${id}`;
  db.query(updateMySql, (err, result) => {
    if (err) throw err;
    res.send({ msg: "updated" });
  });
};
module.exports.deleteAdv = (req, res) => {
  const { NUM } = req.params;
  const deleteAdv = `DELETE FROM adventurelist WHERE adv_id=${NUM}`;
  db.query(deleteAdv, (err, result) => {
    if (err) throw err;
    console.log("deleted");
    res.send({ msg: "deleted" });
  });
};
//decode jwt value

function parseJwt(token) {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}
