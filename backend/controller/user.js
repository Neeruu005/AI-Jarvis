
import  User from "../model/model.js";



export const  createUser = async (req, res) => {
  const { name, email, message } = req.body;

  try {
   
    const newUser = new User({
      name,
      email,
      message
    });
   
  
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
    console.log(saveUser);
  } catch (error) {
    res.status(409).json(error);
  }
};


//   get all find
export const getUser = async (req, res) => {
  const query = User.find();
  try {
    if (req.query) {
      const user = await query.sort(req.query).exec();
      console.log(user);
      res.status(200).json(user);
    } else {
      const user = await query.exec();
      console.log(user);
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
