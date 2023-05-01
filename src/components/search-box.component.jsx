import {Component} from "react";
import '../search-box.css'
class SearchBox extends Component {
    render() {
        return (
            <div>
                <input className={this.props.className}
                    type='search'
                    placeholder={this.props.placeholder}
                    onChange={this.props.handleOnChange}/>
            </div>
        );
    }
}

export default SearchBox