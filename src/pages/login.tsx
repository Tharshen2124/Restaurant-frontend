import { GlobalContext } from "@/context";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>(null);
  const router = useRouter();

  const { setToken, setUsername } = useContext(GlobalContext);

  const submitUser = async (e: any) => {
    e.preventDefault();
    const response = await fetch("http://localhost/api/v1/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    let getToken = data.token;
    let getUsername = data.user.name;
    document.cookie = `token=${data.token}`;
    if (data.errors) {
      setErrors(data.errors);
    } else {
      router.push("/");
      setToken(getToken);
      setUsername(getUsername);
    }
  };

  return (
    <>
      <form onSubmit={submitUser}>
        <div className="bg-white w-[500px] px-20 py-10 mx-auto mt-10 rounded-md">
          <h1 className="text-center text-3xl font-bold mb-10">Login</h1>
          <div className="mb-4">
            <label>Email:</label>
            <p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 outline-1 w-full py-2 border rounded-md focus:outline-blue-300"
              />
            </p>
            {errors && errors.email && <p>{errors.email.toString()}</p>}
          </div>
          <div className="mb-4">
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 outline-1 w-full py-2 border rounded-md focus:outline-blue-300"
            />
            {errors && errors.password && <p>{errors.password.toString()}</p>}
          </div>
          <input
            className="bg-blue-500 w-full rounded-md py-2 text-white"
            type="submit"
          />
        </div>
      </form>
    </>
  );
}
