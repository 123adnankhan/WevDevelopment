import React, { useState } from 'react'

const App = () => {
  // const[firstName,setFirstName]=useState("");
  // const[lastName,setLastName]=useState("");
  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstNameHandler(event){
  //   // event.target karne se us particular element ko show kar rahe hote
  //   console.log("printing first name")
  //   setFirstName(event.target.value);

  // }
  // function changelastNameHandler(event){
  //   console.log("printing last name");
  //   setLastName(event.target.value);
  // }
  const[formData,setFormData]=useState(
   {
    firstName:"",
    lastName:"",
    email:"",
    comments:"",
    isVisible:true,
    mode:"",
    favCar:""
   }
  );
  
  function changeHandler(event){
      // destructuring
    const{name,type,value,checked}=event.target;
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        // yahi syntax hai ,no puchna iske bare mein 
        //[event.target.name]=event.target.value
       [name] : type === "checkbox" ? checked : value 

      }
    });
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("finally printing entire form ka data");
    console.log(formData);
  }
  return (
    <div className='App'>
       <form onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='first name'
            onChange={changeHandler}
            name='firstName'
            // ye wala input apni state maintain kar raha kyunki yaha value padi hai 
            value={formData.firstName}
          />
          <br/>
          <br/>
          <input
            type='text'
            placeholder='last name'
            onChange={changeHandler}
            name='lastName'
            value={formData.lastName}

          />
         
          <br/>
          <br/>

          <input
            type='email'
            placeholder='enter your email here...'
            onChange={changeHandler}
            name='email'
            // ye wala input apni state maintain kar raha kyunki yaha value padi hai 
            value={FormData.email}
          />
          <br/><br/>
          <textarea
          placeholder='enter your comments here'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}/>

          <br/><br/>
          <input
            type='checkbox'
            id='isVisible'
            onChange={changeHandler}
            name='isVisible'
            checked={formData.isVisible}
          />
          <label form='isVisible'>Am i Visible ?</label>
          <br/><br/>
          <fieldset>
            <legend>Mode:</legend>
            <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="Online-mode"
            id="Online-mode"
            checked={formData.mode ==="Online-mode"}
          />
          <label form='Online-mode'>Online Mode </label>
          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="Offline-mode"
            id="Offline-mode"
            checked={formData.mode ==="Offline-mode"}
            
          />
          <label form='Offline-mode'>Offline Mode</label>
          </fieldset>
          <label for="favCar">Tell me your fav Car </label>
          <select
          name='favCar'
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}
          >
            <option value="scarpio">Scarpio</option>
            <option value="tharr">Tharr</option>
            <option value="legender">Legender</option>
            <option value="honda">Honda</option>
            <option value="ferrari">Ferrari</option>
          </select>
          <br/><br/>
          <button >Submit</button>
       </form>
    </div>
  
  )
}

export default App