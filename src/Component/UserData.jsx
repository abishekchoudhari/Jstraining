///rafce - shortcut to create function
import React, { useState } from 'react'

const UserData = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [users, setUsers] = useState([]);


    const addUser = () => {
        setUsers([...users, {name, email, password}]);
    };


  return (
    <div className='UserData'>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> <br/>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/> <br />
        <button onClick={addUser}>Add user</button> <br />

        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => {
                        return(
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                            </tr>
                        );
                    })
                }
            </tbody>

        </table>
    </div>
  )
}

export default UserData