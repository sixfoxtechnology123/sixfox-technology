const mongoose = require("mongoose");

const carrierSubscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, //  prevent duplicate subscriptions
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("CarrierSubscriber", carrierSubscriberSchema);
