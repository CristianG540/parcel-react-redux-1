import React from 'react'

// Components
import Table from '../Table/Table'

// Redux test
import reduxIndex from '../../redux/index'

class App extends React.Component {
  render () {
    const title = 'Buena la rata !'
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor'
      },
      {
        name: 'Mac',
        job: 'Bouncer'
      },
      {
        name: 'Dee',
        job: 'Aspring actress'
      },
      {
        name: 'Dennis',
        job: 'Bartender'
      }
    ]
    return (
      <div className="App">
        <h1>{title}</h1>
        <Table characterData={characters}/>
      </div>
    )
  }
}

export default App
