import React,{Component} from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {id: 'ada',name:'Akhil',age:21},
      {id: 'scd',name:'Akriti',age:23}
    ],
    showPersons: false
  }
  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons:[
  //       {name:newName,age:21},
  //       {name:'Akhil',age:23}
  //     ]
  //   })
  // }

  deletePersonHandler  = (personIndex) => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons:persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render(){
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer',
      ':hover': {
        backgroundColor:'lightgreen',
        color:'black'
      }
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
                    click = {()=>this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    changed={(event)=>this.nameChangedHandler(event,person.id)}/>
          })}
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
            click ={this.switchNameHandler.bind(this,'Not a nigga sorry')}>My hobbies: Nah</Person> */}
        </div> 
      )
      style.backgroundColor='red';
      style[':hover']= {
        backgroundColor:'salmon',
        color:'black'
      };
    }

    const classes = [];
    if(this.state.persons.length<=2){
      classes.push('blue')
    }
    if(this.state.persons.length<=1){
      classes.push('bold')
    }

  return (
    <div className="App">
      <h1>My Journal</h1>
      <p className={classes.join(' ')}>Welcome guys subscribe like share comment</p>
      <button 
        style={style}
        onClick={this.togglePersonHandler}>Switch</button>

      {persons}
    </div>
    // React.createElement('div',{className:'App'},React.createElement('h1',null,'wattup'))
  );
}
}
// class App extends Component {
// const App = (props) => {
//   // state = {
//     // persons : [
//     //   {name:'Akhil',age:21},
//     //   {name:'Banu',age:19},
//     //   {name:'Akriti',age:23}
//     // ]
//   // }

//   // switchNameHandler = () => {
//   //   // console.log('was clicked');
//   //   // Don't change state directly like this => this.state.persons[0].name = 'Akhil Garg';
//   //   this.setState({persons:
//   //     [
//   //       {name:'Akhil Garg',age:21},
//   //       {name:'Banu',age:20},
//   //       {name:'Akriti',age:23}
//   //     ]
//   //   })
//   // }

//   // render(){
//   const [personState, setPersonState] = useState({
//     persons : [
//       {name:'Akhil',age:21},
//       {name:'Banu',age:19},
//       {name:'Akriti',age:23}
//     ]
//   });

//   const switchNameHandler = () => {
//     // console.log('was clicked');
//     // Don't change state directly like this => this.state.persons[0].name = 'Akhil Garg';
//     setPersonState({persons:
//       [
//         {name:'Akhil Garg',age:21},
//         {name:'Banu',age:20},
//         {name:'Akriti',age:23}
//       ]
//     })
//   };
//   return (
//     <div className="App">
//       <h1>Hi,Iam a react app</h1>
//       <p>This is working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
//       <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies are yea.</Person>
//       <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
//     </div>
//     // <h1>Wattup</h1>
//   );
//   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am a React app'));
//   }


export default Radium(App);