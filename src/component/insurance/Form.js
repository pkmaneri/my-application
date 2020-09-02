import React from "react"
import View from "./View"
import CheckBox from "../../component/shared/CheckBox"
import Radio from "../../component/shared/Radio"
import SelectDropDown from "../../component/shared/SelectDropDown"
import InputText from "../../component/shared/InputText"


export default class Form extends React.Component {
    state = {
        name: "",
        gender: "male",
        vehicle: "car",
        insurance: false,


    }
    getInputdata(value) {
        console.log(value);
        this.setState({
            name: value
        })

    }
    getRadiodata(value) {
        console.log(value);
        this.setState({
            gender: value
        })
    }
    getSelectdata(value) {
        console.log(value);
        this.setState({
            vehicle: value

        })
    }
    getCheckdata(value) {
        console.log(value)
        this.setState({
            check: value
        })
    }
    

    render() {
        return (
            <div className="divStyle">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>
                                Enter name
                            </td>
                            <td>
                                <InputText type="text" value={this.state.name} getInputdata={this.getInputdata.bind(this)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <CheckBox getCheckdata={this.getCheckdata.bind(this)} />
                            </td>
                            <td>
                                Please tick if you need insurance
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Gender
                            </td>
                            <td>

                                <Radio name="gender" options={[
                                    {
                                        labelText: "Male",
                                        value: "male",
                                        checked: true
                                    },
                                    {
                                        labelText: "Female",
                                        value: "female",
                                        checked: false
                                    }
                                ]} getRadiodata={this.getRadiodata.bind(this)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Vehicle
                            </td>
                            <td>
                                <SelectDropDown options={[
                                    {
                                        labelText: "Car",
                                        value: "car"

                                    },
                                    {
                                        labelText: "Bike",
                                        value: "bike"

                                    }

                                ]} getSelectdata={this.getSelectdata.bind(this)} />
                            </td>

                        </tr>
                      
                    </tbody>
                </table>
                <View name={this.state.name}
                    gender={this.state.gender}
                    vehicle={this.state.vehicle}
                    insurance={this.state.check} 
                    user={this.state.user}/>
                
            </div>
        )
    }
}