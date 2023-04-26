import { useSelector } from "react-redux";
import { selectUsers } from "../redux/selectors";

export const useUsers = ()=> useSelector(selectUsers);