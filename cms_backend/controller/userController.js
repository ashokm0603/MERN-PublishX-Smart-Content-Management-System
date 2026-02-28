// delete profile
const Users = require("../model/UserModel");
const bcrypt = require("bcrypt");
// add users
const addUsers = async (req, res) => {
  try {
    const { name, phone, password, email } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);
    await Users.insertOne({
      name: name,
      phone: phone,
      password: encryptedPassword,
      email: email,
    });

    res.status(200).json({ message: "user register successfully" });
  } catch (err) {
    res.status(500).json({ message: "failed to add user" });
  }
};

// get  all users
const getUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    if (!allUsers) {
      res.status(404).json({ message: "Users not Found" });
    }
    res.status(200).json({ allUsers });
  } catch (err) {
    res.status(500).json({ message: "Server not found" });
  }
};

//get user based on ID

const getUser = async (req, res) => {
  try {
    const retrievedUser = await Users.findById(req.params.id);
    if (!retrievedUser) {
      res.status(404).json({ message: "User not Found" });
    }
    res.status(200).json({ retrievedUser });
  } catch (err) {
    res.status(500).json({ message: "Server not found" });
  }
};

// edit profile

const editUserDetails = async (req, res) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        phone: req.body.phone,
        password: req.body.password,
        email: req.body.email,
      },
      { new: true },
    );
    if (!updatedUser) {
      res.status(404).json({ message: "User not Found" });
    }
    res.status(200).json({ message: "Updated Successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "server Not found" });
  }
};

const loginUser = async (req, res) => {
  // try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email: email });


    console.log(user);
    
    const correctPassword = await bcrypt.compare(password, user.password);

    console.log(correctPassword);
    
    if (user.email == email && correctPassword ) {
      res.status(200).json({ message: "Login Successfully", user });
      console.log("email Wrong");
    }
    else{
      if(user.email!=email){
        res.status(404).json({message:"Wrong Email "})
      }else{
        
        res.status(404).json({message:"Wrong Password"})

      }
    }
  }
//   } catch (error) {
//     res.status(500).json({ message: "Server Not Found" });
//   }
// };

module.exports = {
  addUsers,
  getUser,
  getUsers,
  editUserDetails,
  loginUser,
}
