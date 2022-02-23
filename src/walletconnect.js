import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";

var Button = documment.querySelector('Button');
var walletconnect = document.getElementById('new WalletConnectProvider');

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function walletconnect(){
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
  <s.Screen>
    <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 24, backgroundColor: "var(--primary)" }}
        image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
      >

     <div className="walletconnect">
      {accounts.length &&(
        <div>
          <Button onClick={() => setMintAmount(mintAmount - 1)}>-</Button>
          {mintAmount}
          <Button onClick={() => setMintAmount(mintAmount + 1)}>+</Button>
          <Button onClick={handleMint}>mint</Button>
          </div>
      )}
      </div>
    </s.Container>
    </s.Screen>
  );
  }

export default walletconnect; 
