import {Component} from "react";
import '../card-list.css'
import Card from "./card.component";

class CardList extends Component {
    render() {
        const {monsters} = this.props
        return (
            <div className='card-list'>
                {monsters.map((monster) =>
                    <Card monster={monster}/>
                )}
            </div>
        );
    }
}

export default CardList