import React, {  useState } from 'react';

import Hearder from "../components/Header";

import api from "../axios/api";
import "./index.css";




export default function Create(){

    
const [nome,setNome] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [cpf,setCpf] = useState("");
const [number_account,setNumber_account] = useState("");
const [saldo,setSaldo] = useState();
const [location,setLocation] = useState("");
const [phone,setPhone] = useState("");

var config = {
    headers: {'X-My-Custom-Header': 'Header-Value'}
  };

    
async function renderSubmit(e){
    e.preventDefault();

    const resnponse = await api.post('/create',{
        name:nome,
        email:email,
        password:password,
        cpf:cpf,
        number_account:number_account,
        balance:saldo,
        location:location,
        phone:phone
    },config)
    
}
        

    
        return(
          <div className="col-md-6">
             <Hearder title="cadastro " />
              {
                 // Alert(list())
              }
              <form onSubmit={renderSubmit}>
                  
                      <label for="nome">nome</label>
                      <input id="nome" type="text"
                      placeholder="informe seu nome" required
                      value={nome} onChange={e => setNome(e.target.value)}/>
              
                  
                      <label for="email">email</label>
                      <input id="email" type="email"
                      placeholder="informe seu email" required 
                      value={email} onChange={e => setEmail(e.target.value)}/>
                  
                      <label for="password">senha</label>
                      <input id="password" type="password"
                      value={password} onChange={e => setPassword(e.target.value)} placeholder="informe sua senha" required />
                  
                      <label for="cpf">cpf</label>
                      <input id="cpf" type="text"
                      placeholder="informe seu cpf" required
                      value={cpf} onChange={e => setCpf(e.target.value)} />
                  
                      <label for="numero da conta">numero da conta</label>
                      <input id="numeroConta" type="text"
                       placeholder="informe seu numero da conta" required 
                       value={number_account} onChange={e => setNumber_account(e.target.value)}/>
                  
                      <label for="saldo">saldo</label>
                      <input id="saldo" type="number"
                      value={saldo} onChange={e => setSaldo(e.target.value)} placeholder="informe seu saldo" step="any" required />
                  
                      <label for="location">localização</label>
                      <input id="location" type="text"
                       placeholder="informe seu localização" required
                       value={location} onChange={e => setLocation(e.target.value)}/>
                  
                      <label for="phone">telefone</label>
                      <input  id="phone" type="text"
                     placeholder="informe seu telefone" required
                     value={phone} onChange={e => setPhone(e.target.value)} />
                 <button type="submit">cadastrar</button>
              </form>
          </div>
        )
      

}