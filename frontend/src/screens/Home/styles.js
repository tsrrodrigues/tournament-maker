import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const Header = styled.span`
    display: flex;
    justify-content: flex-end;
    margin: 1.5vh 2.5vw 0 0;

    font-size: 2rem;
`;

export const Center = styled.div`
    max-width: 80%;
    height: 100vh;

    padding: 0 5vw;
    margin: 0 10vw 0 10vw;

    flex-direction: column;
    display: flex;
    align-items: center;

    transiction-delay: 0.2s;
  `;
     
export const Title = styled.h1`
    margin-top: 10vh;
    color: var(--purple);
    font-weight: 700;
    font-size: 5rem;
    text-align: center;
`;

export const Text = styled.p`
    width: 40rem;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
`;

export const StartButton = styled.button`
    height: auto;
    min-height: 3.5rem;
    width: auto;
    min-width: 17vw;

    font-size: 2rem;

    display: flex;
    margin-top: 3rem;
    justify-content: center;
    align-items: center;

    border-radius: 30px;
    background: var(--pink);
    color: var(--white);

    transition: 0.4s;

    &:hover {
        background-color: var(--purple);

    }
`;

export const Image = styled.img`
    height: 15rem;
    margin-top: 4rem;
`;