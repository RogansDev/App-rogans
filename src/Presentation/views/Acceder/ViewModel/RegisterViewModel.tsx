import React, { useState } from 'react'

const RegisterViewModel = () => {

 const [ values, setValues ] = useState({
    names: '',
    phone: '',
    email: '',
    document: '',
    password: '',
    ConfirmPassword: '',
    birthdate: '',
    selectValue: '',
    selectedDate: '',
 });

 const onChange = (property: string, value: any) => {
    setValues({...values, [property]: value })
 }

  return {...values, onChange}
}

export default RegisterViewModel;
