import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import CardList from '../components/CardList';
import LoadButton from "../components/LoadButton";
import { Link } from "./Tweets.styled";
import { fetchUsers } from "../redux/operations";
import Dropdown from "../components/Dropdown";
import ScrollUp from "components/ScrollUp";
import { fetchFirstUsers,fetchAllUsers } from "../redux/operations";



const Tweets = () => {
  const dispatch = useDispatch();
  const [pages, setPages] = useState(1);
  
  useEffect(()=>{
    dispatch(fetchFirstUsers());
  },[dispatch]);

  useEffect(()=>{
    dispatch(fetchAllUsers());
  },[dispatch]);

  let page = pages;

  const handleBtnClick = ()=> {
    page++;
    setPages(page)
    
    
    dispatch(fetchUsers(page)); 
  };

    return (
        <>
        <Link to='/'>&#8249; Go back</Link>
        <Dropdown/>
        <CardList/>
        <LoadButton type={"submit"} disabled={pages > 2} onClick={handleBtnClick}>Load More</LoadButton>
        <ScrollUp/>
        </>
    );
  };

  export default Tweets; 