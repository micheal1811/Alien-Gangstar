import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import {StyledButton, StyledRoundButton, ResponsiveWrapper, StyledLogo, StyledImg, StyledLink } from "./App";

var StyledButton = documment.querySelector('StyledButton');
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
      <a href={CONFIG.MARKETPLACE_LINK}>
        <StyledLogo alt={"logo"} src={"/config/images/logo.png"} />
      </a>
      <s.SpacerSmall />
      <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
        <s.Container flex={1} jc={"center"} ai={"center"}>
          <StyledImg alt={"example"} src={"/config/images/example.gif"} />
        </s.Container>
        <s.SpacerLarge />
        <s.Container
          flex={2}
          jc={"center"}
          ai={"center"}
          style={{
            backgroundColor: "var(--accent)",
            padding: 24,
            borderRadius: 24,
            border: "4px dashed var(--secondary)",
            boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
          }}
        >
          <s.TextTitle
            style={{
              textAlign: "center",
              fontSize: 50,
              fontWeight: "bold",
              color: "var(--accent-text)",
            }}
          >
            {data.totalSupply} / {CONFIG.MAX_SUPPLY}
          </s.TextTitle>
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          >
            <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
              {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
            </StyledLink>
          </s.TextDescription>
          <span
            style={{
              textAlign: "center",
            }}
          >
            <StyledButton
              onClick={(e) => {
                window.open("/config/roadmap.pdf", "_blank");
              }}
              style={{
                margin: "5px",
              }}
            >
              Roadmap
            </StyledButton>
            <StyledButton
              style={{
                margin: "5px",
              }}
              onClick={(e) => {
                window.open(CONFIG.MARKETPLACE_LINK, "_blank");
              }}
            >
              {CONFIG.MARKETPLACE}
            </StyledButton>
          </span>
          <s.SpacerSmall />
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
              <s.TextTitle
                style={{ textAlign: "center", color: "var(--accent-text)" }}
              >
                The sale has ended.
              </s.TextTitle>
              <s.TextDescription
                style={{ textAlign: "center", color: "var(--accent-text)" }}
              >
                You can still find {CONFIG.NFT_NAME} on
              </s.TextDescription>
              <s.SpacerSmall />
              <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                {CONFIG.MARKETPLACE}
              </StyledLink>
            </>
          ) : (
            <>
              <s.TextTitle
                style={{ textAlign: "center", color: "var(--accent-text)" }}
              >
                1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                {CONFIG.NETWORK.SYMBOL}.
              </s.TextTitle>
              <s.SpacerXSmall />
              <s.TextDescription
                style={{ textAlign: "center", color: "var(--accent-text)" }}
              >
                Excluding gas fees.
              </s.TextDescription>
              <s.SpacerSmall />
              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <s.Container ai={"center"} jc={"center"}>
                  <s.TextDescription
                    style={{
                      textAlign: "center",
                      color: "var(--accent-text)",
                    }}
                  >
                    Connect to the {CONFIG.NETWORK.NAME} network
                  </s.TextDescription>
                 <div className="walletconnect">
                  {accounts.length &&(
                   <div>
                   <StyledButton onClick={() => setMintAmount(mintAmount - 1)}>-</StyledButton>
                    {mintAmount}
                     <StyledButton onClick={() => setMintAmount(mintAmount + 1)}>+</StyledButton>
                     <StyledButton onClick={handleMint}>mint</StyledButton>
                    </div>
                  )}
                  style={{
                  margin: "11px",
                }}
                       </div>
                   
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                          >
                            {blockchain.errorMsg}
                          </s.TextDescription>
                          </>
                    ) : null}
                    </s.Container>
               ) : (
                <>
                  <s.TextDescription
                    style={{
                      textAlign: "center",
                      color: "var(--accent-text)",
                    }}
                  >
                    {feedback}
                  </s.TextDescription>
                  <s.SpacerMedium />
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <StyledRoundButton
                      style={{ lineHeight: 0.4 }}
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}
                    >
                      -
                    </StyledRoundButton>
                    <s.SpacerMedium />
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {mintAmount}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <StyledRoundButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}
                    >
                      +
                    </StyledRoundButton>
                  </s.Container>
                  <s.SpacerSmall />
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <StyledButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}
                    >
                      {claimingNft ? "BUSY" : "BUY"}
                    </StyledButton>
                  </s.Container>
                </>
              )}
            </>
          )}
          <s.SpacerMedium />
        </s.Container>
        <s.SpacerLarge />
        <s.Container flex={1} jc={"center"} ai={"center"}>
          <StyledImg
            alt={"example"}
            src={"/config/images/example.gif"}
            style={{ transform: "scaleX(-1)" }}
          />
        </s.Container>
      </ResponsiveWrapper>
      <s.SpacerMedium />
      <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
        <s.TextDescription
          style={{
            textAlign: "center",
            color: "var(--primary-text)",
          }}
        >
          Please make sure you are connected to the right network (
          {CONFIG.NETWORK.NAME} Mainnet) and the correct address. Please note:
          Once you make the purchase, you cannot undo this action.
        </s.TextDescription>
        <s.SpacerSmall />
        <s.TextDescription
          style={{
            textAlign: "center",
            color: "var(--primary-text)",
          }}
        >
          We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract to
          successfully mint your NFT. We recommend that you don't lower the
          gas limit.
        </s.TextDescription>
      </s.Container>
    </s.Container>
  </s.Screen>
);
}


export default App;
