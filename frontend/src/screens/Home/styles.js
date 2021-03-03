import styled from 'styled-components'


export const Container = styled.div`
`;

export const Header = styled.span`
    display: flex;
    justify-content: flex-end;
    margin: 1.5vh 2.5vw 0 0;

    font-size: 4vh;
`;

export const Center = styled.div`
    padding: 0 5vw;

    flex-direction: column;
    display: flex;
    align-items: center;
  `;
     
export const Title = styled.h1`
    margin-top: 6vh;
    color: var(--purple);
    font-weight: 700;
    font-size: 10vh;
    text-align: center;

    @media (max-width: 520px) {
        font-size: 6vh;
        margin-bottom: 3vh;
        margin-top: 4vh;
    }
`;

export const Text = styled.p`
    max-width: 55%;
    font-size: 4vh;

    text-align: center;

    @media (max-width: 520px) {
        max-width: 80%
    }
`;

export const StartButton = styled.button`
    min-height: 3.5rem;
    width: 220px;

    font-size: 2rem;

    display: flex;
    margin-top: 3rem;
    justify-content: center;
    align-items: center;

    border-radius: 30px;
    background: var(--pink);
    color: var(--white);

    transition: background 0.4s;

    &:hover {
        background-color: var(--purple);
    }

    @media (max-width: 520px) {
        width: 160px;
        font-size: 4vh;
    }
`;

export const Image = styled.img`
    max-width: 50%;
    margin-top: 7vh;

    @media (max-width: 520px) {
        max-width: 80%;
        margin-top: 10vh;
    }
`;