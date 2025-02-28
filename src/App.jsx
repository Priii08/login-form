import { useState } from "react";
import "./App.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validDomains = ["gmail.com", "outlook.com", "yahoo.com"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const domain = email.split("@")[1];
    if (!validDomains.includes(domain)) {
      setError("Only Gmail, Outlook, or Yahoo emails are allowed.");
      return;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }
    if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(password) || password.length < 6) {
      setError("Password must be at least 6 characters long, contain an uppercase letter, and a special character.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    alert("Login Successful!");
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2 className="title">Login Form</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>EMAIL</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>PHONE NUMBER</label>
            <input type="text" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>PASSWORD</label>
            <div className="password-container">
              <input type={showPassword ? "text" : "password"} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <span className="toggle-password inside" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>
          <div className="input-group">
            <label>CONFIRM PASSWORD</label>
            <div className="password-container">
              <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              <span className="toggle-password inside" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>
          <button type="submit" className="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
}