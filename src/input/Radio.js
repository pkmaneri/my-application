import React from "react"

export default class Radio extends React.Component{
    state =  {radioValue:""}
    handleRadio(e) {
        this.setState({
            radioValue: e.target.value

        })
    }


    render(){
        return (
            <>
            {this.state.radioValue}
                {this.props.options.map((option, i)=>{
                    return (
                        <>
                        {option.labelText}
                        <input  type="radio" 
                                        name={this.props.name}
                                        onChange={this.handleRadio.bind(this)} 
                                        value={option.value} ></input>
                                        </>
                    )
                })}
            </>
        )
    }

    // render() {
    //     return (
    //         {
    //         this.props.options.map((option,i)=>{
    //             return(
    //                 {option.labelText }
    //                 <input  type="radio" 
    //                 name={this.props.name}
    //                 onChange={this.handleRadio.bind(this)} 
    //                 value={option.value} ></input>

    //             )
    //         })

    //     }
    //     )
    // }
}