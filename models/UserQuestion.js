const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    firstName: {type: String, default:""},
    lastName: {type: String, default:""},
    mobile: {type: String, default:""},
    email: {type: String, default:""},
    adress: {type: String, default:""},
    question: {type: String, default:""}
});

const UserQuestion = model("question", UserSchema);
module.exports = UserQuestion;