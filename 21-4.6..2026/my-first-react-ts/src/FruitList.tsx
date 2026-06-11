export default function FruitList() {
    const fruits: string[] = ['Orange', 'Apple', 'Banana', 'Cherry']
    
    let myFruits = fruits.map((fruit: string, index: number) => (
        <li key={index}>😎❤️{fruit}❤️😎</li>
    ))
   
      return (
      <ul>
        {myFruits}
      </ul>
    )
  }
  


//   let arr = [1, 2, 3, 4, 5]
//   let myArr = arr.map((x: number) => x*x)//[1, 4, 9, 16, 25]
//   arr = arr.map((x: number) => x*x)//[1, 4, 9, 16, 25]