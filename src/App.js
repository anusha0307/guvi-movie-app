// import logo from './logo.svg';
import './App.css';



//reactday-01
//{}- template literal
//jsx -javascript xml
//class = classname (due to CLASS is a keyword in java)

//the jsx is converted into java   JSX-->JS
//webpack +babel is used to convert the jsx into javascript


// //1
// function App() {
//   //js starts
//   const name="anusha";
//   const time=30;
  
//   //js ends
//   //jsx starts
//   return (
    
//     <div className="App">

//       <h1>hello,{name}</h1>  
//       <p>time to complete -{5*time}mins</p>
//       <h2>start editing to see some magic happen!!</h2>
//     </div>
//   );
//   //jsx ends
// }

// export default App;

//day02
//how to create component
// how function become component
//1. the first letter to be capital
// 2. it should return one jsx element bt it should nt be more than one jsx element
//<> </>--->react fragment helps in styling  and perfomance.

//define the component
//the message component is called inside the app component

//2----
// function Appa() {
//   //js starts
//   const name="anusha";
//   const time=30;
  
//   //js ends
//   //jsx starts
//   return (
    
//     <div className="App">
//       <Message nam="anu" pic="https://tse2.mm.bing.net/th?id=OIP.vJ3aFoQV6wd99bwSXpENJAAAAA&pid=Api&P=0&w=102&h=154" />    
//       <Message nam="kalyani" pic="https://tse2.mm.bing.net/th?id=OIP.YEMKk8DvRpM4-lIo2nQHXgAAAA&pid=Api&P=0&w=142&h=213"/>  
//       <h1>hello,{name}</h1>  
//       <p>time to complete -{4*time}mins</p>
//       <h2>start editing to see some magic happen!!</h2>
//     </div>
//   );
//   //jsx ends
// }

// export default Appa;

// function Message(props){
//   // const name="kalyani"
//   return(
//     <div>
//    <img className='profile-pic' src={props.pic} /> 
//   <h1>hiiiiiiii,{props.nam}....</h1>
//   </div>
//   )
// }------


//3.---
// // using map function
// function App() {
//   const names=["anushs","kalyani","jansi"]
  
//   return(
//     <div className="App">
//     {names.map((nm)=>(<Welcome name={nm} />))}
//     </div>
//   )
// }
// export default App;

// function Welcome(props){
// return(
//   <>
//   <h1>hello....{props.name}</h1>
//   </>
// )
// }---

//4----
// usin map for  objrect
// function App() {
//   // const names=["anushs","kalyani","jansi"]
//   const students= [
//     { 
//       name:"anu",
//       pic:"https://tse2.mm.bing.net/th?id=OIP.vJ3aFoQV6wd99bwSXpENJAAAAA&pid=Api&P=0&w=102&h=154" 
//    },
//   {  name:"kalyani",
//      pic:"https://tse2.mm.bing.net/th?id=OIP.YEMKk8DvRpM4-lIo2nQHXgAAAA&pid=Api&P=0&w=142&h=213"  
// },
// {
//   name:"jansi",
//   pic:"https://tse4.mm.bing.net/th?id=OIP.tdfjQXRfxuaAwaFDrNXATwHaEK&pid=Api&P=0&w=326&h=183 "
// }
// ]
//   return(
//     <div className="App">

//     {students.map((student)=>(<Welcome   name={student.name}  pics={student.pic} />))}
//     </div>
//   )
// }
// export default App;

// //defined the component--logic +view
// function Welcome(props){
// return(
//   <>
//   <h1>hello....{props.name}</h1>
//   <img src={props.pics} />
//   </>
// )
// }----


