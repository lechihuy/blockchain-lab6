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
  const { x, y, address } = req.body;
  const ABI = [{"inputs":[{"internalType":"int256","name":"x","type":"int256"},{"internalType":"int256","name":"y","type":"int256"}],"name":"execute","outputs":[{"internalType":"int256","name":"sum","type":"int256"},{"internalType":"int256","name":"subtract","type":"int256"},{"internalType":"int256","name":"mod","type":"int256"},{"internalType":"int256","name":"integer","type":"int256"}],"stateMutability":"pure","type":"function"}];
  const bytecode = '0x608060405234801561001057600080fd5b50610366806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635545e20b14610030575b600080fd5b61004a600480360381019061004591906100bf565b610063565b60405161005a949392919061010e565b60405180910390f35b60008060008084866100759190610153565b9350848661008391906101e7565b925084866100919190610285565b9150818661009f91906101e7565b905092959194509250565b6000813590506100b981610319565b92915050565b600080604083850312156100d6576100d5610314565b5b60006100e4858286016100aa565b92505060206100f5858286016100aa565b9150509250929050565b6101088161027b565b82525050565b600060808201905061012360008301876100ff565b61013060208301866100ff565b61013d60408301856100ff565b61014a60608301846100ff565b95945050505050565b600061015e8261027b565b91506101698361027b565b9250817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038313600083121516156101a4576101a36102b6565b5b817f80000000000000000000000000000000000000000000000000000000000000000383126000831216156101dc576101db6102b6565b5b828201905092915050565b60006101f28261027b565b91506101fd8361027b565b9250827f800000000000000000000000000000000000000000000000000000000000000001821260008412151615610238576102376102b6565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0182136000841216156102705761026f6102b6565b5b828203905092915050565b6000819050919050565b60006102908261027b565b915061029b8361027b565b9250826102ab576102aa6102e5565b5b828207905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600080fd5b6103228161027b565b811461032d57600080fd5b5056fea2646970667358221220bfeb0891d7b2c5a4825e891295041176e1b2a0c817e33551638cba2ef9f76f1864736f6c63430008070033';
  
  const contract = new web3.eth.Contract(ABI);
  const account = await web3.eth.getAccounts().then(accounts => {
    return accounts.find(account => account === address);
  });

  contract
    .deploy({ data: bytecode })
    .send({ from: account, gas: 4700000 })
    .then(initContract => {
      initContract.methods.execute(x, y).call((err, data) => {
        if (err) {
          console.log(err);
        }

        res.send(data);
      });
    });
});

app.post('/bai2', async(req, res) => {
  const { a, b, c, address } = req.body;
  const ABI = [{"inputs":[{"internalType":"int256","name":"a","type":"int256"},{"internalType":"int256","name":"b","type":"int256"},{"internalType":"int256","name":"c","type":"int256"}],"name":"execute","outputs":[{"internalType":"int256[3]","name":"","type":"int256[3]"}],"stateMutability":"pure","type":"function"}];
  const bytecode = '0x608060405234801561001057600080fd5b50610372806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063599d415014610030575b600080fd5b61004a600480360381019061004591906101fd565b610060565b60405161005791906102ce565b60405180910390f35b6100686101c6565b6100706101c6565b8385131580156100805750828413155b156100a75760405180606001604052808681526020018581526020018481525090506101bb565b8285131580156100b75750838313155b156100de5760405180606001604052808681526020018481526020018581525090506101ba565b8484131580156100ee5750828513155b156101155760405180606001604052808581526020018681526020018481525090506101b9565b8284131580156101255750848313155b1561014c5760405180606001604052808581526020018481526020018681525090506101b8565b83831315801561015c5750848413155b156101835760405180606001604052808481526020018581526020018681525090506101b7565b8483131580156101935750838513155b156101b65760405180606001604052808481526020018681526020018581525090505b5b5b5b5b5b809150509392505050565b6040518060600160405280600390602082028036833780820191505090505090565b6000813590506101f781610325565b92915050565b60008060006060848603121561021657610215610320565b5b6000610224868287016101e8565b9350506020610235868287016101e8565b9250506040610246868287016101e8565b9150509250925092565b600061025c83836102bf565b60208301905092915050565b610271816102f3565b61027b818461030b565b9250610286826102e9565b8060005b838110156102b757815161029e8782610250565b96506102a9836102fe565b92505060018101905061028a565b505050505050565b6102c881610316565b82525050565b60006060820190506102e36000830184610268565b92915050565b6000819050919050565b600060039050919050565b6000602082019050919050565b600081905092915050565b6000819050919050565b600080fd5b61032e81610316565b811461033957600080fd5b5056fea2646970667358221220e83d1f30f9332f7f7052b42d4b7c381b536b89c18546f0d90126381bef42353d64736f6c63430008070033';
  
  const contract = new web3.eth.Contract(ABI);
  const account = await web3.eth.getAccounts().then(accounts => {
    return accounts.find(account => account === address);
  });

  contract
    .deploy({ data: bytecode })
    .send({ from: account, gas: 4700000 })
    .then(initContract => {
      initContract.methods.execute(a, b, c).call((err, data) => {
        if (err) {
          console.log(err);
        }

        res.send(data);
      });
    });
});

app.post('/bai3', async(req, res) => {
  const { a, b, c, d, address } = req.body;
  const ABI = [{"inputs":[{"internalType":"int256","name":"a","type":"int256"},{"internalType":"int256","name":"b","type":"int256"},{"internalType":"int256","name":"c","type":"int256"},{"internalType":"int256","name":"d","type":"int256"}],"name":"execute","outputs":[{"internalType":"int256","name":"max","type":"int256"},{"internalType":"int256","name":"min","type":"int256"}],"stateMutability":"pure","type":"function"}];
  const bytecode = '0x608060405234801561001057600080fd5b506102ee806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063379c31fd14610030575b600080fd5b61004a60048036038101906100459190610142565b610061565b6040516100589291906101b8565b60405180910390f35b6000806000604051806080016040528088815260200187815260200186815260200185815250905086915081925060005b600481101561012257838282600481106100af576100ae61026d565b5b602002015113156100d5578181600481106100cd576100cc61026d565b5b602002015193505b828282600481106100e9576100e861026d565b5b6020020151121561010f578181600481106101075761010661026d565b5b602002015192505b808061011a906101f5565b915050610092565b505094509492505050565b60008135905061013c816102a1565b92915050565b6000806000806080858703121561015c5761015b61029c565b5b600061016a8782880161012d565b945050602061017b8782880161012d565b935050604061018c8782880161012d565b925050606061019d8782880161012d565b91505092959194509250565b6101b2816101e1565b82525050565b60006040820190506101cd60008301856101a9565b6101da60208301846101a9565b9392505050565b6000819050919050565b6000819050919050565b6000610200826101eb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156102335761023261023e565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b6102aa816101e1565b81146102b557600080fd5b5056fea264697066735822122062c28640f2c911353901d9ec05ff181aa01838c6316741110497077c4427b25264736f6c63430008070033';
  
  const contract = new web3.eth.Contract(ABI);
  const account = await web3.eth.getAccounts().then(accounts => {
    return accounts.find(account => account === address);
  });

  contract
    .deploy({ data: bytecode })
    .send({ from: account, gas: 4700000 })
    .then(initContract => {
      initContract.methods.execute(a, b, c, d).call((err, data) => {
        if (err) {
          console.log(err);
        }

        res.send(data);
      });
    });
});