import { Bottom,  Item, Logo, Text, Top, Avatar, AvatarWrapper } from "./Card.styled";
import Button from "../Button";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/operations";
import logo from '../../images/logo.svg';
import top from '../../images/card-top.png';


const Card = ({ id, avatar, tweets, followers, isFollowed}) => {
  const dispatch = useDispatch();
  let followersNum = followers;

  const handleBtnClick = () => {
    isFollowed ? followersNum-- : followersNum++;
    const usersFromLocal = JSON.parse(localStorage.getItem('users'));
    const usersFromLocalFollowed = JSON.parse(localStorage.getItem('usersFollowed'));
    let newUsers = [];
    
    if(usersFromLocal.length !== usersFromLocalFollowed.length) {
      usersFromLocalFollowed.push(...usersFromLocal);
    }

   if(usersFromLocalFollowed) {
    newUsers = usersFromLocalFollowed.map(user=>user.id === id ? {...user, followed: !user.followed} : user);
   } else {
    newUsers = usersFromLocal.map(user=>user.id === id ? {...user, followed: !user.followed} : user);
   }

    // dispatch(updateUser({followersNum, id, isFollowed:!isFollowed}))
  
   
   localStorage.setItem('usersFollowed', JSON.stringify(newUsers));
    dispatch(updateUser({followersNum, id}))
  };

    return (
        <Item key={id}>
        <Top img={top}>
          <Logo  src={logo} alt="logo"/>
          <AvatarWrapper>
            <Avatar src={avatar} alt="avatar" width={62} height={62} />
          </AvatarWrapper>
        </Top>
        <Bottom>
          <Text>{tweets} Tweets</Text>
          <Text>{followers.toLocaleString("en-US")} Followers</Text>
          <Button type="button" onClick={handleBtnClick} isFollowed={isFollowed}>{isFollowed ? 'Following' : 'Follow'}</Button>
        </Bottom>
      </Item>
)
};

Card.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  isFollowed: PropTypes.bool,
};

export default Card;