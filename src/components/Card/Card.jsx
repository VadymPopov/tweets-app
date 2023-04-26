import { Bottom, Img, Item, Logo, Text, Top, Center, Avatar, AvatarWrapper } from "./Card.styled";
import Button from "../Button";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/operations";
import logo from '../../images/logo.svg';
import top from '../../images/card-top.png';


const Card = ({ id, avatar, tweets, followers, isFollowed}) => {
  const dispatch = useDispatch();
  let followersNum = followers;

  const handleBtnClick =()=> {
    isFollowed ? followersNum-- : followersNum++;
    dispatch(updateUser({followersNum, id, isFollowed:!isFollowed}))
  };

    return (
        <Item key={id}>
        <Top>
          <Logo  src={logo} alt="logo"  />
          <Img src={top} alt="card-top" width={308} height={168} />
          <AvatarWrapper>
            <Avatar src={avatar} alt="avatar" width={62} height={62} />
          </AvatarWrapper>
        </Top>
        <Center>
        </Center>
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