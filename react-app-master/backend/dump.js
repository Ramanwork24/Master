const users = require("../models/userSchema");
//CHECK PHONE INFORMATION IN DATABASE
// exports.userphone = async (req, res) => {
//       const { username } = req.body;

//       try {
//             const user = await users.findOne({ username: username });

//             if (user) {
//                   res.status(201).json({ exists: true, username: user.username });

//             } else {
//                   res.status(200).json({ exists: false });
//             }

//       } catch (error) {
//             console.error("Error while querying MongoDB:", error);
//             res.status(500).json({ error: "Unable to connect with DB" });
//       }
// };

// exports.userregister = async (req, res) => {
//       const { username, email, password, cpassword } = req.body;

//       if (!username || !email || !password || !cpassword) {
//             res.status(400).json({ error: "Fill all Fields" });
//       }

//       try {
//             console.log("before fining email");
//             const user = await users.findOne({ email: email });
//             console.log("after fining email");

//             if (user) {
//                   console.log("if statement");
//                   res.status(400).json({ error: "Alerady exist" });
//             }

//             else {
//                   console.log("before saving");
//                   const userregister = new users({
//                         username,
//                         email,
//                         password, 
//                         cpassword,
//                   });
//                   console.log("after newuser");
//                   const storeData = await userregister.save();
//                   console.log("after saving");
//                   res.status(200).json({exist: false});
//                   console.log("after json");
//             }
//       } catch (error) {
//             console.error("Error while querying MongoDB:", error);
//             res.status(500).json({ error: "Unable to connect with DB" });
//       }


// }; 




// exports.userregister = async (req, res) => {
//       const { fname, email, phone } = req.body;

//       if (!fname || !email || !phone) {
//             res.status(400).json({ error: "Fill all Fields" });
//       }

//       try {
//             const preuser = await users.findOne({ phone: phone });

//             if (preuser) {
//                   res.status(400).json({ error: "User already exist" });
//             } else {
//                   const userregister = new users({
//                         fname,
//                         email,
//                         phone,
//                   });

//                   const storeData = await userregister.save();
//                   res.status(201).json({ user: userregister });
//             }
//       } catch (error) {
//             res.status(400).json({ error: "Invalid Details", error });
//       }
// };