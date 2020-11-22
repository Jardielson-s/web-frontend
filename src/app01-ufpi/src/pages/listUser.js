import React, { useEffect , useState } from 'react';
import './listUser.css';

import api from "./../axios/api";
import { Alert } from 'reactstrap';

 



export default  function ListAll(){

    const [users,setUsers] = useState([]);

 
useEffect(()=>{
    async function loadAll(){
        const response =  await api.get('/loadAll');


        //console.log(response.data.Document);
         setUsers(response.data);
        
    }

    loadAll();
},[]);

    return(
        <div>
            <ul>
                {
                    users.map(users => (
                        <li key={users.id}>
                          <fieldset>
                            <span>nome:</span>
                            <strong>{users.name}</strong>
                            <span>emaill:</span>
                            <strong>{users.email}</strong>                                  
                        {
                          users.Document.map(users => (
                              <li className="li-ph-lo" key={users.id}>
                                  <span>número:</span>
                                  <strong>{users.phone}</strong>
                                  <span>localização:</span>
                                  <strong>{users.location}</strong>
                              </li>
                          ))   
                        } 
                         </fieldset>                   
                        </li>
                    ))
                    
               }
            </ul>
        </div>
    );
}