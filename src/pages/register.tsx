import { GlobalContext } from '@/context';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<any>(null);
  const router = useRouter();
  
  const { setToken, setUsername } = useContext(GlobalContext);

  const submitUser = async(e: any) => {
    
    e.preventDefault();     
    const response = await fetch('http://localhost/api/v1/register', {
      method: "POST",
      body: JSON.stringify({name: name, email: email, password: password, }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    let getToken = data.token
    let getUsername = data.user.name;

    if (data.errors) {
      setErrors(data.errors)
    } else {
      router.push('/')
      setToken(getToken)
      setUsername(getUsername)     
    }
  }

  return (
      <>
        <form onSubmit={submitUser}>
            <div className="mb-4">
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                {errors && errors.name && (
                    <p>{errors.name.toString()}</p>
                )   
                }
            </div>
            <div className="mb-4">
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                {errors && errors.email && (
                    <p>{errors.email.toString()}</p>
                )   
                }
            </div>
            <div className="mb-4">
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {errors && errors.password && (
                    <p>{errors.password.toString()}</p>
                )   
                }
            </div>
        <input className="bg-blue-400" type="submit"/>
        </form>
      </>      
  )
}