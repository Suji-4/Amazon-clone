import amazon from "../assets/images/amazon.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom"; 

function Account() {
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleContinue = () => {
        if (name && mobileNumber && password) {
            setMessage("Account created");
        } else {
            setMessage("Fill the blank ");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="w-28">
                <img src={amazon} alt="amazon" className="py-4" />
            </div>
            <div className="border py-10 p-5">
                <p className="font-semibold text-2xl">Create Account</p>
                <p className="font-semibold py-3">Your name</p>
                <input type="text"className="border border-black w-72"   placeholder="First and last name"   value={name} onChange={(e) => setName(e.target.value)}   /><br />
                <p className="font-semibold py-3">Mobile number</p>
                <input type="text" className="border border-black w-72"  placeholder="Mobile number" value={mobileNumber}  onChange={(e) => setMobileNumber(e.target.value)}/><br />
                <p className="font-semibold py-3">Password</p>
                <input type="password"  className="border border-black w-72" placeholder="At least 6 characters" value={password}  onChange={(e) => setPassword(e.target.value)}/><br />
                <p className="text-sm my-4">Passwords must be at least 6 characters.</p>
                <button className="bg-yellow-300 px-28 py-1 my-3 rounded-full"onClick={handleContinue}  >  Continue </button>

                {message && <p className="text-red-500 mt-2">{message}</p>}

                <hr style={{ border: "1px solid grey", margin: "20px", width: "250px" }} />
                <p className="text-sm my-4">
                    Already have an account? <Link to="/signin" className="text-cyan-700 underline">Sign in</Link>
                </p>
                <p className="text-sm">By creating an account or logging in,</p>
                <p className="text-sm">you agree to Amazon's <span className="text-cyan-700 underline hover:text-red-400">Condition of</span></p>
                <p className="text-sm text-cyan-700 underline hover:text-red-400">Use <span className="text-black">and </span>Privacy Notice.</p>
            </div>
            <div className="flex items-center py-2"></div>

            <hr style={{ border: "1px solid grey", margin: "20px", width: "1200px" }} />
            <div className="flex gap-5 text-sm text-cyan-700 underline">
                <p className="hover:text-red-400">Condition of use</p>
                <p className="hover:text-red-400">Privacy Note</p>
                <p className="hover:text-red-400">Help</p>
            </div>
            <p className="text-sm my-4">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
    );
}

export default Account;
