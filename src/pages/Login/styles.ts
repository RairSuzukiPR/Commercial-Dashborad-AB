import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    margin-left: calc(100vw - 90%);
    margin-right: calc(100vw - 90%);
    justify-content: space-around;
    align-items: center;

    @media(max-width: 720px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: calc(100vw - 95%);
        margin-right: calc(100vw - 95%);
        
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
    min-width: 470px;
    height: 100vh;
    margin-right: 50px;

    @media(max-width: 950px) {
        min-width: 370px;
        height: 90vh;
    }

    @media(max-width: 720px) {
        margin-right: 0;
        min-width: 340px;
    }
`;

export const LogoImg = styled.img`
    width: 100%;
    height: 80%;
    border-radius: 50px;
    object-fit: cover;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
`;

export const LoginFormArea = styled.div`
    display: flex;
    height: 550px;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.div`
    color: #232323;
    font-size: 48px;
    margin-bottom: 30px;

    @media(max-width: 950px) {
        font-size: 40px;
    }
`;

export const Label = styled.label`
    color: #232323;
    font-size: 18px;

    @media(max-width: 950px) {
        font-size: 14px;
        font-weight: 500;
    }
`;

export const LoginInput = styled.input`
    width: 350px;
    border-radius: 15px;
    padding: 13px 13px 13px 43px;
    font-size: 16px;
    margin: 15px 0;
    background-color: #E0E0E0;
    border: none;
    

    @media(max-width: 950px) {
        font-size: 14px;
        width: 270px;
    }

    @media(max-width: 720px) {
        width: 350px;
    } 
`;

export const Test = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    width: 175px;
    height: 40px;
    font-size: 16px;
    border: none;
    border-radius: 12px;
    margin-top: 40px;
    background-color: #B07A4C;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #a67246;
    }

    @media(max-width: 950px) {
        width: 270px;
        margin-bottom: 50px;
    }

    @media(max-width: 720px) {
        width: 350px;
    }  
`;

export const Icon = styled.div`
    .icon {
        position: absolute;
        color: #B07A4C;
        margin-top: 32px;
        margin-left: 15px;
    }
`;


