export default function ColorsList() {
    
    const colors = ['red', 'green', 'blue', 'yellow', 'purple']
    let myColors = colors.map((color: string, index: number) => (
        <li  key={index}>{color}</li>
    ))
    
    return (
        <div>
            <h1>ColorsList</h1>
            <ol>
                {myColors}
            </ol>
        </div>
    )
}