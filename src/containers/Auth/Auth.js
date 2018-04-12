import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    password: true
                },
                valid: false,
                touched: false
            }
        }
    }

    checkValidity(value, rules) {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.email) {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = emailRegex.test(String(value).toLowerCase()) && isValid;
        }

        if(rules.password) {
            const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
            isValid = passRegex.test(value) && isValid;
        }

        return isValid;
    } 

    inputChangedHandeler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }
        this.setState({ controls: updatedControls });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(
            this.state.controls.email.value,
            this.state.controls.password.value
        );
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        const form = formElementsArray.map(formElem => (
            <Input
                validity={formElem.config.valid}
                touched={formElem.config.touched}
                key={formElem.id}
                elementType={formElem.config.elementType}
                elementConfig={formElem.config.elementConfig}
                value={formElem.config.value}
                changed={(event => this.inputChangedHandeler(event, formElem.id))}
            />
        ))

        let renderForm = <Spinner />;
        let errorMessage = null;

        if(this.props.error) {
            errorMessage = <p className={classes.ErrorMessage} >{this.props.error.message}</p>
        }

        if(!this.props.loading) {
            renderForm = (
                <Fragment>
                    <form className={classes.Form} onSubmit={this.submitHandler}>
                        {errorMessage}
                        {form}
                        <button className={classes.Button} >SIGN IN</button>
                    </form>
                </Fragment>
            )
        }

        let authRedirect = null;

        if(this.props.isAuthenticared) {
            authRedirect = <Redirect to='/' />
        }

        return (
            <div className={classes.Auth}>
                {authRedirect}
                <h3 className={classes.Heading} >SIGN IN</h3>
                {renderForm}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticared: state.auth.token !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);