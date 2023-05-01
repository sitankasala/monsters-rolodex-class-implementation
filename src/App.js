import './App.css';
import {Component} from "react";
import CardList from "./components/card-list.component";
import SearchBox from "./components/search-box.component";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => {
                this.setState(() => {
                    return {monsters: users}
                })
            });
    }

    handleOnChange = (event) => {
        const searchField = event.target.value.toLowerCase();
        this.setState(() => {
            return {searchField: searchField}
        });
    };

    render() {
        const {monsters, searchField} = this.state;
        const {handleOnChange} = this;
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField)
        })
        return (
            <div className="App">
                <h1 className='app-title'>Monsters Rolodex</h1>
                <SearchBox searchField={searchField} className='search-box' placeholder='search-monsters'
                           handleOnChange={handleOnChange}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
