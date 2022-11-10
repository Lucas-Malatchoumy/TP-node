const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.userRegister = (req, res) => {
  User.findOne({ email: req.body.email }, (error, user) => {
    if (user) {
      res.json({
        message: `Un utilisateur avec l'email : ${user.email} existe déja`,
      });
    } else {
      console.log(req.body);
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      console.log(req.body.password);
      let newUser = new User({ ...req.body, role: "user" });

      newUser.save((error, user) => {
        if (error) {
          res.status(401);
          console.log(error);
          res.json({ message: "Reqûete invalide." });
        } else {
          let userData = {
            id: user._id,
            email: user.email,
            role: user.role,
          };
          jwt.sign(
            userData,
            process.env.JWT_KEY,
            { expiresIn: "30 days" },
            (error, token) => {
              if (error) {
                res.status(500);
                console.log(error);
                res.json({ message: "Impossible de générer le token" });
              } else {
                res.status(201);
                res.json({
                  token,
                  message: `Utilisateur crée : ${user.email}`,
                });
              }
            }
          );
        }
      });
    }
  });
};

exports.loginRegister = (req, res) => {
  // Find user
  User.findOne({ email: req.body.email }, (error, user) => {
    // If user not found
    if (!user) {
      res.status(500);
      console.log(error);
      res.json({ message: "Utilisateur non trouvé" });
    } else {
      // User found
      bcrypt.compare(req.body.password, user.password, (err, check) => {
        if (check === false) {
          res.status(401);
          res.json({ message: "Email ou Mot de passe incorrect" });
        } else {
          let userData = {
            id: user._id,
            email: user.email,
            role: user.role,
          };
          jwt.sign(
            userData,
            process.env.JWT_KEY,
            { expiresIn: "30 days" },
            (error, token) => {
              if (error) {
                res.status(500);
                console.log(error);
                res.json({ message: "Impossible de générer le token" });
              } else {
                res.status(200);
                res.json({ token });
              }
            }
          );
        }
      });
    }
  });
};

exports.getUser = (req, res) => {
  User.find({}, (error, users) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({ message: "Erreur serveur." });
    } else {
      res.status(200);
      res.json(users);
    }
  });
};

exports.deleteAll = (req, res) => {
  User.deleteMany({ email: { $ne: "admin@gmail.com" } }, (error, users) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({ message: "Erreur serveur." });
    } else {
      res.status(200);
      res.json(users);
    }
  });
};
