import React from "react"
export default class CheckBox extends React.Component {
    state = { checkedValue :''};
    handleCheckbox(e) {
        this.setState({
        checkedValue: e.target.value
    })
    }
render(){
    return (
        <input type="checkbox"onChange={this.handleCheckbox.bind(this)} value={this.state.checkedValue}></input>

    )
}
}