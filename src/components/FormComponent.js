import React from 'react';

function FormComponent(props) {
    return (
        <main>
            <form>
                <input 
                    type="text" 
                    name="firstName" 
                    value={props.data.firstName} 
                    onChange={props.handleChange} 
                    placeholder="First Name" 
                /><br />
                <input 
                    type="text" 
                    name="lastName" 
                    value={props.data.lastName} 
                    onChange={props.handleChange} 
                    placeholder="Last Name" 
                /><br />
                <input 
                    type="number" 
                    min="0" 
                    name="age" 
                    value={props.data.age} 
                    onChange={props.handleChange} 
                    placeholder="Age" 
                /><br />
                
                <input 
                    type="radio" 
                    name="gender" 
                    value="male"
                    checked={props.data.gender === "male"}
                    onChange={props.handleChange} 
                /><label>Male</label>
                <input 
                    type="radio" 
                    name="gender" 
                    value="female"
                    checked={props.data.gender === "female"}
                    onChange={props.handleChange} 
                /><label>Female</label>
                <br />
                
                <select value={props.data.destination} name="destination" onChange={props.handleChange}>
                    <option value="">-- Please Choose a destination --</option>
                    <option value="Japan">Japan</option>
                    <option value="Korea">Korea</option>
                    <option value="Taiwan">Taiwan</option>
                </select>
                <br />
                
                <input 
                    type="checkbox" 
                    name="isVegan" 
                    checked={props.data.dietaryRestrictions.isVegan}
                    onChange={props.handleChange} 
                /><label>Vegan</label>
                <input 
                    type="checkbox" 
                    name="isKosher" 
                    checked={props.data.dietaryRestrictions.isKosher}
                    onChange={props.handleChange} 
                /><label>Kosher</label>
                <input 
                    type="checkbox" 
                    name="isLactoseFree" 
                    checked={props.data.dietaryRestrictions.isLactoseFree}
                    onChange={props.handleChange} 
                /><label>Lactose Free</label>
                <br />
                
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restrictions: </p>
            <p>Vegan: {props.data.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.dietaryRestrictions.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free: {props.data.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}</p>
        </main>
    );
}

export default FormComponent;