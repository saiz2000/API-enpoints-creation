const UserModel = require("../models/user.model");
const { getAllUsers } = require("../services/users.service");

const mainCharacters = [1,2,3,4,5]

const rickdata = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return response.json();
}

const list = async () =>{
    for (let i = 1; i < mainCharacters.length+1; i++) {
        const character = await rickdata(i)
        const name = character.name
        const apiId = character.id
        UserModel.create({name:name,apiId:apiId})
    } 
}

const getAll = async (req, res) => {
    await UserModel.collection.drop()
    await list() 
    try {
        const data = await getAllUsers();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
};

module.exports = { getAll };