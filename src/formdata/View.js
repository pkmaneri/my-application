import React from "react"
export default class View extends React.Component {
    render() {
        return (
            <div className="divStyle">
                {this.props.name},{this.props.gender} wants {this.props.vehicle}  
                {this.props.insurance === "true" ? " with" :" without"} insurance
            
            </div>
        )
    }
}