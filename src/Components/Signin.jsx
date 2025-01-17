import amazon from "../assets/images/amazon.jpeg";
import {Link} from "react-router-dom"
import React, { useState } from 'react';
function Signin()
{
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSignin = () => {
      if (email === '') {
        setMessage('Please enter an email or mobile phone number.');
      } else {
        setMessage('Sign in successfully.');
      }
    };
  
    const handleCreateAccount = () => {
    
      setMessage('Account Created');
    };
    return(
        <div className="flex flex-col items-center justify-center cursor-pointer">
  <div className="w-28">
    <img src={amazon} alt="amazon"className="py-4" />
  </div>
        <div className="border py-10 p-5" >
            <p className="font-semibold text-2xl">Sign in</p>
            <p className="font-semibold py-3">Email or mobile phone number</p>
            <input  type="text"  value={email} onChange={(e) => setEmail(e.target.value)} className="border border-black  w-72"></input><br></br>
            <button onClick={handleSignin} className="bg-yellow-300 px-28 py-1 my-3 rounded-full">Continue</button>
            <p className="text-sm">By continue,you agree to Amazon's<span className="text-cyan-700 underline hover:text-red-400"> Condition of</span></p>
            <p className="text-sm text-cyan-700 underline hover:text-red-400 ">Use <span className="text-black">and </span>Privacy Notice.</p>
            <p  className="text-sm text-cyan-700 underline hover:text-red-400 my-2">Forgert Password</p>
        </div>
        <div className="flex items-center py-2">
 
</div>
             <p className="py-2 text-sm text-gray-400">----------New to Amazon?-----------</p>
            <button   onClick={handleCreateAccount} className="p-1 px-11 border border-black rounded-full text-sm" ><Link to="/account">Create your Amazon Account </Link></button>
           
            <hr style={{ border: "1px solid grey", margin: "20px" ,width:"1200px"}} />
            <div className="flex gap-5 text-sm  text-cyan-700 underline">
             <p className=" hover:text-red-400">Condition of use</p> 
             <p className=" hover:text-red-400">Privacy Note</p>
             <p className=" hover:text-red-400">Help</p>
             </div>
             <p className="text-sm my-4">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
             {message && <p className="text-green-500">{message}</p>}

           
        </div>
        
        

    )
}
export default Signin