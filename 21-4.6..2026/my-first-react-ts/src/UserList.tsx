import User from "./User"

export interface IUser {
    id: number;
    name: string;
    age: number;
  }
export default function UserList() {
    const users: IUser[] = [
        { id: 1, name: 'John', age: 20 },
        { id: 2, name: 'Jane', age: 21 },
        { id: 3, name: 'Jim', age: 22 }
    ]
    let myUsers = users.map((user: IUser) => (
        <User key={user.id} id={user.id} name={user.name} age={user.age} />
    ))
    return (
        <div>
            {myUsers}
        </div>
    )
}