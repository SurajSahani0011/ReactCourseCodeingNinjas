/*JAVASCRIPT*/
// const heading = document.createElement("h2");
// heading.textContent="Hello World";
// heading.className = "header";
// document.getElementById("root").append(heading);

// console.log("JavaScript element: ",heading);

/**REACT  with js */

// const reactHeading = React.createElement("h1", {className : "head",id:"reactHead",children:"hello React!"});


/**REACT WITH JSX */

// const jsxHeading =  <React.Fragment>
                   
//                  <h1>Hello JSX</h1>
//                  <p>This is created using JSX</p>
                    
//                 </React.Fragment>

                /**React component */
//                 function App() {
//                     return(
//                         <React.Fragment>
                   
//                         <h1>Hello JSX</h1>
//                         <p>This is created using JSX</p>
                           
//                        </React.Fragment>
//                     )
//                 }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>);






//console.log(jsxHeading);

//console.log("React element:",reactHeading);



/**React arrow function */

// function Name(){
//     return(
//         <p>Jsx is JavaScript XML</p>
//     )
// }


// const App = ()=>(
//     <>
//     <h1 className="head">Hello JSX</h1>
//     <p>This is created using JSX</p>
//     </>
// )

// ReactDOM.createRoot(document.getElementById("root")).render(<><App/><Name/></>);






const App = ()=>(
    <>
    <h2>Skills used to make this project</h2>
    <ol>
         <li>HTML</li>
          <li>javaScript</li>
           <li>CSS</li>
     </ol>
    </>
   )
   ReactDOM.createRoot(document.getElementById("root")).render(<App/>);