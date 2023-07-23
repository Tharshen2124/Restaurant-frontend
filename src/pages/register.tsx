import LabelForms from '@/components/atoms/label'
import { Title } from '@/components/atoms/registerTitle'
import axios from 'axios'
import { useState } from 'react'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitUser = async(e: any) => {
      e.preventDefault(); //! what is this for
     
      const response = await fetch('http://localhost/api/v1/register', {
        method: "POST",
        body: JSON.stringify({name: name, email: email, password: password}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      console.log(data);
    }

    return (
        <>
          <div className="container mx-auto py-8">
              <Title name="Register"/>
              <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={submitUser}>
                <div className="mb-4">
                  <LabelForms htmlFor="name" name="Name"/>
                  <input 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="text" 
                    value={name} 
                    placeholder="John Doe"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <LabelForms htmlFor="email" name="Email"/>
                  <input 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" 
                    type="email" 
                    value={email} 
                    placeholder="john@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <LabelForms htmlFor="password" name="Password"/>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"  
                    type="password" 
                    value={password} 
                    placeholder="********"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <LabelForms htmlFor="confirm-password" name="Confirm Password" />
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" 
                    type="password" 
                    value={confirmPassword} 
                    placeholder="********"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button 
                  className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                  type="submit" 
                  name="Register"
                />
              </form>
            </div>
        </>
    )
}