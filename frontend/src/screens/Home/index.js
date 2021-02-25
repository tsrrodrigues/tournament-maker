import { Title, Text, Center, StartButton, Container } from '../Home/styles.js'

const Home = () => {
    return (
        <Container>
            <span>
                <a href="../screens/Signin.js">Sign In</a>
            </span>
            <Center>
                <Title>Monte torneios pesonalizados</Title>
                <Text>Nos conte como deseja realizar o seu torneio e nós o ajudaremos em cada etapa</Text>
                <StartButton as="a" href="../Sign-up-page.js">Começar</StartButton>
            </Center>
        </Container>
    );
}

export default Home