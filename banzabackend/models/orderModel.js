import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
      {
        name: {
          type: String,
          required: true,
        },
        qty: {
          type: Number,

          required: true,
        },
        image: {
          type: String,

          required: true,
        },
        price: {
          type: Number,

          required: true,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    shippingAddress: {
      address: {
        type: String,

        required: true,
      },
      city: {
        type: String,

        required: true,
      },
      postalCode: {
        type: String,

        required: true,
      },
      country: {
        type: String,

        required: true,
      },
    },
    paymentMethod: {
      type: String,

      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },

    itemsPrice: {
      type: Number,
      default: 0.0,

      required: true,
    },
    taxPrice: {
      type: Number,
      default: 0.0,

      required: true,
    },

    shippingPrice: {
      type: Number,
      default: 0.0,

      required: true,
    },

    totalPrice: {
      type: Number,
      default: 0.0,

      required: true,
    },

    isPaid: {
      type: Boolean,
      default: false,

      required: false,
    },

    paidAt: {
      type: Date,
    },

    isDelivered: {
      type: Boolean,
      default: false,

      required: true,
    },

    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
