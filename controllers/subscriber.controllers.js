const SubscriberModel = require("../models/subscriber.model");
const subscriber = require("../utils/subscriber");

module.exports.addNewSubscriber = async (req, res) => {
  try {
    const newSub = await SubscriberModel.create({
      email: req.body.email,
    });
    subscriber("clement.lidar@gmail.com", "Nouvel abonné", req.body.email);
    res.status(200).json({ newSub: newSub });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getAllSubscribers = async (req, res) => {
  const data = await SubscriberModel.find().sort({ createdAt: -1 });
  res.status(200).json(data);
};
