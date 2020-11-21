import Recat, { Component } from 'react';

import Hearder from "./../components/Header";

import "./login.css";

import { Form , FormGroup , Input , Label , Button , Alert} from "reactstrap";



export default class Login extends Component {

    constructor(){
       super()
       this.state = {
           message: '',
       }
    }

    singIn = () => {

        const data =  {nome : this.nome, email : this.email, password : this.password,
                      cpf : this.cpf,numeroConta : this.numeroConta, saldo : this.saldo, 
                      location : this.location, phone : this.phone}

        console.log(data);

        const requestInfo = {
            method:'POST',
            body: JSON.stringify({}),
            headers: new Headers({
                'content-Type': 'application/json'
            })
        };

        fetch('http://127.0.0.1:8000/create',requestInfo)
        .then(response => {
            if(response.ok)
            {
                console.log(response.data);
                return response.json(data);
            }

            throw new Error("invalid")
        })
        .then(token => console.log(token))
        .catch(e => console.log(e));
    }

    render(){
        return(
          <div className="col-md-6">
             <Hearder title="cadastro " />
              
              <Form>
                  <FormGroup>
                      <Label for="nome">nome</Label>
                      <Input type="text" id="nome"
                      onChange={e => this.nome = e.target.value} placeholder="informe seu nome" required/>
                  </FormGroup>
                  <FormGroup>
                      <Label for="email">email</Label>
                      <Input type="email" id="email" 
                      onChange={e => this.email = e.target.value} placeholder="informe seu email" required />
                  </FormGroup>
                  <FormGroup>
                      <Label for="password">senha</Label>
                      <Input type="password" id="password"
                      onChange={e => this.password = e.target.value} placeholder="informe sua senha" required />
                  </FormGroup>
                  <FormGroup>
                      <Label for="cpf">cpf</Label>
                      <Input type="text" id="cpf"
                      onChange={e => this.cpf = e.target.value} placeholder="informe seu cpf" required/>
                  </FormGroup>
                  <FormGroup>
                      <Label for="numero da conta">numero da conta</Label>
                      <Input type="text" id="numeroConta"
                      onChange={e => this.numeroConta = e.target.value} placeholder="informe seu numero da conta" required />
                  </FormGroup>
                  <FormGroup>
                      <Label for="saldo">saldo</Label>
                      <Input type="number" id="saldo"
                      onChange={e => this.saldo = e.target.value} placeholder="informe seu saldo" step="any" required />
                  </FormGroup>
                  <FormGroup>
                      <Label for="location">localização</Label>
                      <Input type="text" id="location"
                      onChange={e => this.location = e.target.value} placeholder="informe seu localização" required/>
                  </FormGroup>
                  <FormGroup>
                      <Label for="phone">telefone</Label>
                      <Input type="phone" id="phone"
                      onChange={e => this.phone = e.target.value} placeholder="informe seu telefone" required/>
                  </FormGroup>
                 <Button onClick={this.singIn}>cadastrar</Button>
              </Form>
          </div>
        )
      }

}