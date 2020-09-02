const errorHandler = (errors, req, res, next) => {
  console.log(errors.message);
  if (Array.isArray(errors)) {
    let error = errors.map((err) => err.message);
    res.send(error);
    next(errors);
  }
  if (errors.name === "ValidationError") {
    res.status(404).json({ msg: "GRESKA" });
  }

  res.status(400).json({ msg: errors.message });
};

module.exports = {
  errorHandler,
};
