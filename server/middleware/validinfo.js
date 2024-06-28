const validateInfo = (req, res, next) => {
  const { email, password, contactNo } = req.body;

  const validEmail = (userEmail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  };

  const validContactNo = (userContactNo) => {
    // test Philippine phone numbers +639XXXXXXXXX or 09XXXXXXXXX
    return /^(09|\+639)\d{9}$/.test(userContactNo);
  };

  if (req.path === "/register") {
    if (![email, password].every(Boolean)) {
      return res.status(401).json("Missing credentials");
    } else if (!validEmail(email)) {
      return res.status(401).json("Invalid email");
    }

    if (!validContactNo(contactNo)) {
      return res.status(401).json("Invalid phone number");
    }
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.status(401).json("Missing credentials");
    } else if (!validEmail(email)) {
      return res.status(401).json("Invalid email");
    }
  }

  next();
};

export default validateInfo;
