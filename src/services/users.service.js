const UserModel = require("../models/user.model")

async function getAllUsers() {
    return await UserModel.find()
}

module.exports = {getAllUsers}