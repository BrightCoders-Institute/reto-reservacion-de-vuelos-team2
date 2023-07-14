import {useState} from 'react';

export const useEmailPassValidation = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [errorEmailText, setErrorEmailText] = useState('');
  const [errorPwText, setErrorPwText] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleFieldValidation = (name, userInput) => {
    let regEx = '';

    if (name === 'email') {
      regEx = emailRegex;
      const isValid = regEx.test(userInput);

      isValid
        ? setErrorEmailText('')
        : setErrorEmailText('Please enter a valid email.');
      setIsEmailValid(isValid);
    } else if (name === 'password') {
      regEx = passwordRegex;
      const isValid = regEx.test(userInput);

      isValid ? setErrorPwText('') : setErrorPwText('Invalid password.');
      setIsPasswordValid(isValid);
    }
  };

  return {
    isEmailValid,
    isPasswordValid,
    errorEmailText,
    errorPwText,
    setIsEmailValid,
    setIsPasswordValid,
    handleFieldValidation,
    setErrorEmailText,
    setErrorPwText,
  };
};
