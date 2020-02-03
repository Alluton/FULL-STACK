import React, { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'

const Persons = (props) =>{
    return( 
        <div>
            <ul>
                {props.persons.map((person) => 
                    <Person key={person.name} person={person}></Person>
                )}
            </ul>
        </div>
    )
}
const Person =(props) =>{
    return(
        <div>
            <li key={props.person.name}> {props.person.name} {props.person.number}</li>
        </div>
    )
}
const Filter=(props)=>{
    return(
        <div>
            <input value={props.newFilter} onChange={props.handleFilterChange}/>
        </div>
    )
}

const App = (props) => {
  const [ newFilter, setNewFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [persons, setPersons] = useState([])
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  const personsToShow = newFilter.length===0
    ? persons
    : persons.filter(person => person.name.includes(newFilter))
  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {
        name:newName,
        number:newNumber
    }
    if (!persons.some(e => e.name === newName)) {
        personService
      .create(nameObject)
      .then(response => {
        setPersons(persons.concat(response.data))
      })
    }else{
        setPersons(persons)
        alert(`${newName} is already added to phonebook`);
    }
    setNewName('')
    setNewNumber('')
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event)=>{
    setNewFilter(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}></Filter>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <Persons persons={personsToShow}> </Persons>
    </div>
  )

}

export default App