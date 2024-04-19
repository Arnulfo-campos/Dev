import React, { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button } from '@mui/material';
import PropTypes, { element } from 'prop-types';
import axios from 'axios';
import lighthouse from '@lighthouse-web3/sdk'
import { IconBellRinging, IconMenu } from '@tabler/icons';
const { Web3 } = require('web3');


const idLote = localStorage.getItem('idLote');
const idCosecha = localStorage.getItem('idCosecha');

const Header = (props) => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

 
  const [imagenesIpfs, setImagenesIpfs] = useState('');
  const [ipfs, setipfs] = useState('');
  const [ipfsJSON, setipsfJSON] = useState('');
  const [jsonEnviar, setjsonEnviar] = useState({
    Metadata: "",
    apiKeyjson: "93222625.4a86e8b3f22f474aadbba0b5a4462f72",
    nombreArchive: "JsoncorregidoArnulfo.json"
  });

  const enviarJSON = async (event) => {
    setipfs('https://gateway.lighthouse.storage/ipfs/QmWY7N6kRY1LY7VGiGdxFzkUoygrvkSFhfJGRsXZzhcb2v')
    setImagenesIpfs('https://gateway.lighthouse.storage/ipfs/QmQ77t6ofn5khmYV8UNfY8TdxNfvGDUzHrhFjG3DrCYTjJ')

    setjsonEnviar(prevState => ({
      ...prevState,
      Metadata: `{"description" : "Generado por Aplicacion Trazabilidad","external_url" : "https://gateway.lighthouse.storage/ipfs/","image" : "${imagenesIpfs}","name":"Lote de trazabilidad","animation_url": "${ipfs}"}`
    }));
    const responseJSON = await lighthouse.uploadText(jsonEnviar.Metadata, jsonEnviar.apiKeyjson, jsonEnviar.nombreArchive)
      setipsfJSON ('https://gateway.lighthouse.storage/ipfs/QmSYBM9miYZzUH5YMyNNqwq142PBc3HzKaByTsbZfEdQTL' + responseJSON.data.Hash);
      console.log(ipfsJSON);
  }
    const crearHtml = async (event) => {
    try {
      const response = await axios.get(`http://localhost:8080/loteusuarios/formulario/${idLote}/${idCosecha}/3`);
      const data = response.data;

      const items = data.map((element) => {
        setImagenesIpfs(element.imagenIPFS);
        return `
          <div>
            <img src="${element.imagenIPFS}">
            <h2>Semilla</h2>
            <h3>Variedad</h3>
          </div>
        `;
      });

      // Genera el contenido HTML
      let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Web Page</title>
        </head>
        <body>
      `;

      // Agrega cada elemento al HTML
      items.forEach((item) => {
        html += item;
      });

      html += `
        </body>
        </html>
      `;

      // Crea un objeto Blob con el contenido HTML
      const blob = new Blob([html], { type: 'text/html' });
      // Convierte el Blob en un objeto File
      const archivoFile = new File([blob], 'archivo_generado.html', { type: 'text/html' });

      console.log(archivoFile); // Solo para demostración, puedes enviar archivoFile a IPFS u otro proceso aquí
      const responseIpfs = await lighthouse.uploadText(archivoFile, jsonEnviar.apiKeyjson, 'NFTHtml.html');
      setipfs('https://gateway.lighthouse.storage/ipfs/' + responseIpfs.data.Hash);
      enviarJSON();
      enviarIPFS();
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };
  const enviarIPFS =async () => {

       const web3 = new Web3('https://rpc.sepolia.org');
       const contractABI =  require('../GenNft.json'); // Reemplaza con la ruta correcta al archivo ABI
       const contractAddress = '0xc8c50336D2527D56C591c68dd2c1fEc529274Be8';
     // Create an instance of your contract
   const contract = new web3.eth.Contract(contractABI, contractAddress);
   
   const txData = contract.methods.safeMint('0x3a6719753435dE3ea1B3aB39ac433AdeC188d2ba', 'https://gateway.lighthouse.storage/ipfs/QmSYBM9miYZzUH5YMyNNqwq142PBc3HzKaByTsbZfEdQTL').encodeABI();
   
   // Get the current gas price
   const gasPrice = await web3.eth.getGasPrice();
   
   // Create the transaction
   const tx = {
   from: '0x3a6719753435dE3ea1B3aB39ac433AdeC188d2ba',
   to: contractAddress,
   gas: web3.utils.toHex(600000), // You may need to adjust this value
   gasPrice: web3.utils.toHex(gasPrice), // Use the current gas price
   data: txData
   };
   
   try {
   // Sign the transaction
   const signedTx = await web3.eth.accounts.signTransaction(tx, '291cc1845dc44faa2b2ab1b067827d9ad3dd61544b8df50691de00789f868825');
   
   // Send the signed transaction
   web3.eth.sendSignedTransaction(signedTx.rawTransaction)
     .on('receipt', (receipt) => {
         console.log(receipt.transactionHash, (err) => {
             if (err) throw err;
             console.log('The transaction hash was saved to transactionHash.txt!');
         });
     })
     .on('error', console.error);
   
   console.log('Form submitted!');
   } catch (err) {
   console.error(err);
   console.log('Error submitting form.');
   } 
     };

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>


        <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          sx={{
            ...(typeof anchorEl2 === 'object' && {
              color: 'primary.main',
            }),
          }}
        >
          <Badge variant="dot" color="primary">
            <IconBellRinging size="21" stroke="1.5" />
          </Badge>

        </IconButton>
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Button variant="contained" color="primary" target="_blank" onClick={crearHtml}>
            Generar NFT
          </Button>
          {/* Profile component */}
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
