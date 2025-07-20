function printHello(event){
    console.log("Hello!")
    console.log(event)
}
function printBye(){
    console.log("Bye!")
}
function handleDblClick(){
    console.log("you double clicked!")
}
export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click Me!</button>

            <p onClick={printBye}>When you click on this parah it will show bye in console</p>

            <p onMouseOver={printBye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet obcaecati vero laborum recusandae laudantium voluptatum facilis. Esse porro blanditiis quia, quibusdam dicta illo, asperiores similique excepturi corporis, necessitatibus odit.</p>

            <button onDoubleClick={handleDblClick}>Double Click Me!</button>
        </div>
    )
}