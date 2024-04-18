import React, { useEffect, useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { connectWallet, getCurrentWalletConnected, mintNFT } from "../../utils/interact";
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import getRewardBalance from "../../utils/getRewardBalance";
import getMintedTokens from "../../utils/getMintedTokens";
import getAccountBalance from "../../utils/getAccountBalance";


const Minter = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [germinacion, setgerminación] = useState("");
    const [cultivador, setcultivador] = useState("");
    const [crecimiento, setcrecimiento] = useState("");
    const [envasado, setenvasado] = useState("");
    const [fechaRegistro, setfechaRegistro] = useState("");
    const [fechaActualizacion, setfechaActualizacion] = useState("");
    const [areaGerminacion, setareaGerminacion] = useState("");
    const [url, setURL] = useState("");

    const [balance, setBalance] = useState("");
    const [rewardBalance, setRewardBalance] = useState("");
    const [mintedTokens, setMintedTokens] = useState([]);
    const [minting, setMinting] = useState(false);

    useEffect(() => {
        async function initialize() {
            const { address, status } = await getCurrentWalletConnected();
            setWalletAddress('0x3a6719753435dE3ea1B3aB39ac433AdeC188d2ba');
            setStatus(status);

            addWalletListener();

            const balance = await getAccountBalance('0x3a6719753435dE3ea1B3aB39ac433AdeC188d2ba');
            setBalance(balance);

            const mintedTokens = await getMintedTokens('0x3a6719753435dE3ea1B3aB39ac433AdeC188d2ba');
            setMintedTokens(mintedTokens);
        }

        initialize();
    }, []);

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", async (accounts) => {
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    setStatus("👆🏽 Write a message in the text-field above.");

                    const balance = await getAccountBalance(accounts[0]);
                    setBalance(balance);
                } else {
                    setWalletAddress("");
                    setStatus("Connect to Metamask using the top right button.");
                    setBalance("");
                }
            });
        } else {
            setStatus(
                <p>
                    {" "}
                    🦊{" "}
                    <a target="_blank" href={`https://metamask.io/download.html`}>
                        You must install Metamask, a virtual Ethereum wallet, in your
                        browser.
                    </a>
                </p>
            );
        }
    }

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWalletAddress(walletResponse.address);

        const balance = await getAccountBalance(walletResponse.address);
        setBalance(balance);
    };

    const onMintPressed = async () => {
        setMinting(true);

        try {
            const { status } = await mintNFT(
                url,
                name,
                germinacion,
                cultivador,
                crecimiento,
                envasado,
                fechaRegistro,
                fechaActualizacion,
                areaGerminacion
            );
            setStatus(status);

            const updatedRewardBalance = await getRewardBalance(walletAddress);
            setRewardBalance(updatedRewardBalance);

            const updatedMintedTokens = await getMintedTokens(walletAddress);
            setMintedTokens(updatedMintedTokens);
        } catch (error) {
            console.error('Error minting NFT:', error);
            setStatus('Error minting NFT. Please try again.');
        } finally {
            setMinting(false);
        }
    };

    return (
        <PageContainer title="Registro NFT" description="Formulario de Registro de NFT">
        <DashboardCard title="Registro NFT">
        <Typography>Completa el formulario para registrar el NFT en la red de BLockchain:</Typography>
             <Button type="submit" id="walletButton" variant="contained" color="primary" onClick={connectWalletPressed}>
             {walletAddress.length > 0 ? (
                    <>
                        <span>
                            Account 🦊: {String(walletAddress).substring(0, 6)}...
                            {String(walletAddress).substring(38)}
                        </span>
                        <br />
                        <span>💰 Balance: {balance} ETH</span> {/* Display account balance */}
                        <br />
                        <span> 💰 Total Reward: {rewardBalance} ETH </span>{ }
                    </>

                ) : (
                    <span>Connect Wallet</span>
                )}
          </Button>
            <br></br>
            <br></br>
           <form >
            <TextField
            name="Id"
            label="ID"
            onChange={(event) => setName(event.target.value)}
            fullWidth
            margin="normal"
          />
            <TextField
            name="germinacion"
            label="Germinación"
            onChange={(event) => setgerminación(event.target.value)}
            fullWidth
            margin="normal"
          />
            <TextField
            name="cultivador"
            label="Cultivador"
            onChange={(event) => setcultivador(event.target.value)}
            fullWidth
            margin="normal"
          />    
            <TextField
            name="crecimiento"
            label="Crecimiento"
            onChange={(event) => setcrecimiento(event.target.value)}
            fullWidth
            margin="normal"
          /> 
            <TextField
            name="envasado"
            label="Envasado"
            onChange={(event) => setenvasado(event.target.value)}
            fullWidth
            margin="normal"
          /> 
            <TextField
            name="fecha de registro"
            label="Fecha de Aplicación"
            type="date"
            onChange={(event) => setfechaRegistro(event.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />    
            <TextField
            name="fecha actualización"
            label="Fecha Actualización"
            type="date"
            onChange={(event) => setfechaActualizacion(event.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          /> 
            <TextField
            name="Area de germinación"
            label="Area de germinación"
            type="number"
            onChange={(event) => setareaGerminacion(event.target.value)}
            fullWidth
            margin="normal"
          />
            <TextField
            placeholder="e.g. http://localhost:8081/ipfs/QmSimUVgZxkQ4vK2Qh2kcMruebQ9kyWdWNBE88CyXRnu5n"
            name="e.g. http://localhost:8081/ipfs/QmSimUVgZxkQ4vK2Qh2kcMruebQ9kyWdWNBE88CyXRnu5n"
            label="Link to Digital Asset"
            onChange={(event) => setURL(event.target.value)}
            fullWidth
            margin="normal"
          />
            </form>
            <Button type="submit" id="mintButton" variant="contained" color="primary" onClick={onMintPressed} disabled={minting}>
            {minting ? (
                    <>
                        <div className="spinner"></div>
                        MIN NFT...
                    </>
                ) : (
                    "Registrar NFT"
                )}
          </Button>
            <p id="status">
                {status}
            </p>

            <h2>Minted Tokens </h2>
            <ul>
                {mintedTokens.map((token, index) => (
                    <li key={index}>
                        <p>Token URI: {token.uri}</p> {/* You can customize this based on the structure of your tokens */}
                        <img src={token.image} width="250" height="250" /> {/* Change size as needed */}
                    </li>
                ))}
            </ul>
            </DashboardCard>
    </PageContainer>
        );
};

export default Minter;