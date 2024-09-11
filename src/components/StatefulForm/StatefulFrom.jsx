import { useState } from "react";

const StatefulFrom = () => {
  const [name, setName] = useState('Rahman');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (password.length < 6) {
      setError('password must be 6 characters or longer')
    }
    else {
      setError('')
      console.log(name, email, password)
    }
  }

  const handleNameChange = e => {
    setName(e.target.value)
  }
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleNameChange} type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" />
        <br />
        <input onChange={handlePasswordChange} type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
        <br />
          {
            password && <p>{error}</p>
          }
      </form>
    </div>
  );
};

export default StatefulFrom;