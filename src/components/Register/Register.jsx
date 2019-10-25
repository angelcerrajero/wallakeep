import React from 'react';
import '../../css/styles.css';
import { Link } from "react-router-dom";
import Tags from "./Tags";
import {setUser, getUser} from './../../utils/storage';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          user:{
            name: '',
            surname: '',
            tags: [],
            isRegister: false,
          }
        };

        
        
    }

  componentWillMount(){
    console.log('compruebo user antes de montar componente registro');
    const user = localStorage.getItem('userData');
    console.log(user, this.props);
    if(user !== null){
      this.props.history.push("/advert");
    }

  }



  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    console.log(this.props);
    

    if (this.state.user.name.trim().length <= 3) {
      alert("The name must be bigger than 3 characters");
      return false;
    }
    if (this.state.user.surname.trim().length <= 3) {
      alert("The surname must be bigger than 3 characters");
      return false;
    }
    
    setUser(this.state.user);
    this.props.history.push("/advert");

  };

  onInputChange = (event) => {
    const {name, value} = event.target;
    this.setState(({ user }) => ({
      user: {
        ...user,
        [name]: value
      }
    }));
  };



  render(){
    return(

      <React.Fragment>
      <div className="formContainer">
        <form className="formHome" onSubmit = {this.onSubmit}>
          <div className="field">
            <label className="label is-size-6"></label>
            <div className="control">
              <input className="input" type="text" placeholder="Name" name="name" onChange={this.onInputChange}/>
            </div>
          </div>

          <div className="field">
            <label className="label"></label>
            <div className="control">
              <input className="input" type="text" placeholder="Surnname" name="surname" onChange={this.onInputChange} />
            </div>
          </div>
        
        <Tags tagHandle={this.onInputChange}/>
        
        <div className="field is-grouped">
            <div className="control">
                <button className="button is-warning">Submit</button>
            </div>
                      
        </div>
          
          </form>
        </div>
      </React.Fragment>
      )
    }
    

}