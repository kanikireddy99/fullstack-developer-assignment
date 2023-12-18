const express = require('express');
const axios = require('axios');

const router = express.Router();

const API_KEY = '_ud8bBSvyPPJrcdbW9lqlnOXvcxqbAxH';
const POLYGON_API_URL = 'https://api.polygon.io/v3/reference/tickers';

router.get('/', async (req, res) => {
  const { count } = req.query;

  try {
    const response = await axios.get(`${POLYGON_API_URL}?apiKey=${API_KEY}&market=stocks&locale=us&perpage=${count}`);
    const stockData = response.data.results.map((stock) => ({ symbol: stock.ticker, open: stock.marketOpen }));
    res.json(stockData);
  } catch (error) {
    console.error('Error fetching stocks:', error.message);
    res.status(500).json({ error: 'Error fetching stocks' });
  }
});

module.exports = router;
