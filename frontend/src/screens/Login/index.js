import { Page, Container, Header, HomeButton, SignupButton, Center, Title, Button, UsernameInput, PasswordInput } from './styles.js'

const Login = () => {
    return(
        <Page>
            <Header>
                <HomeButton href="../screens/Home/index.js">Home</HomeButton>
                <SignupButton href="../screens/SignUp.js">Sign Up</SignupButton>
            </Header>
            <Container>
                <Center>
                    <Title>Sign in</Title>
                    <UsernameInput type="text" placeholder="Username"></UsernameInput>
                    <PasswordInput type="text" placeholder="Senha"></PasswordInput>
                    <Button as="a" hef="">Entrar</Button>
                </Center>
            </Container>
        </Page>
    );
}

export default Login