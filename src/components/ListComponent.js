import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
//import { ToastContainer, toast } from 'react-toastify';
import HeaderComponent  from './HeaderComponent';






const useStyles = () => ({
  root: {
    maxWidth: 1366,
    marginTop: 15,
    paddingTop: 3,
    borderRadius:5
  },
  large: {

    marginTop: 15
  },
   iconButton: {
    padding: 10,
    marginTop:10
  },


});





class ListComponent extends Component {

    state = {
      query: '',
      pic:''
    
    }
    

    

  updateQuery = (query) => {
    this.setState(() => ({

      query: query.trim()

    }))
  }
  clearQuery = () => {
    this.updateQuery('');
  }
  



  render(){

    const { classes } = this.props;
    const showingContacts = this.state.query === ''
    ? this.props.contacts
    : this.props.contacts.filter((c) => (
        c.name.toLowerCase().includes(this.state.query.toLowerCase())
    ))
  
    

    return (
      <React.Fragment>
 

      
         
          <HeaderComponent query={this.state.query} updateQuery={this.updateQuery} 
          toggleMode={this.props.toggleMode} />
          
          {showingContacts.length !== this.props.contacts.length && (
          <div>

            <p>Now Showing {showingContacts.length} of  {
              this.props.contacts.length}
              <span><button onClick={this.clearQuery}>Show All</button>
              </span></p>

          </div>

          )}

         {
          showingContacts.map((contact) => (
            <div key={contact._id}>
            <Card   className={classes.root}>

              <div className="container-fluid">

                <div className="row">

                  <div className="col-2 col-md-2">

                    <Avatar  className={classes.large} 

                    src={contact.profilepic}
                    
                         

                       

                     />

                  </div>

                  <div className="col-8 col-md-8">

                    <CardContent>
                      <p className={classes.align}>{contact.username}</p>
                      <p className={classes.align}>{contact.name}</p>
                    </CardContent>

                  </div>


                  <div className="col-2 col-md-2">

                    <IconButton
                      type="submit" className={classes.iconButton} aria-label="delete contact"
                      onClick={() => this.props.onDeleteContact(contact)}>
                      <DeleteIcon />
                    </IconButton>

                  </div>

                </div>




              </div>
            </Card>
            </div>


          ))}





          
      
      </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(ListComponent);
