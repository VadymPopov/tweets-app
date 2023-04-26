import { useSelector } from "react-redux";
import { selectVisibleUsers } from "../redux/selectors";

export const useVisibleUsers = ()=> useSelector(selectVisibleUsers);