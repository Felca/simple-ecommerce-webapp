import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const navigate = useNavigate();

    const user = { email, password };

    localStorage.setItem("users", JSON.stringify(user));

    alert("Log in successfull!");
    navigate("/dashboard");
  };

  return (
    <>
      <div className="-m-8 min-h-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-lg p-8">
          <div className="flex justify-between">
            <h1>Login</h1>
            <Link to={"/dashboard"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-x-icon lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </Link>
          </div>

          <div className="max-w-2xl py-10">
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              {/* username */}
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="enter email..."
                  className="inline border-2 p-1.5"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              {/* password */}
              <div className="flex flex-col md:flex-row  justify-between md:items-center">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="enter password..."
                  className="inline border-2 p-1.5"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>

              {/* submit button */}
              <div className="flex justify-end">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
