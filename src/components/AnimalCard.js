import { Component } from 'react';


class AnimalCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavorite: false
        }
    }

    toggleFavorite = () => {
        this.setState({ isFavorite: !this.state.isFavorite })
    }


    render() {
        const { animalInfo } = this.props;
        return (
            <div>
                <div>
                    <img src={animalInfo.imgUrl} alt={animalInfo.name} />
                </div>
                <div>
                    <p>{animalInfo.name}</p>
                    <div onClick={() => this.toggleFavorite()}>{this.state.isFavorite ? "❤️" : "🤍"}</div>
                </div>
            </div>
        )
    }
}

export default AnimalCard

