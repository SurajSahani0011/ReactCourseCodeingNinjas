import MovieList from "./MovieList";
import Navbar from "./Navbar";

 function App(){
  return(
    <>
    <Navbar />
    <MovieList />
    </>

  );
}


export default App;


// import Student from "./Student";

// function App(){
//   return (
//     <>
//       <Student stuname= "Alexa" marks={80}/>
//       <Student stuname= "Siri" marks={86}/>
//       <Student stuname= "Google" marks={88}/>
//       <Student />
//     </>
//   );

//   }

//   Student.defaultProps = {
//     stuname:"Student",
//     marks:"N.A"
//   }

  //export default App;
