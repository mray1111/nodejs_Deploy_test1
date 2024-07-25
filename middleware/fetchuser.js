

const fetchuser = (req, res, next) => {
  try {
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "Invalid token. Authentication failed.",
    });
  }
};


module.exports = fetchuser;
