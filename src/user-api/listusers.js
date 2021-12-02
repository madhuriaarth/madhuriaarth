import React, { useEffect, useState} from 'react'
import Loading from '../Loading'
import UserProfile from '../UserProfile'
import UserAlbum from '../UserAlbum'
import UserPhoto from '../UserPhoto'

function Listusers(){
    const [isLoaded, setIsLoaded] = React.useState('Idle')
    const [userId,setUserId]= useState(1)
    
    const [pathNavigation , setPathNavigation] = useState('users')
    const [users, setUsers] = React.useState([])
    const [error, setError] = React.useState(null)
    const [address, setAddress] = React.useState([])
    const [albums, setAlbums] = React.useState([])
    const [photos, setPhotos] = React.useState([])
    
    const loadData = async () => {
       
        setIsLoaded('loading')
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
    const JsonData = await result.json()
    // console.log(JsonData)
    setUsers(JsonData)
    setIsLoaded('success')
    setAddress(users.address)
    setError(error)
};
    useEffect(() =>{loadData()}, [])

      const fetchalbumData = async () => {
        // console.log(userId)
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
    const JsonData = await result.json()
    // console.log(JsonData)
    setAlbums(JsonData)
    // console.log(JsonData)
   
    // setIsLoaded('success')
    // setAddress(users.address)
    // setError(error)
};
    useEffect(() =>{fetchalbumData()}, [userId])
    const fetchphotoData = async () => {

       
            
    const result = await fetch(`https://jsonplaceholder.typicode.com/albums/${userId}/photos`)
    const JsonData = await result.json()
    // console.log(JsonData)
    setPhotos(JsonData)
    // setIsLoaded('success')
   
    // setAddress(users.address)
    // setError(error)
   
};
    useEffect(() =>{fetchphotoData()}, [userId])
    const handleClick =  (el) => {
        
        setPathNavigation('albums')
        // console.log(el.id)
        setUserId(el.id)
    }
    const albumClick = (el) => {
        setUserId(el.id)
        setPathNavigation('photos')
        // setUserId(el.id)
    }
    const photoClick = (el) => {
        setPathNavigation('albums')
    }
    const gotoUser = (el) => {
        setPathNavigation('users')
    }
    

     


    return(
        <div >
            {/* {Details}
            {userProfile} */}
            {isLoaded === 'loading' && <Loading/> }
            {
                pathNavigation==='users' && <UserProfile users = {users} handleClick={handleClick} />
            }

{
                pathNavigation==='albums' && <UserAlbum albums = {albums} albumClick ={albumClick} gotoUser = {gotoUser} />
            }


{
                pathNavigation==='photos' && <UserPhoto photos = {photos} photoClick = {photoClick} />
            }
            
            {/* {pathNavigation === 'albums' && <UserAlbum users = {users} albumClick = {albumClick}/>} */}
            
            <div>
                    {/* <ul>
                        <li><h4>{setUser.name}</h4></li>
                        <li><h4>{details.username}</h4></li>
                        <li><h4>{details.email}</h4></li>
                        <li><h4>{details.phone}</h4></li>
                    </ul> */}
                    
                </div>
        </div>
    )
            }
export default Listusers


