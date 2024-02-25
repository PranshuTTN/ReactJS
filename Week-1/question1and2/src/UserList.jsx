import { useState } from 'react';


function UserList(params) {
    const [user, setUser] = useState('');
    const [list, setList] = useState([]);

    const newUser = () => {
        if (user !== '') {
            setList(prevList => [...prevList, user]);
            setUser('');
        }
    }

    return (
        <>
            <label htmlFor="newUser">To add new User to List</label>
            <input type="text" name="newUser" value={user} 
            onChange={(e) => setUser(e.target.value)}/>
            <br />
            <button onClick={newUser}>Add new User</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default UserList;