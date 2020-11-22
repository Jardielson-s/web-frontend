import React, {  useState } from 'react';
import api from "./../axios/api";
import './menu.css';

import Hearder from "./../components/Header/index";

export default function Login(){
   
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


 

        async function login(e){
            e.preventDefault();
            const response = await api.post('/login',{
                email,
                password
            });

            console.log(response.data);
        }

  
    return(
       <div>
           <form onSubmit={login}>
           <Hearder title="login" />
             <label for="email">email:</label>
             <input type="email" placeholder="seu email" required value={email} 
             onChange={e=>setEmail(e.target.value)} />
             <label for="password">senha:</label>
             <input type="password" placeholder="sua senha" required value={password} 
             onChange={e=>setPassword(e.target.value)} />
             <button type="submit">entrar</button>
           </form>
       </div>
    );

}