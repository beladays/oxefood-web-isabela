import { Segment } from 'semantic-ui-react';
import './App.css';
//import FormProduto from './views/produto/FormProduto';
//import FormCliente from './views/cliente/FormCliente';
//import FormEntregador from './views/entregador/FormEntregador';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { setupAxiosInterceptors } from './views/util/AuthenticationService';


import Rotas from './Rotas';

function App() {

 setupAxiosInterceptors(); //resolve problema de requisições axios

  return (

    <div className="App">
       <ToastContainer />
      <Rotas/>

      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2025 - Projeto WEB IV - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;
