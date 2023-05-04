import { useState } from 'react';

import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

export  function Profile(){
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    async function handleUpdate(){
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        await updateProfile({ user });
    }

    return(
        <Container>
            <header>
                <Link to="/">
                <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img
                     src="https://github.com/rennangmacarini.png" 
                     alt="Foto do usuário"
                      />
                      <label htmlFor="avatar">
                        <FiCamera/>

                        <input 
                          id="avatar"
                          type="file"
                        />

                      </label>
                </Avatar>
                <Input
                placeholder="nome"
                type="text"
                icon={FiUser}
                value={name}
                onChange={e => setName(e.targert.value)}
                />

            <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                value={email}
                onChange={e => setEmail(e.targert.value)}
                /> 

            <Input
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordOld(e.targert.value)}
                /> 

            <Input
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordNew(e.targert.value)}
                />

                <Button title="Salvar" onClick={handleUpdate}/>
               
            </Form>

        </Container>
    )
}