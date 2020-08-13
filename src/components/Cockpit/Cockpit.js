import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const aclasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    if(props.persons.length<=2){
      aclasses.push(classes.red)
    }
    if(props.persons.length<=1){
      aclasses.push(classes.bold)
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={aclasses.join(' ')}>Welcome guys subscribe like share comment</p>
            <button
            className = {btnClass}
            // alt = {this.state.showPersons}
            onClick={props.clicked}>Switch</button>
        </div>
      

    );
};

export default cockpit;