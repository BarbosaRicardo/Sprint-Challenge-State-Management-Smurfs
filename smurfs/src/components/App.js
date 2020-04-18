import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import './App.css'
import { getSmurfs } from '../actions/getSmurfs.js'
import { postSmurf } from '../actions/postSmurf.js'


function App(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');

  useEffect(() => {
    props.getSmurfs();
  }, [])

  const handleSubmit = event => {
    event.preventDefault();
    props.postSmurf({
      name: name,
      age: age,
      height: height,
      id: Date.now()
    })
    setName('')
    setAge('')
    setHeight('')
  }; //end of handleSubmit 

  const handleNameChange = event => {
    event.preventDefault();
    setName(event.target.value)
  }; //end of handleNameChange

  const handleAgeChange = event => {
    event.preventDefault();
    setAge(event.target.value)
  }; //end of handleAgeChange

  const handleHeightChange = event => {
    event.preventDefault();
    setHeight(event.target.value)
  }; //end of handleHeightChange

  return (
    <div className ="App">
      <h1>Smurfs! 2.0 W/Redux</h1>
      
      
      <form onSubmit={handleSubmit}>
        <input placeholder ='Name' name='Name' value={name} onChange={handleNameChange} />
        <input placeholder = 'Age' age='Age' value={age} onChange={handleAgeChange} />
        <input placeholder ='Height' height='Height' value={height} onChange={handleHeightChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <div className='smurf-cards'>
        {props.smurfs.map((smurf) => {
          return <div className='smurf-card' key={smurf.id}>
            <h2>{smurf.name}</h2>
            <h3>Age: {smurf.age}</h3>
            <h3>Height: {smurf.height}</h3>
      </div>
        })}
     </div>
    </div>
  ); //end of return statement 
}; //end of App


function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  }
}

const mapDispatchToProps = {
  getSmurfs,
  postSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
