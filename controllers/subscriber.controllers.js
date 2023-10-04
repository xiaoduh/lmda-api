const SubscriberModel = require("../models/subscriber.model");

module.exports.addNewSubscriber = async (req, res) => {
  const { email } = req.body;

  try {
    const newSub = await SubscriberModel.create({
      email,
    });
    res.status(200).json(newSub);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getAllSubscribers = async (req, res) => {
  const data = await SubscriberModel.find().sort({ createdAt: -1 });
  res.status(200).json(data);
};
