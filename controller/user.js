const User = require("../model/user");

exports.test = async (req, res, next) => {
  res.send("Hello");
  res.end();
};

exports.practice = async (req, res, next) => {
  try {
    const data = await User.find({ _id: "64c89aafc5a2d9eff06780a7" })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
    res.status(200).json({ message: "Success", data: data });
  } catch (err) {
    console.log(err);
  }
};
