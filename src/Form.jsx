import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import './form-style.css'
import { useState } from 'react';
import Card from './Card';

function Form(){
    let [name,setName]=useState(null);
    let [surname,setSurname]=useState(null);
    let [phone,setPhone]=useState(null);
    let [email,setEmail]=useState(null);
    let [serh,setSerh]=useState(null);

    function handleSubmit(event){
        event.preventDefault();
        setName(event.target.name.value);
        setSurname(event.target.surname.value);
        setPhone(event.target.phone.value);
        setEmail(event.target.email.value);
        setSerh(event.target.serh.value);
    }

    return(
        <>
            <form className='form' onSubmit={handleSubmit}>
                <label for="name">Name:</label>  
                <input  pattern="[A-Za-z]+" type="text" name='name' placeholder="Adinizi yazin" title='Only letters'required/>
                <label for="surname">Surname:</label>      
                <input pattern="[A-Za-z]+"  title='Only letters' type="text" name='surname' placeholder="Soyadinizi yazin" />
                <label>
                <span>Phone: </span> 
                    <PhoneInput
                 country={'az'}
                 inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true
                  }}
                />
                </label>
                <label for="email"> Email:</label> 
                <input type="email" name='email' placeholder="Emailinizi yazin" />
                <label for='serh'>Serh</label>
                <textarea name="serh" cols="30" rows="10"></textarea>
                <button type='submit'>Submit</button>
            </form>
            <Card name={name} surname={surname} phone={phone} email={email} serh={serh}/>
        </>
    )
}

export default Form;