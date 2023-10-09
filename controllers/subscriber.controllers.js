const SubscriberModel = require("../models/subscriber.model");
const sender = require("../utils/sender");

module.exports.addNewSubscriber = async (req, res) => {
  try {
    const newSub = await SubscriberModel.create({
      email: req.body.email,
    });
    sender("clement.lidar@gmail.com", "Nouvel abonné", req.body.email);
    res.status(200).json({ newSub: newSub });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getAllSubscribers = async (req, res) => {
  const data = await SubscriberModel.find().sort({ createdAt: -1 });
  res.status(200).json(data);
};
