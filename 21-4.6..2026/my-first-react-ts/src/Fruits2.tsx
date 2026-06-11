interface Fruit {
    id: number;
    name: string;
    color: string;
  }
  
  const fruits: Fruit[] = [
    { id: 1, name: 'Apple', color: 'red' },
    { id: 2, name: 'Banana', color: 'yellow' },
    { id: 3, name: 'Cherry', color: 'blue' }
  ]
  
  export default function Fruit2() {
    return (
      <ul>
        {fruits.map((fruit: Fruit) => (
          <li style={{ color: fruit.color }} key={fruit.id}>{fruit.name} | {fruit.color}</li>
        ))}
      </ul>
    )
  }