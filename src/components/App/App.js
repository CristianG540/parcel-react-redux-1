import React from 'react'
import Table from '../Table/Table'
import List from '../List/List'

// Redux test
// eslint-disable-next-line no-unused-vars
import reduxIndex from '../../redux/index'

class App extends React.Component {
  render () {
    const title = 'Buena la rata !'
    const articlesTitle = 'Articulos'
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
        <hr/>
        <h1>{articlesTitle}</h1>
        <List/>
      </div>
    )
  }
}

export default App
