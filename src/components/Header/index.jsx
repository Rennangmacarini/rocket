import {Container, Profile, Logout } from "./styles"
import { RiShutDownLine } from "react-icons/ri"


export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/rennangmacarini.png" alt="Foto do usuário" />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>Rennan Macarini</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}