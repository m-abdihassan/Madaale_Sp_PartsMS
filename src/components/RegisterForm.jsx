import React, { useState } from 'react'
import axios from "axios";
const Register = () => {
  const[username,setusername]=useState("");
const[email,setemail]=useState("");
const[password,setpassword]=useState("");
async function save(event){

  event.preventDefault();
  try{await axios.post("http://localhost:8080/api/Users/save",{
    
  username:username,
  email:email,
  password:password,});
  alert("User Registration succesful");
  }catch(err)
  {alert("error occur");

  }
}







  return (
    <div>
      <div class="container mt-4">
      <div class="card">
       <h1> user registeration </h1>
<form>
 <div class="form-group">
  <label>Username </label>
  <input type="text" class="form-control" id="username" placeholder="enter user" 
  value={username}
  onChange={(event)=>{setusername(event.target.value)}}
  />
</div>
{/* //email */}
<div class="form-group">
  <label>Email </label>
  <input type="Email" class="form-control" id="email" placeholder="enter Email" 
  value={email}
  onChange={(event)=>{setemail(event.target.value)}}
  />
</div>

{/* paas */}
<div class="form-group">
  <label>password </label>
  <input type="password" class="form-control" id="password" placeholder="enter password" 
  value={password}
  onChange={(event)=>{setpassword(event.target.value)}}
  />
</div>
  <button type='submit' className='btn btn-primary mt-4' onClick={save}>Save</button>
</form>
</div>
</div>

    </div>
  )
}

export default Register
