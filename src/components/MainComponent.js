import React , {Component} from 'react';
import ListComponent from './ListComponent';
import PropTypes from "prop-types"
import CreateContact from './CreateContact'
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import { BounceLoader } from "react-spinners"; 
import axios from 'axios';

import { css } from "@emotion/core";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Loader extends Component{


  render(){


    return(
      <div className="container-fluid">

        <BounceLoader css={override}/>

      </div>

    )
  }
}

class MainComponent extends Component{

  state = {
    contacts:[],

    loading:true,
  }

  
  getContactList() {

    const apiUrl = process.env.REACT_APP_API_URL

    axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => this.setState({
        contacts: res.data.user,
        loading: false
      }))

  }


  removeContact = (contact) => {

    const apiUrl = process.env.REACT_APP_API_URL
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c._id !== contact._id

      })

    }))
    fetch(apiUrl + "/" + contact._id, {
      method: 'DELETE',
      
    })
      .then(res => res.json())
  }
      
      
    

      

  
  componentDidMount() {

  this.getContactList();

  }

 

 
 
  CreateContact = (contact,url,history) => {

    const apiUrl = process.env.REACT_APP_API_URL
   

    const pp={
      profilepic:url
    };
    const all={...contact,...pp}
    


    axios.post(apiUrl, all , {
      headers: {
        'Content-Type': 'application/json',
        
      }
    }).then((response) => {
      const newContact = {
        _id: response.data.data._id,
        name: response.data.data.name,
        username: response.data.data.username,
        profilepic: response.data.data.profilepic
      }
      this.setState((currentState) => ({
        contacts: currentState.contacts.concat([newContact]),
      }))
      history.push('/');
    })

  }

  



 


  
 


    

    
    



  render(){

    return(
      <div>
       
        
        {(this.state.loading === true) && (
          <Route exact path="/" component={Loader}/>
          
       )}



        {(this.state.loading === false) && (


          <Switch>
          <Route exact path="/" render={() => (


            
            <ListComponent contacts={this.state.contacts.reverse()}
              onDeleteContact={this.removeContact}
              openScreen={this.AddContactScreen}
                toggleMode={this.props.toggleMode}
                
            />)}
          /> 


          <Route path="/create" render={({ history }) => (
            <CreateContact
              onCreateContact={(contact,url) => {
                this.CreateContact(contact,url,history)
                //history.push('/')
              }}
            />
          )} />
          </Switch>

          
          
        )}

        


   
      
      
      
      
      </div>
     
    )
  }


}

ListComponent.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired

}

export default MainComponent;
