import { useState } from "react";
import Logo from "@assets/logo.png";
import { axiosInstance } from "@utils";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    axiosInstance
      .post("https://frontend-take-home-service.fetch.com/auth/login", {
        name,
        email,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* Logo */}
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="Dog Logo" />
        <h2 className="text-white text-2xl m-3 uppercase">We all love dogs!</h2>
      </div>
      {/* Login Form */}
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
