import User from "../Models/user.js"; // Adjust the import path as necessary

export function getUsers(req, res) {
  res.json({
    message: "this is a get request",
  });
}

export function postUsers(req, res) {
  const userData = req.body; // Ensure the variable is not conflicting

  const newUser = new User(userData); // Use the User model correctly
  newUser
    .save()
    .then(() => {
      res.status(201).json({
        message: "User creation successful",
      });
    })
    .catch((error) => {
      console.error(error); // Log the error for debugging
      res.status(500).json({
        message: "User creation failed",
        error: error.message,
      });
    });
}

export function deleteUsers(req, res) {
  res.json({
    message: "this is a delete request",
  });
}

export function putUsers(req, res) {
  res.json({
    message: "this is a put request",
  });
}
