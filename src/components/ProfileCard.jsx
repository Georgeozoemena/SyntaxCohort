import { useState, useEffect } from "react";

export function ProfileCard(){
    const[user, setUser] = useState([
        {name: "sombili", email: "som@gmail.com"}
    ]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUser([...user, ...data]))
    }, [])

    return(
        <div>{user.map((profile) =>{
            return(
                <div>
                    <div>{profile.name}</div>
                    <div>{profile.email}</div>
                </div>
            );
        })}
        </div>
    );
}

export default ProfileCard;