const { Schema, model } = require("mongoose");
const validator = require("validator");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unqiue: true,
      required: true,
      trimmed: true,
      validate: {
        validator: validator.isEmail,
        message: "{VALUE} is not a valid email",
        isAsync: false,
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

//TODO: Create a friendCount virtual that retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function () {
  return this.friends.reduce(
    //idk man, check Pizza.js and the module
  //idk if this is correct, almost entirely copied from Pizza.js
    (total, friend) => total + friend.replies.length + 1,
    0
  );
})

const User = model("User", UserSchema);

module.exports = User;