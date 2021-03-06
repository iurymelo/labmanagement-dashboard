import React, {Component} from "react";


import UsuarioForm from "./UsuarioForm";



class NovoUsuario extends Component {


  initialValues = {
    nome: '',
    matricula: '',
    email: '',
    tipo: '',
    username: '',
    password: '',
    endereco: '',
    cidade: '',
    telefone: '',
    banco: '',
    agencia: '',
    conta: '',
    interesses: '',
    projetos: ['Projeto 1', 'Projeto 2', 'Projeto 3'],
    nivel_acesso: '',
  };



  render() {
    return (
      <div className="content">
        <UsuarioForm titulo={'Novo Usuário'}
                     valoresIniciais={this.initialValues}
                     editar={false}
        />
      </div>
    );
  }
}

export default NovoUsuario;
