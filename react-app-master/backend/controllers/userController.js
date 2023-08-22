const users = require("../models/userSchema");

exports.userregister = async (req, res) => {
      const { username, email, password } = req.body;
    
      if (!username || !email || !password) {
        res.status(400).json({ error: "Fill all Fields" });
      }
    
      try {
        const preuser = await users.findOne({ username: username});
    
        if (preuser) {
          res.status(400).json({ error: "User already exist" });
        } else {
          const userregister = new users({
            username,
            email,
            password,
          });
    
          const storeData = await userregister.save();
          res.status(200).json(storeData);
        }
      } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
      }
    };


//CHECK PHONE INFORMATION IN DATABASE
exports.userlogin = async (req, res) => {
      const { username } = req.body;

      try {
            const user = await users.findOne({ username: username });

            if (user) {
                  res.status(201).json({ exists: true, username: user.username });

            } else {
                  res.status(200).json({ exists: false });
            }

      } catch (error) {
            console.error("Error while querying MongoDB:", error);
            res.status(500).json({ error: "Unable to connect with DB" });
      }
};
