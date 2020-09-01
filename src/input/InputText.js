import React from "react"
export default class InputText extends React.Component {
    state = { inputValue: "" };
    handleInputText(e) {
        this.setState({
            inputValue: e.target.value
        })
        this.props.getInputdata(e.target.value)
    }

    render() {
        return (
            <>
                <input type="text" className="form-control" onChange={this.handleInputText.bind(this)} value={this.state.inputValue}></input>
            </>
        )
    }
}

//bind vs call