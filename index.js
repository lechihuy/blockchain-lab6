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
  const { b1, b2, b3, b4, b5, address } = req.body;
  const ABI = [{"inputs":[{"internalType":"bytes1","name":"b1","type":"bytes1"},{"internalType":"bytes1","name":"b2","type":"bytes1"},{"internalType":"bytes1","name":"b3","type":"bytes1"},{"internalType":"bytes1","name":"b4","type":"bytes1"},{"internalType":"bytes1","name":"b5","type":"bytes1"}],"name":"execute","outputs":[{"internalType":"bytes1","name":"","type":"bytes1"}],"stateMutability":"pure","type":"function"}];
  const bytecode = '0x608060405234801561001057600080fd5b50610479806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063212d46ea14610030575b600080fd5b61004a600480360381019061004591906102ee565b610060565b6040516100579190610378565b60405180910390f35b6000806040518060a00160405280887effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001877effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001867effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001857effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001847effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152509050600087905060005b600581101561028257817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191683826005811061022757610226610393565b5b60200201517effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916111561026f5782816005811061026757610266610393565b5b602002015191505b808061027a906103fb565b9150506101e8565b50809250505095945050505050565b600080fd5b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6102cb81610296565b81146102d657600080fd5b50565b6000813590506102e8816102c2565b92915050565b600080600080600060a0868803121561030a57610309610291565b5b6000610318888289016102d9565b9550506020610329888289016102d9565b945050604061033a888289016102d9565b935050606061034b888289016102d9565b925050608061035c888289016102d9565b9150509295509295909350565b61037281610296565b82525050565b600060208201905061038d6000830184610369565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000610406826103f1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610438576104376103c2565b5b60018201905091905056fea2646970667358221220440398f08d8f5ef053fda4a4c63af17c803b68bc45252287e412da3509adc38164736f6c63430008110033';
  
  const contract = new web3.eth.Contract(ABI);

  contract
    .deploy({ data: bytecode })
    .send({ from: address, gas: 4700000 })
    .then(initContract => {
      initContract.methods.execute(b1, b2, b3, b4, b5).call((err, data) => {
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

  contract
    .deploy({ data: bytecode })
    .send({ from: address, gas: 4700000 })
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

  contract
    .deploy({ data: bytecode })
    .send({ from: address, gas: 4700000 })
    .then(initContract => {
      initContract.methods.execute(a, b, c, d).call((err, data) => {
        if (err) {
          console.log(err);
        }

        res.send(data);
      });
    });
});

app.post('/bai4', async(req, res) => {
  const { m, n, address } = req.body;
  const ABI = [{"inputs":[{"components":[{"internalType":"int256","name":"a","type":"int256"},{"internalType":"int256","name":"b","type":"int256"},{"internalType":"int256","name":"c","type":"int256"}],"internalType":"struct Factor","name":"m","type":"tuple"},{"components":[{"internalType":"int256","name":"a","type":"int256"},{"internalType":"int256","name":"b","type":"int256"},{"internalType":"int256","name":"c","type":"int256"}],"internalType":"struct Factor","name":"n","type":"tuple"}],"name":"execute","outputs":[{"internalType":"int256","name":"x","type":"int256"},{"internalType":"int256","name":"y","type":"int256"},{"internalType":"int256","name":"D","type":"int256"},{"internalType":"int256","name":"dx","type":"int256"},{"internalType":"int256","name":"dy","type":"int256"}],"stateMutability":"pure","type":"function"}];
  const bytecode = '0x608060405234801561001057600080fd5b506105bc806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063fc63ad3214610030575b600080fd5b61004a600480360381019061004591906101b0565b610064565b60405161005b9594939291906101ff565b60405180910390f35b60008060008060008660200151866000015161008091906102e1565b8660200151886000015161009491906102e1565b61009e91906103f8565b9250866020015186604001516100b491906102e1565b866020015188604001516100c891906102e1565b6100d291906103f8565b9150866040015186600001516100e891906102e1565b866040015188600001516100fc91906102e1565b61010691906103f8565b90506000831461012d57828261011c9190610277565b9450828161012a9190610277565b93505b9295509295909350565b6000813590506101468161056f565b92915050565b60006060828403121561016257610161610554565b5b61016c6060610252565b9050600061017c84828501610137565b600083015250602061019084828501610137565b60208301525060406101a484828501610137565b60408301525092915050565b60008060c083850312156101c7576101c6610559565b5b60006101d58582860161014c565b92505060606101e68582860161014c565b9150509250929050565b6101f98161048c565b82525050565b600060a08201905061021460008301886101f0565b61022160208301876101f0565b61022e60408301866101f0565b61023b60608301856101f0565b61024860808301846101f0565b9695505050505050565b600061025c61026d565b90506102688282610496565b919050565b6000604051905090565b60006102828261048c565b915061028d8361048c565b92508261029d5761029c6104f6565b5b600160000383147f8000000000000000000000000000000000000000000000000000000000000000831416156102d6576102d56104c7565b5b828205905092915050565b60006102ec8261048c565b91506102f78361048c565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482116000841360008413161615610336576103356104c7565b5b817f80000000000000000000000000000000000000000000000000000000000000000583126000841260008413161615610373576103726104c7565b5b827f800000000000000000000000000000000000000000000000000000000000000005821260008413600084121616156103b0576103af6104c7565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff05821260008412600084121616156103ed576103ec6104c7565b5b828202905092915050565b60006104038261048c565b915061040e8361048c565b9250827f800000000000000000000000000000000000000000000000000000000000000001821260008412151615610449576104486104c7565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018213600084121615610481576104806104c7565b5b828203905092915050565b6000819050919050565b61049f8261055e565b810181811067ffffffffffffffff821117156104be576104bd610525565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6105788161048c565b811461058357600080fd5b5056fea2646970667358221220388c07184a54336bfddfebf8ec450d7533ece1cea521b12c398161b1d6c684fb64736f6c63430008070033';
  
  const contract = new web3.eth.Contract(ABI);

  contract
    .deploy({ data: bytecode })
    .send({ from: address, gas: 4700000 })
    .then(initContract => {
      initContract.methods.execute(m, n).call((err, data) => {
        if (err) {
          console.log(err);
        }

        res.send(data);
      });
    });
});

app.post('/bai5', async(req, res) => {
  const { day, month, year, address } = req.body;
  const ABI = [{"inputs":[{"internalType":"uint256","name":"day","type":"uint256"},{"internalType":"uint256","name":"month","type":"uint256"},{"internalType":"uint256","name":"year","type":"uint256"}],"name":"execute","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"year","type":"uint256"}],"name":"isLeapYear","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}];
  const bytecode = '0x608060405234801561001057600080fd5b50610470806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632d29a47b1461003b578063b8d16dbc1461006d575b600080fd5b61005560048036038101906100509190610260565b61009d565b604051610064939291906102ec565b60405180910390f35b61008760048036038101906100829190610233565b6101d5565b60405161009491906102d1565b60405180910390f35b600080600060018514806100b15750600385145b806100bc5750600585145b806100c75750600785145b806100d25750600885145b806100dd5750600a85145b806100e85750600c85145b1561011157601f8614610107576001866101029190610323565b61010a565b60015b955061018d565b600285141561016c57610123846101d5565b801561012f5750601d86145b8061014c575061013e846101d5565b15801561014b5750601c86145b5b6101625760018661015d9190610323565b610165565b60015b955061018c565b601e8614610186576001866101819190610323565b610189565b60015b95505b5b60018614156101a6576001856101a39190610323565b94505b600d8514156101c357600194506001846101c09190610323565b93505b85858592509250925093509350939050565b6000806004836101e5919061038f565b1480156101ff575060006064836101fc919061038f565b14155b806102175750600061019083610215919061038f565b145b9050919050565b60008135905061022d81610423565b92915050565b6000602082840312156102495761024861041e565b5b60006102578482850161021e565b91505092915050565b6000806000606084860312156102795761027861041e565b5b60006102878682870161021e565b93505060206102988682870161021e565b92505060406102a98682870161021e565b9150509250925092565b6102bc81610379565b82525050565b6102cb81610385565b82525050565b60006020820190506102e660008301846102b3565b92915050565b600060608201905061030160008301866102c2565b61030e60208301856102c2565b61031b60408301846102c2565b949350505050565b600061032e82610385565b915061033983610385565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561036e5761036d6103c0565b5b828201905092915050565b60008115159050919050565b6000819050919050565b600061039a82610385565b91506103a583610385565b9250826103b5576103b46103ef565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600080fd5b61042c81610385565b811461043757600080fd5b5056fea26469706673582212207b1ba3a8365415ab17ff1751d3a5b4edaa97e55828f31a1dc528d61aafb8725d64736f6c63430008070033';
  
  const contract = new web3.eth.Contract(ABI);

  contract
    .deploy({ data: bytecode })
    .send({ from: address, gas: 4700000 })
    .then(initContract => {
      initContract.methods.execute(day, month, year).call((err, data) => {
        if (err) {
          console.log(err);
        }

        res.send(data);
      });
    });
});