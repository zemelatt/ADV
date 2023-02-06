const bcrypt = require("bcrypt");
const db = require("../db/db");
const jwt = require("jsonwebtoken");

// creating token
let maxAgee = 2 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "wknjkwbcjc", { expiresIn: maxAgee });
};

// fetch all adv
module.exports.allAdventure = (req, res) => {
  const allsql = "select * from adventurelist";
  db.query(allsql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
//get adv based on adv_id
module.exports.getOne = (req, res) => {
  const { id } = req.params;
  const allsql = `select * from adventurelist where adv_id = ${id}`;
  db.query(allsql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
//counting likes
module.exports.like = (req, res) => {
  const imgId = req.params.id;
  const userId = req.params.userId;
  const userName = req.params.userName;

  const allsql = `select * from likeList where imageId='${imgId}' and userId='${userId}' AND userName='${userName}'`;
  const likesql = `INSERT INTO likeList (likeId,imageId,userId,userName ) values(null,'${imgId}','${userId}','${userName}')`;
  const Delete = `DELETE FROM likeList WHERE imageId='${imgId}' and userId='${userId}' and userName='${userName}'`;
  db.query(allsql, (err, result) => {
    if (err) throw err;

    if (result.length == 0) {
      db.query(likesql, (err, result) => {
        if (err) throw err;
        res.send({ note: "liked" });
      });
    } else {
      db.query(Delete, (err, result) => {
        if (err) throw err;
        res.send({ note: "dislike" });
      });
    }
  });
};
//counting dislikes
module.exports.dislike = (req, res) => {
  const { id, userId, username } = req.params;

  const allsql = `select * from dislikelist where imageId='${id}' and userId='${userId}' and username='${username}'`;
  const likesql = `INSERT INTO dislikelist (dislikeId,imageId,userId,username ) values(null,'${id}','${userId}','${username}')`;
  const Delete = `DELETE FROM dislikelist WHERE imageId='${id}' and userId='${userId}' and username='${username}'`;
  db.query(allsql, (err, result) => {
    if (err) throw err;
    if (result.length == 0) {
      db.query(likesql, (err, result) => {
        if (err) throw err;
        res.send({ note: "hate" });
      });
    } else {
      db.query(Delete, (err, result) => {
        if (err) throw err;
        res.send({ note: "normal" });
      });
    }
  });
};

// number of likes
module.exports.numberOfLike = (req, res) => {
  const imgId = req.params.id;

  const noLike = `select * from likeList where imageId='${imgId}'`;
  db.query(noLike, (err, result) => {
    let noOfLike = result.length;

    if (noOfLike < 1) {
      res.send({ results: 0 });
    } else {
      res.send({ results: noOfLike, user: result[0].userId });
    }
  });
};
//number of dislikes
module.exports.numberOfhate = (req, res) => {
  const imgId = req.params.id;
  const noLike = `select * from dislikelist where imageId='${imgId}'`;
  db.query(noLike, (err, result) => {
    let noOfDisLike = result.length;
    if (noOfDisLike == 0) {
      res.send({ numOfDisLiker: 0 });
    } else {
      res.send({ results: noOfDisLike, disLiker: result[0].userId });
    }
  });
};
// fetch my adv based on user id
module.exports.myadv = (req, res) => {
  const id = req.params.id;
  const adv = `select * from adventurelist where user_id='${id}' `;
  db.query(adv, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
};
// logout clear cookies
module.exports.logOut = (req, res) => {
  res.clearCookie("token");

  res.send({ msg: "deleted token" });
};
// register new user
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
// formating password if user is forgot the password
module.exports.formatPassword = (req, res) => {
  const { name, email } = req.body;
  const sql = `select * from userlist where userName='${name}' AND userEmail='${email}'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send({ next: result });
    } else {
      res.send({ msg: "no user based on this onfo" });
    }
  });
};
// reset the use password
module.exports.resetPassword = async (req, res) => {
  const { password } = req.body;
  const id = req.params.id;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const updatePass = `UPDATE userlist SET password='${hashedPassword}'  WHERE id='${id}'`;
  db.query(updatePass, (err, result) => {
    if (err) throw err;
  });
};
// login user if they are registered
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
          res.send({ destination: result[0].userName, id: result[0].id });
        }
      } else {
        res.send({ msg: "Err: password is not correct" });
      }
    }
  });
};
// adding new adventures
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
// updating the the added adventure
module.exports.getUpdatingfile = (req, res) => {
  const id = req.params.id;
  const adv = `select * from adventurelist where adv_id='${id}' `;
  db.query(adv, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
// updating adv
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
  const { advId } = req.params;

  const deleteAdv = `DELETE FROM adventurelist WHERE adv_id=${advId}`;
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
