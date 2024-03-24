const getRoot = (req, res) => {
  res.json({ message: "helo /" });
};

module.exports = { getRoot };