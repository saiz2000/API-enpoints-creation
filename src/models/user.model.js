const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
   apiId:{
        type: String,
        required:true
   }
},{
    timestamps: true
  })

const UserModel = model ("user", UserSchema)

module.exports = UserModel