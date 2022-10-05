const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unqiue: true,
        required: true,
        trimmed: true
        //TODO: Validate email with mongoose
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
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
    )
})

const User = model("User", UserSchema);

module.exports = User;