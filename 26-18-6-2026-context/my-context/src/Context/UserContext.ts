import { createContext } from "react";
interface UserContextType {
    name: string;
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
    editName: (inputName: string) => void;
}
const UserContext = createContext<UserContextType>  (null);
export default UserContext;