import React, {useState, useEffect} from 'react';
import './App.css';
import User from './Components/User';


function App() {

    const [users, setUsers] = useState([]);

    console.log(users);

    useEffect(() => {
      fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(users => setUsers(users))
    }, []);
    console.log(users);

  return (
    <div className="App">
      <h1>Users</h1>
      {users.map((user, index) => <User key={index} id={user.id} username={user.username}/>)}
    </div>
  );
}

export default App;
