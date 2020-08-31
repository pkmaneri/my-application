import React from "react"
import View from "./View"
import CheckBox from "../input/CheckBox"
import Radio from "../input/Radio"
import SelectDropDown from "../input/SelectDropDown"
import InputText from "../input/InputText"

export default class Form extends React.Component {
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
                            <InputText/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <CheckBox  />
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
                                         labelText:"Male",
                                         value:"male"
                                     },
                                     {
                                         labelText:"Female",
                                         value:"female"
                                     }
                                 ]}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Vehicle
                            </td>
                            <td>
                                <SelectDropDown options={[
                                    {
                                        labelText:"Car",
                                        value:"car"

                                    },
                                    {
                                        labelText:"Bike",
                                        value:"bike"

                                    }
                                    
                                ]}/>
                            </td>
                           
                        </tr>
                        
                    </tbody>
                </table>
                <View name="anil" gender="male" vehicle="bike" insurance="false"/>
            </div>
        )
    }
}