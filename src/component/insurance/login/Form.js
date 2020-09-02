import React from "react"
import InputText from "../../shared/InputText"
 
export default class LoginForm extends React.Component{
    state = {
        userName: "",
        password:""

    }
  
    getInputUserName(value) {
        console.log(value);
        this.setState({
            userName: value
        })

    }
    getInputPassword(value) {
        console.log(value);
        this.setState({
            password: value
        })

    }
    render(){
        return (
            <>
            UserName : 
            <InputText type="text" value={this.state.userName} getInputdata={this.getInputUserName.bind(this)} />
            Password :
            <InputText type="password" value={this.state.password} getInputdata={this.getInputPassword.bind(this)} />
            
            {this.state.userName} {this.state.password}
            </>
        )
    }

 }