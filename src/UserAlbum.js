import React from 'react'

const UserAlbum = ({albums, albumClick, gotoUser} ) => {
    console.log(albums)
    return (
        <div>
            {albums.map((el)=> (
            <div key = {el.id}>
                <ul>
                    <h3 className = 'listCard'> Albums : {el.title}</h3>
                    <button  onClick = {() => albumClick(el)} >albumClick</button>
                </ul>
            
                </div>) )}
            
            <button onClick = {() => gotoUser()}>userClick</button>
            
        </div>
    )
}

export default UserAlbum
