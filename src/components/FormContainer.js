import React from 'react';
import FormComponent from './FormComponent'

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        };
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? 
            this.setState(state => { 
                return{
                    dietaryRestrictions: {
                        ...state.dietaryRestrictions,
                        [name]: checked 
                    }  
                }
            }) : this.setState({ [name]: value });
    }

    render(){
        return(
            <FormComponent 
                handleChange={this.handleChange}
                data={this.state}
            />
        );
    }
}

export default Form;