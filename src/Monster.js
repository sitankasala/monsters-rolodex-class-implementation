import {Component} from "react";

class Monster extends Component{
    render() {
        return (
            <div>
                {this.props.name !== '' && <p>My name is {this.props.name}</p>}
        </div>)
    }
}

export default Monster