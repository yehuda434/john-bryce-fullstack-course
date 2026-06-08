export interface IUser {
    id: number;
    name: string;
    age: number;
  }
export default function User({id, name, age}:IUser) {
    return (
        <div>
            <h1>User</h1>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
}