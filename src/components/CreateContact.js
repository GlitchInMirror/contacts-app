import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import { ToastContainer , toast } from 'react-toastify';
import firebase from '../firebase'



function Notification(props){


  toast.error(props.noti);

  return(
    <div>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
  )
}

const useStyles = () => ({
  root: {
    marginTop: 20,
  },

  formInput:{
    marginTop: 35,
  },

  iconButton: {
    margin: 10,
  },

  button: {
    marginLeft: 30,
  },

  submitButton: {
    marginTop: 25,
  },

  avatar: {
    margin: 50,
  },
  input: {
    display: 'none',
  },
});



class CreateContact extends Component {

  constructor(props){
    super(props)
    this.state = {
    name: '',
    username:'',
    profilepic:null,
    preview:null,
    found:false,
    msg:''
    };

  
  this.setName = this.setName.bind(this);
  this.setUserName = this.setUserName.bind(this);
  this.setProfilePic = this.setProfilePic.bind(this);

  this.handleSubmit = this.handleSubmit.bind(this);

  
 
  }

  setName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  setUserName = event => {
    this.setState({
      username: event.target.value
    })
  }

  setProfilePic = event => {
    this.setState({
      profilepic : event.target.files[0],
      preview:URL.createObjectURL(event.target.files[0])
    })
  }

  
  handleSubmit = (e) => {

    e.preventDefault();
     const obj={
       username: '@'+this.state.username,
       name: this.state.name
     }
    

    let bucketName = "images"
    let file = this.state.profilepic;
    let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`)
    let uploadTask = storageRef.put(file);

    uploadTask.then((snapshot) => {
    snapshot.ref.getDownloadURL().then((url) => {
      this.props.onCreateContact(obj, url);

     


    })
  })

  }

  

   

 


 
  

  render() {


    const { classes } = this.props;
    return (
      <React.Fragment>

          {this.state.found===true && (
            <Notification noti={this.state.msg} /> 
          )}
          

        <div className="container-fluid">

        <div className="row">

            <div className="col-md-2" >


              <Link to="/"><IconButton type="submit" className={classes.iconButton} aria-label="search">
                <ArrowBackIcon />
              </IconButton>
              </Link>
                
            </div>
  
              <div className="col-md-2" >
              
                <Grid container alignItems="center" className={classes.root}>
                  
                 
                 
                <Avatar className={classes.avatar} src={this.state.preview}/>

                
                 
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={this.setProfilePic} 
                />
                <Divider className={classes.root} orientation="vertical" flexItem />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload
        </Button>
                </label>

               
                

                
                  
                </Grid>

              

             

              </div>
           
          
           
         
          <div className="col-md-8">
          

             
              <form  encType="multipart/form-data" >


                
                <br></br>
                
                <Input

                  startAdornment={
                    '@'
                  }
                  id="username"
                  type="text"
                  name="username"
                  className={classes.formInput}
                  onChange={this.setUserName} 
                  placeholder="User Name"
                  value={this.username}
                  required
                 
                />
              
                <br></br>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  className={classes.formInput}
                  required
                  onChange={this.setName } 
                  value={this.name}
                  placeholder="Name"
                />
                <br></br>
                <Button onClick={this.handleSubmit}  className={classes.submitButton} 

                  disabled={
                    this.state.name.length < 3 || this.state.username.length < 3 ||
                    this.state.profilepic === null ? true : false
                  }
                  variant="contained" color="primary">Add</Button>

              </form>
          
          
          </div>
        
        
        </div>
        
        </div>

          

      </React.Fragment>
    )

  }





}

export default withStyles(useStyles)(CreateContact);
