const users = [];

exports.createUser = (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
   users.push(user);
   res.status(201).send(user);
};



exports.getUsers = (req, res) => {
     res.send(users);
};

exports.updateUser = (req, res) => {
    const user = users.find((u) => u.name === String(req.params.name));
   // console.log(user);
    if (!user) {
      res.status(404).send('User not found');
    } else {
      user.name = req.body.name;
      user.email = req.body.email;
      user.age = req.body.age;
      res.send(user);
    }
};

