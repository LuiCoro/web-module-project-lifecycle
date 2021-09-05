import React, {Component} from 'react';
import axios from 'axios';

import GitCard from './Components/GitCard'

class App extends Component {
  render() {
  
    const axiosPromise =
      axios.get('https://api.github.com/users/LuiCoro')
        .then(res => {
          const MyData = res.data
          console.log(MyData)
        })
        .catch(err => {
          console.log('It Broke!' , err)
        })
    
    console.log(axiosPromise)
    
    return (
      <div>
        <h1>Hello World</h1>
        <GitCard />
      </div>
    )
  }
}

export default App