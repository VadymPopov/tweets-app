import { List } from "./CardList.styled";
import Card from "../Card";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllUsers, selectFilter } from "redux/selectors";
import { useUsers } from "hooks/useUsers";

const ContactList =  ()=> {
    const filter = useSelector(selectFilter);
    const usersFromLocal = JSON.parse(localStorage.getItem('users'));
    const data = useUsers();

    const filterSwitcher = ()=>{
        switch (filter) {
            case '':
                return data;
             case 'follow':
                return usersFromLocal.filter(user => user.followed === false);
             case 'following':
                return usersFromLocal.filter(user => user.followed === true);
                case 'all':
                return usersFromLocal;
            default:
                return data;
        }
    }

    const users = filterSwitcher();
    const usersAll = useSelector(selectAllUsers);

    useEffect(() => {
        if(!usersAll){
            return
        }
    const usersMapped = usersAll.map(user=>{return {...user, followed: false}});
    const localeStorageUsers = localStorage.getItem('users')

    if(localeStorageUsers) {
        return
    }

    localStorage.setItem('users', JSON.stringify(usersMapped));
}, [usersAll]);

    return (
        <List>
            {users.map(({id, avatar, tweets, followers})=>
            <Card key={id} avatar={avatar} tweets={tweets} followers={followers} id={id}>
            </Card>
            )}
        </List>
    );
};

export default ContactList;