import { useEffect } from "react";
import { useDispatch} from "react-redux";
import CardList from '../components/CardList';
import Button from "../components/Button";
import { Link } from "./Tweets.styled";
import { fetchUsers } from "../redux/operations";
import Dropdown from "../components/Dropdown";
import { fetchAllUsers } from "../redux/operations";

const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllUsers());
  },[dispatch]);

  let page = 1;
  const handleBtnClick = ()=>{
    page++;
    
    if(page > 3){
      return
    }

    dispatch(fetchUsers(page));
  };

    return (
        <>
        <Link to='/'>&#8249; Go back</Link>
        <Dropdown/>
        <CardList/>
        <Button type={"submit"} onClick={handleBtnClick}>Load More</Button>
        </>
    );
  };

export default Tweets; 

