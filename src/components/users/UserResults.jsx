import React from 'react'
import {useEffect,useState} from 'react'
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
function UserResults() {
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true);

    useEffect(() => {
            fetchUsers();
    },[])

    const fetchUsers = async () => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)
        const data = await res.json();
        console.log(data);
        setUsers(data);
        setLoading(false);
    }

    if(!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ' >
                {users.map((user,index) => (
                    <UserItem key={index} user={user} />
                ))}
                
            </div>
          )
    } else {
        return <Spinner/>
        
    }


  
}

export default UserResults