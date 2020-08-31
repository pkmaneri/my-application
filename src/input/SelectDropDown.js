import React from "react"

export default class SelectDropDown extends React.Component{
    render(){
        return(
              <select>
                  {
                      this.props.options.map((option, i) => {
                      return <option key={i} value={option.value}>{option.labelText} </option>
                      })
                  }
            </select>
        )
    }
}