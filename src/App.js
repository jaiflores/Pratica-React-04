import React, { Component } from 'react';

export default class App extends Component{
  
  state = {
    nome: "Jaianny",
    idade: 30,
    numero: 8,
  }    
  dobro = () =>{
    return <h2>O dobro do número: {this.state.numero*2}</h2>
  }

  render(){
    return(
      <div>
        <h1>Meu nome é {this.state.nome}</h1>
        <h2>Tenho {this.state.idade} anos.</h2>
        <h2>Gosto do númeo {this.state.numero}</h2>
        {this.dobro()}
      </div>


    )
  }
}