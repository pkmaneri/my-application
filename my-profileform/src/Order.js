import React from "react"


export default class Order extends React.PureComponent {
    render() {
        return (
            <li>
                {this.props.value}
            </li>
        )
    }
}