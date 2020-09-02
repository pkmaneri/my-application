import React from "react"
export default class CheckBox extends React.Component {
    state = { checkedValue: true };
    handleCheckbox(e) {
        this.setState({
            checkedValue: e.target.checked
        })
        this.props.getCheckdata(e.target.checked)
    }
    render() {
        return (
            <input type="checkbox"
                onChange={this.handleCheckbox.bind(this)}
                checked={this.state.checkedValue}></input>
        )
    }
}