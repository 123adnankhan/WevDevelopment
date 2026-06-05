import React, { useState } from 'react'

const App = () => {
  const[formData,setFormData]=useState(
    {
      firstName:"",
      lastName:"",
      email:"",
      country:"India",
      streetAddress:"",
      city:"",
      state:"",
      postalCode:"",
      comments:false,
      candidates:false,
      offers:false ,
      pushNotifications:""
    } 
  )
  function changeHandler(event){
    const{name,type,value,checked}=event.target ;
    setFormData((prev)=>(
      {
        ...prev,
        [name]:type === "checkbox" ? checked : value
      }
    ))
  }
  function submitHandler(event){
      event.preventDefault();
      console.log("finally printing the value of form data")
      console.log(formData);
  }
  return (
    <div className='flex flex-col items-center'>
        <form onSubmit={submitHandler}>
            <label htmlFor='firstName'>First Name </label>
            <br/>
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='Adnan'
              value={formData.firstName}
              onChange={changeHandler}
              className='border'
            />
            <br/>
            <label htmlFor='lastName'>Last Name </label>
            <br/>
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Khan'
              value={formData.lastName}
              onChange={changeHandler}
              className='border'
            />
            <br/>
            <label htmlFor='email'>Email</label>
            <br/>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='adnan@abc.com'
              value={formData.email}
              onChange={changeHandler}
              className='border'
            />
            <br/>
            <label htmlFor='country'>country</label>
            <br/>
            <select
              id='country'
              name='country'
              value={formData.country}
              onChange={changeHandler}
              className='outline'
            >
              <option>India</option>
              <option>United States</option>  
              <option>Mexico</option>         
              <option>Canada</option>   
            </select>
            <br/>
            <label htmlFor='streetAddress'>Street Address</label>
            <br/>
            <input
              type='text'
              name='streetAddress'
              id='streetAddress'
              placeholder='B-25C'
              value={formData.streetAddress}
              onChange={changeHandler}
              className='border'
            />

            <br/>
            <label htmlFor='city'>City</label>
            <br/>
            <input
              type='text'
              name='city'
              id='city'
              placeholder='Kanpur'
              value={formData.city}
              onChange={changeHandler}
              className='border'
            />

            <br/>
            <label htmlFor='state'>State</label>
            <br/>
            <input
              type='text'
              name='state'
              id='state'
              placeholder='Uttar Pradesh'
              value={formData.state}
              onChange={changeHandler}
              className='border'
            />

            <br/>
            <label htmlFor='postalCode'>Postal sdgCode</label>
            <br/>
            <input
              type='text'
              name='postalCode'
              id='postalCode'
              placeholder='272189'
              value={formData.postalCode}
              onChange={changeHandler}
              className='border'
            />

              <br/>

            <fieldset>
              <legend>By Email</legend>
                <div className='flex flex-row'>
                  <input type='checkbox'
                  id='comments'
                  name='comments'
                  checked={formData.comments}
                  onChange={changeHandler}
                />
                <div>
                    <label htmlFor='comments'>Comments</label>
                    <p className='opacity-40'>Get notified when someone posts a comment on a posting</p>
                </div>
                </div>
              
                <div className='flex flex-row'>
                    <input type='checkbox'
                    id='candidates'
                    name='candidates'
                    checked={formData.candidates}
                    onChange={changeHandler}
                  />
                  <div>
                      <label htmlFor='candidates' >Candidates</label>
                      <p className='opacity-40'>Get modified when candidates applied for a Job</p>
                  </div>
                </div>
              
                <div className='flex flex-row'>
                  <input type='checkbox'
                  id='offers'
                  name='offers'
                  checked={formData.offers}
                  onChange={changeHandler}
                />
                <div>
                    <label htmlFor='offers'>Offers</label>
                    <p className='opacity-40'>Get notified when a candidates accepts or reject an offer</p>
                </div>
                </div>
            </fieldset>
               <br/>
              <fieldset>
                  <legend>Push Notifications</legend>
                  <p>These are delivered via SMS to your mobile phone</p>

                  <input type='radio'
                         id='pushEverything'
                         name='pushNotifications'
                         value="Everything"
                         onChange={changeHandler}
                  />
                  <label htmlFor='pushEverything'> Everything</label>
                  <br/>
                      <input type='radio'
                         id='pushEmail'
                         name='pushNotification'
                         value="same as Email"
                         onChange={changeHandler}
                  />
                  <label htmlFor='pushEmail'> Same as Email</label>
                      <br/>
                      <input type='radio'
                         id='pushNothing'
                         name='pushNotifications'
                         value="No Push Notifications"
                         onChange={changeHandler}
                  />
                  <label htmlFor='pushNothing'> No Push Notifications</label>
              </fieldset>
              <button className='bg-blue-500 text-white font-bold md-rounded
              py-2 px-4'>Save</button>
        </form>
    </div>
  )
}

export default App