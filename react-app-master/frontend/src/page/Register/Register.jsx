import React, {useState} from "react";
import { User, Fingerprint, Mail } from "lucide-react";
import { useNavigate } from "react-router";
import "./register.css";
import { registerfunction } from "../../services/apis"

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Register button clicked");
    try {
      console.log("Register");
      const response = await registerfunction(username, email, password);

      console.log(response);
      navigate("/")
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
    <span className="centering">
      <form className="my-form">
        <span className="login-welcome-row">
          <h1>Login Form</h1>
          <h4>Welcome to Login Form</h4>
        </span>
        <div className="text-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Your Username"
            required
            value={username} onChange={(e) => setUsername(e.target.value)}
          />
          <User color="#3574F2" strokeWidth={1.5} />
        </div>
        <div className="text-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Your email"
            required
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <Mail color="#3574F2" />
        </div>
        <div className="text-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Your password"
            required
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <Fingerprint color="#3574F2" strokeWidth={1.5} />
        </div>
        <div className="login-button">
          <input type="submit" value="Login" name="submit" className="my-form__button"  onClick={handleClick} />
        </div>
      </form>
    </span>
  </div>
  );
}

export default Register;
