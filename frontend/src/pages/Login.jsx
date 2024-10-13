import React, { useState } from 'react';
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

function Login() {

  const navigate = useNavigate();
  // State to handle form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle input change
  const onHandleChangeEmail = (e) =>{
    const input = e.target.value;
    setEmail(input);
  }

  const onHandleChangePassword = (e) =>{
  const input = e.target.value;
  setPassword(input);
 }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Done");
    Swal.fire({
      icon: 'success',  // This sets the success icon
      title: 'Success!',
      text: 'Your action was successful!',
      showConfirmButton: true,  // To show a confirmation button
      timer: 3000  // Optional: auto-close after 3 seconds
    }).then(() => {
      // Redirect to homepage using React Router after SweetAlert closes
      navigate('/');  // Redirect to home page
    });

    // Here, you can send formData to the backend for login
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onHandleChangeEmail}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onHandleChangePassword}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
