import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, BigNumber } from "ethers";
import {useEffect useState } from "react";


function App(){
    //connecting
const [accounts, setAccounts] = useState([]);

async function connectAccounts(){
    if (new WalletConnectProvider) {
        const accounts = await  new WalletConnectProvider.request({
            merhod: "eth_requestAccounts",
         });
        setAccounts(accounts);
    } 
}
useEffect(() => {
    connectAccounts();
},[]);

//minting 
cont [mintAmount, setMintAmount] = useState(1);

async function handleMint(){
    if ( new WalletConnectProvider){
      const provider = new WalletConnectProvider({
        rpc: {
          1: "https://cloudflare-eth.com/", // https://ethereumnodes.com/
          137: "https://polygon-rpc.com/", // https://docs.polygon.technology/docs/develop/network-details/network/
        },
      });
        const signer = provider.getsingner();
        const contract = new ethrs.Contract(
            abiaddress,
            abi.abi,
            signer
        );
        try{
            const response = await contract.mint(BigNumber.from(mintAmount));
            console.log("response:", response);
        } catch (err) {
            console.log("error: ", err);
        }
    }
}

//creating a button
return (
    <div className="App">
      {accounts.length &&(
        <div>
          <button onClick={() => setMintAmount(mintAmount - 1)}>-</button>
          {mintAmount}
          <button onClick={() => setMintAmount(mintAmount + 1)}>+</button>
          <button onClick={handleMint}>mintv</button>
          </div>
      )}
    </div>
  );
      }

export default App; 