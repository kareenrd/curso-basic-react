import React, {Component, useState} from 'react';
import {render} from 'react-dom';
import './style.css';

import Contador from './Contador';

class App extends Component {
  constructor(){
    super();
    this.state = { name : 'React'};
  }

  render() {
    return (
      <div>
        <Contador/>
      </div>
    );
  }
}

class Formulario extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  cambiosEmail(email){
    this.setState({
      email : email
    })
  }

  cambiosPassword(password){
    this.setState({
      password : password
    })
  }

  cambios = (value, propiedad) => {
    let state = {};
    state[propiedad] = value;
    this.setState(state);
  }

  submitForm = () => {
    console.log(this.state)
  }

  render(){
    return (
      <form >
        <input 
        onChange={(e) => { this.cambios(e.target.value , 'email')} }
        type="email" 
        name="email" 
        id="email" 
        placeholder="Email" 
        value={this.state.email}/>

        <input 
        onChange={(e) => { this.cambios(e.target.value, 'password')} }
        type="password" 
        name="password" 
        placeholder="***" 
        id="password" 
        value={this.state.password}/>
        
        <div>
          <input 
          onClick= {this.submitForm}
          type="submit" 
          value="Enviar"/>
        </div>
      </form>
    );
  }
}


class Blog extends Component {

  constructor(props){
    super(props);
    this.state = {
      article: [
        'componente 1',
        'componente 2',
        'componente 3'
      ]
    }
  }
  render(){
    return (
      <div>
        {
          this.state.article.map( (title) => {
             return <p> {title} </p>
          })
        }
      </div>
    )
  }
}


class Ajax extends Component{
  constructor(props){
    super(props);
    this.state = {
      article: []
    }
  }

  componentDidMount(){
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');

    promesa.then(response => response.json()).then(data => {
      //console.log(data);
      this.setState({
        article: data
      })
    })

    /*promesa.then((response) => {
      //console.log(response);
      response.json().then((data) => {
        console.log(data);
      });
    })*/
  }

  render(){
    return (
      <div>
        {
          this.state.article.map((article) => {
            return <div className = "card"> <p> {article.title} </p></div>
          })
        }
      </div>
    )
  }

}

/**Hook 
function Contador(props){
  const [contador, setContador] = useState(1);

  return (
    <div>
      <p> Conteo : {contador} </p>
      <button onClick = { () => { setContador(contador +1)}}>Aumentar</button>
    </div>
  )
}*/



render(<App/>, document.getElementById('root'));

