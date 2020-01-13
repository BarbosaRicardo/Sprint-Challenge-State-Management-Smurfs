import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './App.css'
import {getSmurfs} from '../actions/getSmurfs.js'
import {postSmurf} from '../actions/postSmurf.js'

function App(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');

  useEffect(() => {
    props.getSmurfs();
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    props.postSmurf({
      name: name, 
      age: age,
      height: height,
      id: Date.now()
    })
    setName('')
    setAge('')
    setHeight('')
  }

  const handleNameChange = e => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleAgeChange = e => {
    e.preventDefault()
    setAge(e.target.value)
  }

  const handleHeightChange = e => {
    e.preventDefault()
    setHeight(e.target.value)
  }

  return (
    <div className = "App">
      <h1>Smurfs! 2.0/ Redux</h1>

      <form onSubmit = {handleSubmit}>
        <input placeholder = 'Name' name='Name' value={name} onChange={handleNameChange} />
        <input placeholder = 'Age' age='Age' value={age} onChange={handleAgeChange} />
        <input placeholder = 'Height' height='Height' value={height} onChange={handleHeightChange} />
        <button onClick = {handleSubmit}>Submit</button>

      </form>

      <div className = 'smurf-cards'>
        {props.smurfs.map((smurf) => {
          return <div className='smurf-card' key={smurf.id}>
            <h2>{smurf.name}</h2>
            <h3>Age: {smurf.age}</h3>
            <h3>Height:{smurf.height}</h3>
      </div>
      })}

    </div>
    </div>
  )
}; 

function mapStateToProps(state) {
  return{
    smurfs:state.smurfs
  }
}

const mapDispatchToProps = {
  getSmurfs,
  postSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
  