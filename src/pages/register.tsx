import { useState } from 'react'
import { useRouter } from 'next/router';

export let token:string


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<any>(null);
  const router = useRouter();

  const submitUser = async(e: any) => {
    e.preventDefault();     const response = await fetch('http://localhost/api/register', {
      method: "POST",
      body: JSON.stringify({name: name, email: email, password: password}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()

    token = data.token
    console.log(token)
    console.log(data);
    if (data.errors) {
      setErrors(data.errors)
    } else {
      router.push('/')
    }


  }

  return (
      <>
          <form onSubmit={submitUser}>
              <div className="mb-4">
                  <label>Name:</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                  {errors && (
                      <p>{errors.name.toString()}</p>
                  )   
                  }
              </div>
              <div className="mb-4">
                  <label>Email:</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  {errors && (
                      <p>{errors.email.toString()}</p>
                  )   
                  }
              </div>
              <div className="mb-4">
                  <label>Password: </label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  {errors && (
                      <p>{errors.password.toString()}</p>
                  )   
                  }
              </div>
          <input className="bg-blue-400" type="submit"/>
          </form>
      </>
  )
}