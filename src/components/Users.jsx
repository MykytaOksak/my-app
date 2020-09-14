import React from 'react';
import '../style/main.scss';
import Preloader from './Preloader';

const RenderUser = ({ isFetching, name, email, phone, position, photo }) => {
    if(isFetching) {
        return <Preloader/>
    }    
    else {
        return <>
            <div className='userCard'>
                <img src={photo} alt='user_photo'></img>
                <h2>{name}</h2>
                <p>{position}</p>
                <p className='tooltip'>
                    {email}
                    <p className='tooltiptext'>{email}</p>
                </p>
                <p>{phone}</p>
            </div>
        </>
    }
}

const Users = props => {
    const getUsers = () => {
        props.updateNextUrl()
    }
    const users = props.users.map(user => (
        <RenderUser
            isFetching={props.isFetching}
            name={user.name}
            email={user.email}
            phone={user.phone}
            position={user.position}
            photo={user.photo}
        />
    ))

    return (
        <div className='users'>
            <div className='container'>
                <div className='textBlock'>
                    <h1>Our cheerful users</h1>
                    <p>Attention! Sorting users by registration date</p>
                </div>
                <div className='usersList'>
                    {users}
                </div>
                <button onClick={getUsers}>Show more</button>
            </div>
        </div>
    )
}
export default Users