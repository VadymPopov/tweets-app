import { useVisibleUsers } from "../../hooks/useVisibleUsers";
import { List } from "./CardList.styled";
import Card from "../Card";


const ContactList = () => {
    const users = useVisibleUsers();

    return (
        <List>
            {users.map(({id, avatar, tweets, followers, isFollowed=false})=>
            <Card key={id} avatar={avatar} tweets={tweets} followers={followers} id={id} isFollowed={isFollowed}>
            </Card>
            )}
        </List>
    );
};

export default ContactList;