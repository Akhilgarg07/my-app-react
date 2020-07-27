import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:'Akhil',age:21},
      {name:'Akriti',age:23}
]
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons:[
        {name:newName,age:21},
        {name:'Akhil',age:23}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name:'Akhil',age:21},
        {name:event.target.value,age:23}
      ]
    })
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };
  return (
    <div className="App">
      <h1>My Journal</h1>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}
        click ={this.switchNameHandler.bind(this,'Not a nigga sorry')}>My hobbies: Nah</Person>
      <button 
        style={style}
        onClick={() => this.switchNameHandler('sure a nigger')}>Switch</button>
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


export default App;
