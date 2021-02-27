import AnimalCard from './AnimalCard'

const AnimalList = ({ animalArray }) => {
    return (
        <div className="card-list">
            {animalArray.map(animal => <AnimalCard animalInfo={animal} key={animal.name} />)}
        </div>
    )
}

export default AnimalList