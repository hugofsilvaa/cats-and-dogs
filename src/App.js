import { Component } from 'react';
import './App.css';
import AnimalList from './components/AnimalList';
import DropDown from './components/DropDown';
import Title from './components/Title';

const animals = [
  {
    type: 'cat',
    name: 'Kandy',
    imgUrl: 'https://images-cdn.9gag.com/photo/3630193_700b.jpg',
  },
  {
    type: 'cat',
    name: 'Sir John II',
    imgUrl: 'https://kittybloger.files.wordpress.com/2012/05/cat-king.jpg?w=584',
  },
  {
    type: 'dog',
    name: 'Bill',
    imgUrl: 'https://live.staticflickr.com/8534/8622367912_cfe27bf5ef.jpg',
  },
  {
    type: 'dog',
    name: 'Shawna',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-bi-Tq3VTy8AL_fGBoLIwdnvY5RfG8wJNr1xW5_tWzQ8TOGx',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelection: 'All'
    }
  }

  handleAnimalSelection = (event) => {
    this.setState({ userSelection: event.target.value })
  }

  arrayChoice = () => {
    if (this.state.userSelection === 'All') {
      return animals
    } else if (this.state.userSelection === 'Cats') {
      return animals.filter(animal => animal.type === 'cat')
    } else {
      return animals.filter(animal => animal.type === 'dog')
    }
  }

  render() {

    return (
      <div className="App" >
        <Title title={"React Cats and Dogs"} />
        <DropDown handleSelect={this.handleAnimalSelection} />
        <AnimalList animalArray={this.arrayChoice()} />
      </div>
    )
  }
}


export default App;
