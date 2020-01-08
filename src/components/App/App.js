import React from 'react'
import Table from '../Table/Table'
import List from '../List/List'
import Form from '../List/Form'

// Redux test
// eslint-disable-next-line no-unused-vars
import reduxIndex from '../../redux/index'

class App extends React.Component {
  render () {
    const articlesTitle = 'Articulos'
    const newArticleTitle = 'Agregar un nuevo articulo'
    const tableTitle = 'Buena la rata !'
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
        <h1>{tableTitle}</h1>
        <Table characterData={characters}/>
        <hr/>
        <div>
          <h2>{articlesTitle}</h2>
          <List />
        </div>
        <div>
          <h2>{newArticleTitle}</h2>
          <Form />
        </div>
      </div>
    )
  }
}

export default App
