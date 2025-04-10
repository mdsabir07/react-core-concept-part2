import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';
import Players from './Players';
import './App.css'
import { Suspense } from 'react';


// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   // const data=await res.json()
//   return res.json();
// }

// const fetchPosts= async()=>{
//   const res= await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }

function App() {

  // const postPromise=fetchPosts();
  // const friendPromise = fetchFriends();

  // function handleClick() {
  //   alert("clicked me!");
  // }
  // const handleClick2 = () => {
  //   alert("Clicked 2");
  // }

  // const handleAdd5 = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum);
  // }
  return (
    <>
      <Players></Players>
      {/* <Suspense fallback={<h4>Posts are loading.....</h4>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense> */}
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
{/* 
      <Suspense fallback={<h3>Friends coming to get together!</h3>}>
        <Friends friendPromise={friendPromise}></Friends>
      </Suspense>
      <Counter></Counter>
      <Batsman></Batsman>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me</button>
      <button onClick={() => alert("Clicked 3")}>Click 3</button>
      <button onClick={() => handleAdd5(12)}>Clicked add 5</button> */}
    </>
  )
}

export default App
