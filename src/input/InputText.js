import React from "react"
export default class InputText extends React.Component{
    state = {inputValue: 'hello world'};
     handleInputText(e){
         this.setState({
             inputValue : e.target.value
         })
    }
    
    render(){
        return(
            <>
            {this.state.inputValue}
            <input type="text" onChange={this.handleInputText.bind(this)} value={this.state.inputValue}></input>
        </>
        )
    }
}

//bind vs call