
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';
import Add from './components/Add';
import { useState } from 'react';
function App() {
  const listtask=[{title:"get MERN black Belt",read:false}]

  
  const [posts,setPosts]=useState(listtask)
  // ================add==tasks========
  const add=(newTask)=>{
    
    setPosts([...posts,newTask])
    };
// ==================================
// ============delete=============
const deletePosts=(i)=>{
  const updatePosts=posts.filter((onepost,index)=>{
    return index !==i;});

  setPosts(updatePosts);
}
    

  

  // ==============chekpost======
  const chekposts =(id)=>{
    const copylist=[...posts];
     copylist[id].read = !copylist[id].read ;
     setPosts(copylist);
  }
  // ================================
  return (
    <div className=" d-flex  flex-column justify-content-center">
      <Add posts={posts}  add={add}/>
      <Display posts={posts} chekposts={chekposts} deletePosts={deletePosts}/>
      
    </div>
  );
}

export default App;
