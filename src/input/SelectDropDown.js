import React from "react"

export default class SelectDropDown extends React.Component{
    render(){
        return(
              <select>
                  {
                      this.props.options.map((value, i) => {
                      return <option key={i}>{value}</option>
                      })
                  }
            </select>
        )
    }
}