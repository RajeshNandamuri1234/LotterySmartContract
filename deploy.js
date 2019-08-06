const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const {interface,bytecode}=require('./compile');

const provider=new HDWalletProvider(
    'distance mother allow focus sweet deny predict mixture despair often rely turn',
   'https://rinkeby.infura.io/v3/059e8251cb334298a211a33685b08bc5'
);

const web3=new Web3(provider);
const deploy=async () =>{

    accounts= await web3.eth.getAccounts();

    console.log(accounts)
    const Lottery=await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode})
    .send({from:accounts[0], gas:'3000000'})

    console.log('Lottery contract has been deployed', Lottery.options.address)
}

deploy();
