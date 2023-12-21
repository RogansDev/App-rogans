import React, { useState } from 'react'
import { ApiRogans } from '../../../../Data/source/remote/api/ApiRogans';

const RegisterViewModel = () => {

 const [ values, setValues ] = useState({
    name: '',
    phone: '',
    email: '',
    lastname: '',
    document: '',
    password: '',
    ConfirmPassword: '',
    birthdate: '',
 });

 const onChange = (property: string, value: any) => {
    setValues({...values, [property]: value })
 }

 const register = async () => {
    try {
        const response = await ApiRogans.post('/users/create', values);
        console.log('RESPONSE' + JSON.stringify(response));
    } catch (error) {
        console.log('Error' + error)
    }
 }

  return {...values, onChange, register}
}

export default RegisterViewModel;
