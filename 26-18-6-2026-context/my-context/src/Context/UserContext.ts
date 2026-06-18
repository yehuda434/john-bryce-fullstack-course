import { createContext } from "react";
interface UserContextType {
    name: string;
    isLoggedIn: boolean;
}
const UserContext = createContext<UserContextType>  (null);
export default UserContext;