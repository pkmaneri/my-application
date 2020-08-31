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
                <table className="table">
                    <tbody>
                    <tr>
                            <td>
                                <InputText/>
                            </td>
                            <td>
                                EnterName
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <CheckBox />
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
                                Male <Radio name="gender"/>
                                Female <Radio name="gender"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Vehicle
                            </td>
                            <td>
                                <SelectDropDown options={["bike","car"]}/>
                            </td>
                           
                        </tr>
                        
                    </tbody>
                </table>
                <View />
            </div>
        )
    }
}