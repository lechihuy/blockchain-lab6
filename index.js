const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Application started and listening on port 3000");
})

app.use(express.static('public'));
app.use(express.json());

app.get('/accounts', async (req, res) => {
  const accounts = await web3.eth.getAccounts();
  res.json(accounts);
});

app.post('/bai1', async(req, res) => {

});