import React, { useReducer, useRef } from 'react';
import css from './FormSection.module.css';
import ErrorIcon from '../../assests/icon-error.svg';
import Wrapper from '../UI/Wrapper';

const TYPE = {
    FNAME: 'fname',
    LNAME: 'lname',
    EMAIL: 'email',
    PASS: 'pass',
    ALL: 'all'
}

const ReduceHandler = (state, action) => {
    switch (action.type) {
        case TYPE.FNAME:
            return { ...state, fname: action.value };

        case TYPE.LNAME:
            return { ...state, lname: action.value };

        case TYPE.EMAIL:
            return { ...state, email: action.value };

        case TYPE.PASS:
            return { ...state, pass: action.value };

        case TYPE.ALL:
            return { ...action.value};
        default:
            return state;
    }
}

const FormSection = (props) => {


    const FName = useRef('');
    const LName = useRef('');
    const Email = useRef('');
    const Pass = useRef('');

    const [state, dispatch] = useReducer(ReduceHandler, { fname: true, lname: true, email: true, pass: true });

    const SubmitHandler = (e) => {
        let validRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        dispatch({ type: TYPE.ALL, value: {fname: FName.current.value.length > 0, lname: LName.current.value.length > 0, email: Email.current.value.match(validRegex), pass: Pass.current.value.length > 0} })
        if (!(FName.current.value.length > 0 && LName.current.value.length > 0 && Email.current.value.match(validRegex) && Pass.current.value.length > 0)){
            e.preventDefault();
        }
    }

    return (
        <section className={css.FormSection}>
                <p className={css.MsgBox}><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
                <form action="/" className={css.Form}>

                    <Wrapper Style={css.InputWrapper}>
                        <input type="text" className={`${css.Input} ${state.fname ? '' : css.Danger}`} ref={FName} placeholder={state.fname ? "First Name" : FName.current.value } />
                        {state.fname ?
                            null :
                            <>
                                <img src={ErrorIcon} alt="error occured" />
                                <p><em>First Name cannot be empty</em></p>
                            </>
                        }
                    </Wrapper>

                    <Wrapper Style={css.InputWrapper}>
                        <input type="text" className={`${css.Input} ${state.lname ? '' : css.Danger}`} ref={LName} placeholder={state.lname ? "Last Name" : LName.current.value } />
                        {state.lname ?
                            null :
                            <>
                                <img src={ErrorIcon} alt="error occured" />
                                <p><em>Last Name cannot be empty</em></p>
                            </>
                        }
                    </Wrapper>

                    <Wrapper Style={css.InputWrapper}>
                        <input type="email" className={`${css.Input} ${state.email ?  '' : css.Danger } ${state.email ?  '' : css.DangerEmail }`} ref={Email} placeholder={state.email ? "Email Address" : Email.current.value } />
                        {state.email ?
                            null :
                            <>
                                <img src={ErrorIcon} alt="error occured" />
                                <p><em>Looks like this is not an email</em></p>
                            </>
                        }
                    </Wrapper>

                    <Wrapper Style={css.InputWrapper}>
                        <input type="password" className={`${css.Input} ${state.pass ? '' : css.Danger}`} ref={Pass} placeholder={state.pass ? "Password" : Pass.current.value } />
                        {state.pass ?
                            null :
                            <>
                                <img src={ErrorIcon} alt="error occured" />
                                <p><em>Password cannot be empty</em></p>
                            </>
                        }
                    </Wrapper>

                    <button onClick={SubmitHandler}>Claim your free trail</button>
                    <p className={css.TermAndCondition}>By clicking the button, you are agreeing to our <span><strong>Terms and Services</strong></span></p>
                </form>
        </section>
    );
}

export default FormSection;