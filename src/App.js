import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{
  constructor() {
    super()
    this.state = {
      display: false,
      toys: null
    }
  }

  handleIncreaseLikes = (id) => {
    let updatedToys = this.state.toys.map((toy) => {
      if (toy.id === id){
        toy.likes++
        return toy
      } else {
        return toy
      }
    })

    this.setState({
      toys: updatedToys
    })
  }

  handleDonate = (id) => {
    this.state.toys.splice((id-1), 1)
    
    this.setState({
      toys: this.state.toys
    })
  }

  componentDidMount() {
    fetch('http://localhost:8000/toys')
      .then(response => response.json())
      .then(data => this.setState({ toys: data }));
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleNewToy = (e) => {
    e.preventDefault()

    const newToy = {
      name: e.target.name.value,
      image: e.target.name.value,
      likes: 0,
      id: this.state.toys.length + 1
    }

    const newToyArray = [...this.state.toys, newToy]

    this.setState({
      toys: newToyArray
    })
  }

  render(){

    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleNewToy={this.handleNewToy} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer allToys={this.state.toys} handleIncreaseLikes={this.handleIncreaseLikes} handleDonate={this.handleDonate} />
      </>
    );
  }

}

export default App;
