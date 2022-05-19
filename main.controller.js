const axios = require('axios');


const BASE_URL = 'https://coffee-recommendation.herokuapp.com/'


async function renderPage(req, res) {
    const data = await getAllCoffeBeanNames();
    res.render('index', { data: data });
}

async function getAllCoffeBeanNames() {
    try {

        const response = await axios.get(`${BASE_URL}/coffees`);
        return response.data;

    } catch (error) {
        console.log(error);
    }

}

async function getClosestCoffees(req, res) {
    try {

        const response = await axios.post(`${BASE_URL}/closest`, data = { "coffee_name": req.body.coffee_name });
        console.log(response.data);
        return res.json(response.data);

    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    renderPage,
    getClosestCoffees,
}