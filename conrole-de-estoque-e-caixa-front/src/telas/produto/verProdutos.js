import React from "react";


import TableProdutos from "../../componentes/TableProdutos";
import ProdutosApiServico from "../../servicos/ProdutosApiServico";
import Card from "../../componentes/Card";


class VerProdutos extends React.Component {
  state = {
    name: '',
    description: '',
    precoVenda: '',
    precoCompra: '',
    quantidadeEstoque: '',
    fornecedores: '',
    produtoDtos: [],
  };

  constructor() {
    super();
    this.service = new ProdutosApiServico();
  }
  componentWillUnmount() {
    const queryParams = new URLSearchParams(window.location.search);
    const updateSuccess = queryParams.get('updateSuccess');
    const createSuccess = queryParams.get('createSuccess');

    if (updateSuccess === 'true') {
      //showSuccessMessage('Evento atualizado com sucesso');
    }else if(createSuccess === 'true'){
      //showSuccessMessage('Evento criado com sucesso');
    }
  }

  componentDidMount() {
    this.find();
    
  }

  find = () => {
    var params = "?";
    this.service
      .find(params)
      .then((response) => {
        console.log(response.data);
        this.setState({
          produtoDtos: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          produtoDtos: [],
        });
      });

  }
  delete = (eventId) => {
    //this.service.delete(eventId
   // ).then( response => 
   //     {
            //showSuccessMessage(`Evento ${eventId} deletado com sucesso`);
   //         this.find();
   //     }
   // ).catch( error => 
   //     {
    //        console.log(error.response);
   //     }
   // );
}

edit = (eventId) => {
    //this.props.history.push(`/updateEvent/${eventId}`);
    //window.location.reload();
}


  render() {

    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <Card title="Consulta Produtos">
          <div className="row">
            <TableProdutos produtos={this.state.produtoDtos}
                delete={this.delete}
                edit={this.edit} />
          </div>
        </Card>
      </div>
    );
  }
}

export default VerProdutos;