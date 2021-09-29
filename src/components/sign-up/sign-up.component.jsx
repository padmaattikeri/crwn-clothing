import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
        }
    }


    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert(`Passwords don't match`);
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            createUserProfileDocument(user, {displayName});

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
            
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type = 'text'
                        name = 'displayName'
                        value = {this.state.displayName}
                        onChange={this.handleChange}
                        label = 'Display Name'
                        required
                    />
                    
                    <FormInput
                        type = 'text'
                        name = 'email'
                        value = {this.state.email}
                        onChange={this.handleChange}
                        label = 'Email'
                        required
                    />

                    <FormInput
                        type = 'text'
                        name = 'password'
                        value = {this.state.password}
                        onChange={this.handleChange}
                        label = 'Password'
                        required
                    />

                    <FormInput
                        type = 'text'
                        name = 'confirmPassword'
                        value = {this.state.confirmPassword}
                        onChange={this.handleChange}
                        label = 'Confirm Password'
                        required
                    />

                    <CustomButton type = 'submit'> SIGN UP </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;