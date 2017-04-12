import React,{ Component } from 'react'

class App extends Component {
    render(){
        const { name } =this.props
        return(
            <div>
                你好，{name}
            </div>
        )
    }
}

export default App