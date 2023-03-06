import React from 'react'
import {useEffect,useState} from 'react'

function UserResults() {
    const [users,setUsers] = useState([])
    const [loading,isLoading] = useState(true);



    useEffect(() => {
       fetchUsers();
    },[])

    const fetchUsers = async () => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
            headers : {
                Authorization : `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
        const data = await res.json();
        console.log(data);
    }


  return (
    <div>
        UserResults
        {process.env.REACT_APP_GITHUB_URL}
    </div>
  )
}

export default UserResults