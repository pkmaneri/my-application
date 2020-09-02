import React from "react"
import InputText from "../shared/InputText";
import CheckBox from "../../component/shared/CheckBox"

export default class EmailForm extends React.Component {
    state = {
        emailName: "",
        password: ""

    };
    getCheckdata(value) {
        console.log(value)
        this.setState({
            check: value
        })
    }

    getInputEmailName(value) {
        console.log(value);
        this.setState({
            emailName: value
        })

    }
    getInputPassword(value) {
        console.log(value);
        this.setState({
            password: value
        })
      

    }


    render() {
        return (
            <div className="container">
               <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <InputText type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.emailName} getInputdata={this.getInputEmailName.bind(this)}  />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div> 
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <InputText type="password" className="form-control" value={this.state.password} getInputdata={this.getInputPassword.bind(this)} />
                </div> 
                <div>
                <CheckBox getCheckdata={this.getCheckdata.bind(this)} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                {this.state.emailName} {this.state.password}

            </div>
        )
    }
}