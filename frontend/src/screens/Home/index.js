import { Title, Text, Center, StartButton, Container, Header, Image } from '../Home/styles.js'
import image from '../../assets/sports.svg'

const Home = () => {
    return (
        <Container>
            <Header>
                <a href="../screens/Signin.js">Sign in</a>
            </Header>
            <Center>
                <Title>Monte torneios pesonalizados</Title>
                <Text>Nos conte como deseja realizar o seu torneio e nós o ajudaremos em cada etapa</Text>
                <StartButton as="a" href="../Sign-up-page.js">Começar</StartButton>
                <Image src={image}></Image>
            </Center>
        </Container>
    );
}

export default Home