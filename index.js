const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

/**
 * Request
 * @example
 * ```
 * 
 * {
 *  "products": [
 *    {
 *      "id": 1000,
 *      "quantity": 100
 *    },
 *    {
 *      "id": 1200,
 *      "quantity": 500
 *    }
 *  ],
 *  "currency": "sgd",
 *  "discount": false,
 * }
 * ```
 * 
 * Response
 * @example
 * ```
 * {
 *  "orderId": 12303485032,
 *  "products": [
 *    {
 *      "id": 1000,
 *      "quantity": 100
 *    },
 *    {
 *      "id": 1200,
 *      "quantity": 500
 *    }
 *   ],
 *   "currency": "sgd",
 *   "discount": false,
 *   "subTotal": 1000.0,
 *   "netTotal": 1000.0,
 *   "discountAmount": 0.0
 * }
 * ```
 */
app.post('/orders', async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({ error: 'Invalid request. No order will be created.' });
      return 
    }

    const response = await axios.post('https://api.mulesoft.com/orders', req.body);
    res.status(200).send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while creating the order' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Order API listening at http://localhost:${port}`);
});