const isBoss = (req, res, next) => {
  if (req?.query?.role === "boss") {
    next();
  }

  return res?.json({
    msg: "who are you?",
  });
};

module.exports = isBoss;
