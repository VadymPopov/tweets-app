import { useVisibleUsers } from "../../hooks/useVisibleUsers";
import { List } from "./CardList.styled";
import Card from "../Card";
import { useState, useEffect } from "react";


const ContactList = () => {
    const users = useVisibleUsers();

    // const [data, setData] = useState(users);

    useEffect(() => {
        const usersMapped = users.map(user=>{return {...user, followed: false}})
    localStorage.setItem('users', JSON.stringify(usersMapped));
}, [users]);

    

    return (
        <List>
            {/* {users.map(({id, avatar, tweets, followers, isFollowed=false})=> */}
              {users.map(({id, avatar, tweets, followers})=>
            // <Card key={id} avatar={avatar} tweets={tweets} followers={followers} id={id} isFollowed={isFollowed}>
            <Card key={id} avatar={avatar} tweets={tweets} followers={followers} id={id}  >
            </Card>
            )}
        </List>
    );
};

export default ContactList;