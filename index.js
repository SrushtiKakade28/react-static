import React from "react"
import ReactDOM from "react-dom/client"



//ReactDOM.render(<h1>Hello,everyone!</h1>,document.getElementById("root"))
//render means place something on the screen
//document.getelementbyid is appending the heading
//ReactDOM.render(<ul><li>skna</li><li>akfiid</li></ul>,document.getElementById("root"))
//react is composable
//function MainContent(){
    //return (<h1>im learning react</h1>)}
//ReactDOM.render(<div> <Navbar /><MainContent/></div>,document.getElementById("root"))

//react is imperative
//ReactDOM.render(<h1 className="header">Hello,everyone!</h1>,document.getElementById("root"))


//jsx javascript xml (html represented as javascript)
//jsx is almost html but with a few changes like
//className instead of class

//creating a navbar in jsx
const nav = (
        
        <navbar>
            <h1>srushti</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
                </ul>
        </navbar>


)
        ReactDOM.render(nav,document.getElementById("root"))
