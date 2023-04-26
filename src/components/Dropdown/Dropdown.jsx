import { Select } from "./Dropdown.styled";
import { useDispatch } from "react-redux";
import { setFilterValue } from "../../redux/filterSlice";

const Dropdown =()=>{
    const dispatch = useDispatch();

    const handleSelect = (e)=>{
        dispatch(setFilterValue(e.target.value))
    }
return(
    <Select  onChange={handleSelect}>
        <option value="">Filter by</option>
        <option value="all">All</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
    </Select>
)
};

export default Dropdown; 