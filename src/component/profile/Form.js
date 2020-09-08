import React from "react"
import InputText from "../shared/InputText";
import CheckBox from "../shared/CheckBox";
import SelectDropDown from "../shared/SelectDropDown";
export default class ProfileForm extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        cityName: ""
    }
    getInputFirstName(value) {
        console.log(value);
        this.setState({
            firstName: value
        })
    }
    getInputLastName(value) {
        console.log(value);
        this.setState({
            lastName: value
        })
    }
    getInputCityName(value) {
        console.log(value);
        this.setState({
            cityName: value
        })
    }
    getSelectStateName(value) {
        console.log(value);
        this.setState({
            state: value

        })
    }
    getInputZipName(value) {
        console.log(value);
        this.setState({
            zipName: value
        })
    }
    getSelectStateName(value) {
        console.log(value);
        this.setState({
            State: value

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
            <div className="container">
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">First name</label>
                        <InputText type="text" className="form-control" id="validationCustom01" value="Mark" required value={this.state.firstName} getInputdata={this.getInputFirstName.bind(this)} />
                        <div className="valid-feedback">
                            Looks good!
                          </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom02">Last name</label>
                    <InputText type="text" className="form-control" id="validationCustom02" value="Otto" required value="Mark" required value={this.state.lastName} getInputdata={this.getInputLastName.bind(this)} />
                    <div className="valid-feedback">
                        Looks good!
                      </div>
                </div>

                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom03">City</label>
                        <InputText type="text" className="form-control" id="validationCustom03" required value="Mark" required value={this.state.cityName} getInputdata={this.getInputCityName.bind(this)} />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                         </div>
                    </div>
                    <div className="col-md-3 mb-3">
                    <label for="validationCustom04">State</label>
                        <SelectDropDown options={[
                                    {
                                        labelText: "Patna",
                                        value: "patna"

                                    },
                                    {
                                        labelText: "Gaya",
                                        value: "gaya"
                                    }

                                ]} getSelectdata={this.getSelectStateName.bind(this)} />

                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="validationCustom05">Zip</label>
                        <InputText type="text" className="form-control" id="validationCustom05" required value="Mark" required value={this.state.zipName} getInputdata={this.getInputZipName.bind(this)} />
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                                    </div>
                    </div>
                </div>
                <div>
                <CheckBox getCheckdata={this.getCheckdata.bind(this)} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                    {this.state.firstName}{this.state.lastName}{this.state.cityName}{this.state.zipName}{this.state.stateName}
            </div >
        )
    }
}