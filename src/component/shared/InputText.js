import React from "react"
export default class InputText extends React.Component {
    handleInputText(e) {
        this.props.getInputdata(e.target.value)
    }

    render() {
        return (
            <>
                <input type={this.props.type}
                 className="form-control"
                 onChange={this.handleInputText.bind(this)} 
                value={this.props.value}></input>
            </>
        )
    }
}

//bind vs call