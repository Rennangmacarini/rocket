import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

export function Home(){
    return(
       <Container>
        <Brand>
        <h1>Rocketnotes</h1>
        </Brand>

        <Header/>

        <Menu>
            <li><ButtonText title="Todos" isActive /></li>
            <li><ButtonText title="React"/></li>
            <li><ButtonText title="Nodejs"/></li>
        </Menu>

        <Search>

        </Search>

        <Content>

        </Content>

        <NewNote>
            <FiPlus/>
            Criar nota
        </NewNote>


       </Container>
    );
}