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
          <div className="bg-white w-96 px-5 py-7">
            <div className="mb-4">
                <label>Name:</label>
                <p>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="outline-1 w-full py-1"
                  />
                </p>
                {errors && errors.name && (
                    <p>{errors.name.toString()}</p>
                )   
                }
            </div>
            <div className="mb-4">
                <label>Email:</label>
                <p>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </p>
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
            <input 
              className="bg-blue-500 w-full rounded-md py-2 text-white" 
              type="submit"
            />
          </div>
        
        </form>
      </>      
  )
}