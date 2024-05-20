const UserModel = require("../models/user.model");
const { getAllUsers } = require("../services/users.service");



async function starwarsdata() {
    let nextPage = 'https://swapi.dev/api/people';

    while (nextPage) {
        const response = await fetch(nextPage);
        const data = await response.json();
        data.results.forEach(person => {
            const name = person.name
            const apiId = person.url.split("/")[5]
            UserModel.create({name:name,apiId:apiId})
        });
        nextPage = data.next;
    }
   
}

const getAll = async (req, res) => {
    await UserModel.collection.drop()
    await starwarsdata() 
    try {
        const data = await getAllUsers();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
};

module.exports = { getAll };