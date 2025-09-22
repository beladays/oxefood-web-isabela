import { Segment } from 'semantic-ui-react';
import './App.css';
import FormProduto from './views/produto/FormProduto';
import FormCliente from './views/cliente/FormCliente';

function App() {

  return (

    <div className="App">
      
      <FormProduto />

      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2025 - Projeto WEB IV - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;
