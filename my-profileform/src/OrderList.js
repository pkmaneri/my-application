import React from "react"
import Order from "./Order"


export default class OrderList extends React.Component {
    state = {
        currentValue: '',
        values: []
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState(prevState => {
            prevState.currentValue = value;
            return prevState
        })
    }

    handleClick(e) {
        this.setState(prevState => {
            prevState.values.push(prevState.currentValue);
            return prevState;
        })
    }
    render() {
        return (
            <>
                <input onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleClick.bind(this)}>Add</button>
                <ol>
                    {this.state.values.map((value) => {
                        return (
                            <Order value={value} />
                        )
                    })}

                </ol>
            </>
        )
    }
}