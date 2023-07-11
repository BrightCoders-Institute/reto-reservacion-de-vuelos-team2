import { useState } from 'react';

export const useEmailPassValidation = () => {
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleFieldValidation = (name, userInput) => {
        let regEx = '';

        if(name === 'email') {
            regEx = emailRegex;
            const isValid = regEx.test(userInput);
            setIsEmailValid(isValid);
        } else if(name === 'password') {
            regEx = passwordRegex;
            const isValid = regEx.test(userInput);
            setIsPasswordValid(isValid);
        }
    };

    return {
        isEmailValid,
        isPasswordValid,
        setIsEmailValid,
        setIsPasswordValid,
        handleFieldValidation
    };
};