import React, { Component } from 'react';


class Customcounter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usercounter: 0,
            counter: 0,
            gender: {
                male: true,
                female: false,
                other: false
            },
            skills: {
                javascript: true,
                python: false,
                swift: false,
                rust: true
            },
            countrySelected: 'Pakistan'
        }

        this.updateUserCounter = this.updateUserCounter.bind(this);
        this.addCounter = this.addCounter.bind(this);
        this.genderFormHandler = this.genderFormHandler.bind(this);
        this.skillsFormHandler = this.skillsFormHandler.bind(this);
        this.countryFormHandler = this.countryFormHandler.bind(this);

        

    }

    updateUserCounter(event) {
        this.setState({
            usercounter: Number(event.target.value)

        });
    }

    addCounter() {
        this.setState({
            counter: this.state.counter + this.state.usercounter
        })
    }

    subtractCounter() {
        this.setState({
            counter: this.state.counter - this.state.usercounter
        })
    }

    genderFormHandler(event) {

        let genderObject = this.state.gender;
        for (var key in genderObject) {
            genderObject[key] = false;
        }
        genderObject[event.target.value] = event.target.checked;
        this.setState({
            gender: genderObject
        });

    }


    skillsFormHandler(event) {
        let skillsObject = this.state.skills;
        skillsObject[event.target.value] = event.target.checked;
        
        this.setState({
            skills: skillsObject
        });

    }

    countryFormHandler(event){
        this.setState({
            countrySelected: event.target.value
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.addCounter.bind(this)}>+</button>
                <b>{this.state.counter}</b>
                <button onClick={this.subtractCounter.bind(this)}>-</button>

                <input type="text" name="usercounter" value={this.state.usercounter} onChange={this.updateUserCounter} />

                <br />

                <div>
                    Gender: <br />
                    Male: <input type="radio" name="gender" value="male" checked={this.state.gender.male} onChange={this.genderFormHandler} /> <br />
                    Female: <input type="radio" name="gender" value="female" checked={this.state.gender.female} onChange={this.genderFormHandler} /><br />
                    Other: <input type="radio" name="gender" value="other" checked={this.state.gender.other} onChange={this.genderFormHandler} />
                </div>

                <div>
                    I know: <br />

                    JavaScript: <input type='checkbox' name='skills' value='javascript' checked={this.state.skills.javascript} onChange={this.skillsFormHandler} /> <br />
                    Python: <input type='checkbox' name='skills' value='python' checked={this.state.skills.python} onChange={this.skillsFormHandler} /> <br />
                    Rust: <input type='checkbox' name='skills' value='rust' checked={this.state.skills.rust} onChange={this.skillsFormHandler} /> <br />
                    Swift: <input type='checkbox' name='skills' value='swift' checked={this.state.skills.swift} onChange={this.skillsFormHandler} /> <br />

                </div>


                <div>
                    Select Country: <br />

                    <select name='countries' value={this.state.countrySelected} onChange={this.countryFormHandler}>
                        <option value='pakistan'>Pakistan</option>
                        <option value='india'>India</option>
                        <option value='iran'>Iran</option>
                        <option value='afghanistan'>Afghanistan</option>
                        <option value='china'>China</option>
                        <option value='bangladesh'>Bangladesh</option>
                    </select>

                </div>



            </div>
        )
    }

}


export default Customcounter;






