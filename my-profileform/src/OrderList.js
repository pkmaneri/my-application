import React from "react"
import Order from "./Order"


export default class OrderList extends React.Component {
    state ={
        values:["a","sa"]
    }
    render() {
        return (
            <ol>
                {this.state.values.map((value) =>{
                    return (
                        <Order value={value}/>
                    )
                })}

            </ol>
          
        )
    }
}