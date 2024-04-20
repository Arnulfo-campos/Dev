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
  const enviarJSON = async (imagenesIpfs, ipfs) => {
   
    const jsonEnviar = ({
      Metadata: `{"description" : "Generado por Aplicacion Trazabilidad","external_url" : "https://gateway.lighthouse.storage/ipfs/","image" : "${imagenesIpfs}","name":"Lote de trazabilidad","animation_url": "${ipfs}"}`,
      apiKeyjson: "93222625.4a86e8b3f22f474aadbba0b5a4462f72",
      nombreArchive: "TrazabilidadJSONNFT.json"
    });
    const responseJSON = lighthouse.uploadText(jsonEnviar.Metadata, jsonEnviar.apiKeyjson, jsonEnviar.nombreArchive)
      const ipfsJSON =('https://gateway.lighthouse.storage/ipfs/' + (await responseJSON).data.Hash);
      console.log(ipfsJSON);
      enviarIPFS(ipfsJSON);
  }
    const crearHtml = async () => {
      
    try {
      const Semilla = await axios.get(`http://localhost:8080/loteusuarios/formulario/${idLote}/${idCosecha}/3`);
      const Germinacion = await axios.get(`http://localhost:8080/loteusuarios/cosecha/${idLote}/${idCosecha}`);

      // Obtener la última imagen del array data
      const ultimaImagenIpfs = Germinacion.data[Germinacion.data.length - 1].imagenIPFS;

   setImagenesIpfs(ultimaImagenIpfs); // Actualizar el estado con la última imagen
     // const itemsSemilla = Semilla.data.map((element) => {
      //  return `
      //  <div class="card">
      //  <img src=${element.imagenIPFS}>
      //  <h1>Semilla</h1>
      //  <p class="title">25 mayo 2024</p>
      //  <p><button>Consultar</button></p>
     // </div>
      //  `;
     // });
      const itemsGerminacion = Germinacion.data.map((element) => {
        return `
        <div class="card">
        <img src=${element.imagenIPFS}>
        <h1>${element.proceso}</h1>
        <p class="title">${element.fechaRegistro}</p>
        <p><button>Consultar</button></p>
      </div>
        `;
      });

      // Genera el contenido HTML
      let html = `
      <!DOCTYPE html>
      <html>
      <head>
  <style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
  flex-shrink: 0;
  margin-right: 1cm;
  }
  
  .title {
    color: grey;
    font-size: 18px;
  }
  
  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  
  a {
    text-decoration: none;
    font-size: 22px;
    color: black;
  }
  
  button:hover, a:hover {
    opacity: 0.7;
  }
  </style>
      </head>
      <body>
  
  <h1><center>Cosecha 2024</center></h1>
  <div style="display: flex;">  
      `;

      // Agrega cada elemento al HTML
     // itemsSemilla.forEach((item) => {
     //   html += item;
     // });
      itemsGerminacion.forEach((item) => {
        html += item;
      });

      html += `
          </div>
          </body>
          </html>
      `;

      // Crea un objeto Blob con el contenido HTML
      const blob = new Blob([html], { type: 'text/html' });
      // Convierte el Blob en un objeto File
      const archivoFile = new File([blob], 'HTMLTrazabilidad.html', { type: 'text/html' });

      const responseIpfs = await lighthouse.uploadText(archivoFile, '93222625.4a86e8b3f22f474aadbba0b5a4462f72', 'NFTHtml.html');
      const ipfs=('https://gateway.lighthouse.storage/ipfs/' + responseIpfs.data.Hash);
      // Si ultimaImagenIpfs no coincide con imagenesIpfs o ipfs no está vacío
      enviarJSON(ultimaImagenIpfs, ipfs);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };
  const enviarIPFS =async (ipfsJSON) => {

       const web3 = new Web3('https://rpc.sepolia.org');
       const contractABI =  require('../GenNft.json'); // Reemplaza con la ruta correcta al archivo ABI
       const contractAddress = '0xc8c50336D2527D56C591c68dd2c1fEc529274Be8';
     // Create an instance of your contract
   const contract = new web3.eth.Contract(contractABI, contractAddress);
   
   const txData = contract.methods.safeMint('0x3a6719753435dE3ea1B3aB39ac433AdeC188d2ba', ipfsJSON).encodeABI();
   
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
