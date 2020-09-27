import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {Link} from 'react-router-dom'
const useStyles =() => ({
  margin: {
    margin:1,
  },

  iconButton: {
    padding: 10,
  },
});



class HeaderComponent extends Component{
  
  
 
 render(){


   const { classes } = this.props;
 return(
  <div>



      <FormControl className={classes.margin}>
        

        <InputBase
          id="search"
          type="text"
          placeholder="Search User"
          value={this.props.query}
          onChange={(event) => this.props.updateQuery(event.target.value)}
          startAdornment={
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          }
          endAdornment={

            <Link to="/create"><IconButton 
              type="submit" className={classes.iconButton} aria-label="search">
              <PersonAddIcon />
            </IconButton></Link>

          }


        />
      </FormControl>
    
  </div>
  )

  }





}

export default withStyles(useStyles)(HeaderComponent);
