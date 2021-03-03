import styled from 'styled-components'

export const Page = styled.div`

`;

export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: var(--purple);
    height: 8vh;
    align-items: center;

    color: #ffffff;
    font-size: 1.4rem;
`;

export const HomeButton = styled.a`
    margin-right: 2vw;
`;

export const SignupButton = styled.a`
    margin-right: 2vw;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height:80vh;
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    height: 60vh;
    width: 30vw;

    border: solid 5px var(--purple);
    border-radius: 30px;
`;

export const Title = styled.h1`
    color: var(--purple);
    font-size: 2.5rem;

`;

export const UsernameInput = styled.input`
    border: 1px solid var(--purple);
    font-size: 1.8rem;
    border-radius: 10px;

    text-align: center;
`;

export const PasswordInput = styled.input`
    border: 1px solid var(--purple);
    font-size: 1.8rem;
    border-radius: 10px;

    text-align: center;
    `;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 35%;
    min-height: 3rem;

    font-size: 1.5rem;
    color: #ffffff;

    background-color: var(--purple);
    border-radius: 30px;

    background: linear-gradient(to left, var(--purple) 50%, var(--blue) 50%) right;
    background-size: 200%;
    transition: .4s ease-out;

    &:hover {
        background-position: left;
    }
`;
