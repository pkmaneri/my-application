import React from "react"


export default class SelectDropDown extends React.Component{
    state = { selectvalue: "" }
    handleSelect(e) {
        this.setState({
            selectvalue: e.target.value

        })
        this.props.getSelectdata(e.target.value)
    }

    render(){
        return(
              <select className="form-control" onChange={this.handleSelect.bind(this)} value={this.state.selectvalue} >
                  {
                      this.props.options.map((option, i) => {
                      return <option key={i} value={option.value}>{option.labelText}  </option>
                      })
                  }
            </select>
        )
    }
}