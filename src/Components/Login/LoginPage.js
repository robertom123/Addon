import React from 'react'

class LoginPage extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "bert"
        }
    }
    render(){
        return(
            <div>
                <form>
                    <h2>Sign In</h2>
                    <label>
                        Username: <input type = "text"/>
                    </label>
                    <br/>
                    <label>
                        Password: <input type = "text"/>
                    </label>
                    <br/>
                    <input type = "Submit"/>
                    <br/>
                    <label>
                        Create account <input type = "button" value = "Here"/>
                    </label>


                </form>

            </div>
        )
    }
}

export default LoginPage