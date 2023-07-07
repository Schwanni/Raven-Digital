import React from 'react'
import Button from './Button'
import { ContactData } from '../constants'

const Contacts = () => {

  function sendMessage() {
    if (document.getElementById("input-name").value.length < 3 ) {
      window.alert("Please enter your Name")
      return;
    }
    if (document.getElementById("input-lastname").value.length < 3 ) {
      window.alert("Please enter your Lastname")
      return;
    }
    if (document.getElementById("input-email").value.length < 3 ) {
      window.alert("Please enter your Email")
      return;
    }
    if (document.getElementById("input-message").value.length < 3 ) {
      window.alert("Please enter your Message")
      return;
    }
    
    else {document.getElementById("input-name").value = "";
    document.getElementById("input-lastname").value = "";
    document.getElementById("input-email").value = "";
    document.getElementById("input-message").value = "";
    window.alert("Message send succesful.")}
    
  };

  return (
    <section id="contacts" className='my-32'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-white text-5xl font-medium my-16'>Contact us</h2>
        <div className='flex flex-col gap-8 sm:flex-row justify-between w-3/4 lg:w-1/2'>
          <div className='flex flex-col'>
            <label htmlFor="input-name" className='text-white my-2'>Name</label>
            <input type='text' name='input-name' id="input-name" placeholder='Name here' className='bg-[#0C1117] border-b-2 border-[#536A82] text-white my-2 ' ></input>
            <label htmlFor="input-lastname" className='text-white my-2'>Lastname</label>
            <input type='text' name='input-lastname' id="input-lastname" placeholder='Last name here' className='bg-[#0C1117] border-b-2 border-[#536A82] text-white my-2 ' ></input>
            <label htmlFor="input-email" className='text-white my-2'>Email</label>
            <input type='email' name='input-email' id="input-email" placeholder='Example@mail.com' className='bg-[#0C1117] border-b-2 border-[#536A82] text-white my-2 ' ></input>
            <label htmlFor="input-message" className='text-white my-2'>Message</label>
            <input type='text' name='input-message' id="input-message" placeholder='Message here' className='bg-[#0C1117] border-b-2 border-[#536A82] text-white my-2 ' ></input>
            <Button title={"Send message"} css={"mt-8"} type={"submit"} onClick={sendMessage} />
          </div>
          <div className='flex flex-col'>
            
            <span className='flex items-center gap-4 mb-4'><img src={ContactData[0].phoneImg} alt={ContactData[0].phoneAlt} /><h3 className='text-white'>Mobile number</h3></span>
            <span className='flex gap-4 my-2'> <p className='text-white'>{ContactData[0].phonenumber1}</p><Button title={"Call"} css={"text-[13px] w-[100px] h-[30px] "} /></span>
            <span className='flex gap-4 my-2'> <p className='text-white'>{ContactData[0].phonenumber2}</p><Button title={"Call"} css={"text-[13px] w-[100px] h-[30px] "} /></span>
            <span className='flex items-center gap-4 my-4'><img src={ContactData[0].emailImg} alt={ContactData[0].emailAlt} /><h3 className='text-white'>E-mail</h3></span>
            <span className='text-white'>{ContactData[0].email}</span>
            <span className='flex items-center gap-4 my-4'><img src={ContactData[0].adressImg} alt={ContactData[0].adressAlt} /><h3 className='text-white'>Adress</h3></span>
            <span className='text-white'>{ContactData[0].adress}</span>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts