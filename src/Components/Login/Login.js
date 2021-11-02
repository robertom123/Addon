import React from 'react'
import LoginPage from './LoginPage'

class Login extends React.Component{
  constructor(){
    super()
    this.state = {
        names: "bert"
    }
  }

  render(){
    return(
      <div>
        <LoginPage />
      </div>
    )
  }
}
export default Login
