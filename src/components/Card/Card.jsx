import { Bottom,  Item, Logo, Text, Top, Avatar, AvatarWrapper } from "./Card.styled";
import Button from "../Button";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/operations";
import logo from '../../images/logo.svg';
import top from '../../images/card-top.png';

  const Card = ({ id, avatar, tweets, followers}) => {
  const dispatch = useDispatch();

  let followersNum = followers;
  const users = localStorage.getItem('users');

  const handleBtnClick = () => {
   const mappedUsers = JSON.parse(users).map(user=>user.id === id ? {...user, followed: !user.followed} : user);
   localStorage.setItem('users', JSON.stringify(mappedUsers));

    const user = mappedUsers.find(user => user.id === id);
    !user.followed ? followersNum-- : followersNum++;
  
    dispatch(updateUser({followersNum, id}))
  };

const isFollowed = users ? JSON.parse(users).find(user => user.id === id).followed : null;

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
          <Button type="button" onClick={handleBtnClick}  isFollowed={isFollowed}>{isFollowed ? 'Following' : 'Follow'}</Button>
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