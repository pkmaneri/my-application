import React from "react"
import InputText from "../shared/InputText";
import CheckBox from "../shared/CheckBox";
export default class ProfileForm extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        cityName: "",
        zipName: ""
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
    // getSelectStateName(value) {
    //     console.log(value);
    //     this.setState({
    //         state: value

    //     })
    // }
    getInputZipName(value) {
        console.log(value);
        this.setState({
            zipName: value
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
                    {/* <div className="col-md-3 mb-3">
                        <label htmlFor="validationCustom04">State</label>
                        <selecte className="custom-select" id="validationCustom04" onChange={this.handleSelectstate.bind(this)} value={this.state.selectStatevalue} required>
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </selecte>
                        <div className="invalid-feedback">
                            Please select a valid state.
                          </div>
                    </div> */}
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
                    {this.state.firstName}{this.state.lastName}{this.state.cityName}{this.state.zipName}
            </div >
        )
    }
}