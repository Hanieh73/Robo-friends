import React, {Component} from 'react'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import './App.css'


class App extends Component {
    constructor() {
        super()
        this.state = {
                robots: [],
                searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
           return response.json() 
        })
            .then((users) => {
            this.setState({robots: users})
        })
    
}


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
   
    }


    render() {
        const {robots, searchfield } = this.state
             const filterRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
             })
        
       
 
  
          return (
        <div className='tc'>
            <h1 className='f2 animate__animated animate__bounce'>RoboFriends</h1>
                  <SearchBox searchChange={this.onSearchChange} />
                  <Scroll>
                      <CardList robots={filterRobot} />
                  </Scroll>
                  <footer className='footer'>
                       <p>© 2023 RoboFriends. All rights reserved.</p>
                  </footer>
          
        </div>
       

    )
        
      
    }
    
    
    
}

export default App;