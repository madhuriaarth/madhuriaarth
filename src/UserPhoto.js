import React from 'react'

function UserPhoto({photos, photoClick}) {
    
    console.log(photos[0].url)
    return (
        <div>
        {photos.map((el) =>
        <div key = {el.id}>
            <img alt={'madhuri'} width={200} src={el.url}  />
            </div> )}
        <button onClick = {() => photoClick()}>go to album</button>
    </div>
    )
}

export default UserPhoto
