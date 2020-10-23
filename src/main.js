import React, { Component } from 'react';
import api from './services/api';


export default class Main extends Component{
    state = {
      usuarios:[]
    }
  
    componentDidMount(){
        this.loadUsuarios();
      }
      
      loadUsuarios = async () =>{
        const response = await api.get('/users');
        this.setState({usuarios: response.data});
      }
 
    render(){
      const {usuarios} = this.state;
    return(
      <div className="lista-usuarios">
        {usuarios.map(usuario =>( 
          <ul>
            <button key={usuario.id}>{usuario.login}</button>
              <p>{usuario.repos_url}</p>
          </ul>
          ))}
      </div>
    );
  }
}