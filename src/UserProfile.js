import React from 'react'

const UserProfile = ({users, handleClick}) => {
    return (
        <div>
            { users.map((user) => 
                <div key = {user.id}>
                    {/* <div onClick = {() => getUserDetails(i)}> */}
                         <ul>
                             <h3 className = "username">User : {user.id}</h3>
                             
                                <b className = 'listCards' > userName: {user.name}</b>
                                <h5>
                                    <u className = 'listCards' >Address: </u>
                                
                                        <b className = 'listCards' >street :{user.address.street}</b>,  
                                        <b className = 'listCards' >suite :  {user.address.suite}</b>,
                                        <b className = 'listCards' >city :  {user.address.city}</b>, 
                                        <b className = 'listCards' >zipcode :  {user.address.zipcode}</b>
                                    
                                </h5>
                         </ul>
                         <button  onClick = {() => handleClick(user)} >Clickme!</button>
                    {/* </div> */}
                       
                    </div>)
    }
        </div>
    )
}

export default UserProfile
