import { useState } from 'react'
import './App.css'


export default function LoginPage() {

  // const [email, setEmail] = useState  ('');
  // const [password, setPassword] = useState  ('');

  
  function handleSubmit (e) {
    e.preventDefault (); 

    const userEmail = "tehila10@gmail.com";
    const userPassword = 1234;
    const adminEmail = "tehila20@gmail.com";
    const adminPassword = 4321;
    
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);


    if ((formJson.myInput === userEmail && formJson.password === userPassword) || 
    (formJson.myInput === adminEmail && formJson.password === adminPassword)) {
 
  alert("connect succeed");
  history.push('/next-page');  
} else {
  alert("can't connect");
}

    fetch ('/some-api', {method: 'POST', body: formData});
  }

  return (
    <form method="post" onSubmit={handleSubmit}>

    <h1>welcome!</h1>
    <h2>
    user name <input name="userName" defaultValue="Some initial value" />
    </h2>
    <h2>
    password <input name="password" defaultValue="Some initial value" />
    </h2>
    
    <button type="submit">Submit</button>
    </form>
  );
}


// function VotingPage () {
  
//   <p> cats</p> 
//   <p> dogs</p> 
//   <p> cows</p> 
//   <p> lions</p> 

//   <button> change vote</button>
//   <button>done</button>

//       return (
//     <>
      
//     </>
//   )
// }


