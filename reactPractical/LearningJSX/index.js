// function App(){
//     var name = "World"
//     return(
       
//         <h1>Hello {name}</h1>
//     )

// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>);




// function App(){
//     var name = "Alexa";
//     var age = 10;
//     let demo = null;
//     return(
//        <>
//         <h1>Hello {name}</h1>
//         <p>Your age is  {age}</p>
        
//         </>
//     )

// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>);






// 




function sum(){
    let a = 10+5;
    return a;
}

const header = <h2>JSX Expression</h2>

function App(){
    var name = "Alexa";
    var age = 10;
    let demo = null;
    let undef;
    const bool = true;
    return(
       <>
       
        <h1>Javascript inside JSX</h1>
        {header}
        <p>String: {name}</p>
        <p>Number: {age}</p>
        <p>Null value: {demo}</p>
        <p>Undefiend Value: {undef}</p>
        <p>Boolean Value: {bool}</p>
        <p>Calling afunction: {sum()}</p>
        
        </>
    )

}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
