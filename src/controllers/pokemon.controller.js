const UserModel = require("../models/user.model");
const { getAllUsers } = require("../services/users.service");

const pokedata = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    return response.json();
}

const list = async () =>{
    const data = await pokedata()
        data.results.forEach((pokemon) => {
        const name = pokemon.name
        const apiId = pokemon.url.split("/")[6]
        UserModel.create({name:name,apiId:apiId})
      })
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