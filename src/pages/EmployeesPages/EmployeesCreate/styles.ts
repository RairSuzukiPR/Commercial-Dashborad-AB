import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    background-color: var(--main-bg);
    border-radius: 30px;
    box-shadow: var(--box-shadow); 
    transition: background-color 0.1s linear;
`;

export const Title = styled.h1`
    color: var(--text-color);
    margin-top: 0;
    margin-bottom: 20px;
    font-size: var(--page-title-font-size);
    font-weight: var(--page-title-font-weight);
`;

export const BodyArea = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;

    .textAreaDiv {
        margin: 0;
    }

`;

export const Body = styled.div`

`;

export const ImageArea = styled.div`
    width: 20%;
    margin-right: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageItem = styled.div`
    width: 12vw;
    height: 12vw;
    min-width: 115px;
    min-height: 115px;
    border-radius: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;

    .icon {
        color: #9FB1C6;
        width: 13%;
        height: auto;
        cursor: pointer;

        @media(max-width: 550px) {
            width: 15px;
            height: auto;
        }
    }

    @media(max-width: 550px) {
        min-width: 100px;
        min-height: 100px;
    }
`;

export const FormArea = styled.div`
    flex: 1;   
`;

export const FormItem = styled.div`
    display: flex;
    margin-bottom: 2.5%;
    flex-wrap: wrap;
    justify-content: space-between; 
`;

export const MediumInputs = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
        width: 100%;
    }
`;

export const FormInputItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;

    @media (max-width: 1316px) {
        width: 100%;

        &:nth-child(2){
            margin-top: 2.5%;
        }
    }
`;

export const SmallInputs = styled.div`
    width: 48%;
    display: flex;
    justify-content: space-between;

    .sm {
        width: 30%;
    }

    @media (max-width: 1316px) {
        width: 100%;

        .sm {
            margin-top: 2.5%;
        }
    }
`;

export const Label = styled.label`
    color: var(--text-color);
`;

export const Input = styled.input`
    margin-top: 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ced4da;
    padding: 7px 12px 6px 12px;

    &:focus {
        outline: none;
    }
`;

export const TextArea = styled.textarea`
    color: var(--text-color);
    width: 100%;
    padding: 7px 12px 6px 12px;
    border-radius: 5px;
    border: 1px solid #ced4da;
    resize: vertical;

    &:focus {
        outline: none;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 35px;
    width: 100%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: var(--footer-color);

    @media(max-width: 950px) {
        padding: 10px 25px;

    }

    @media(max-width: 550px) {
        padding: 10px 20px;
    }
`;

export const ButtonLink = styled(Link)<{bgcolor: string}>`
    background-color: ${(props) => props.bgcolor};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: none;
    font-weight: 600;
    border-radius: 15px;
    margin-right: 15px;
    padding: 8px 15px;
    cursor: pointer;
    text-decoration: none;
    
    &:last-child {
        margin-right: 0;
    }

    @media(max-width: 950px) {
        font-size: 12px;
        padding: 8px 6px;
        border-radius: 12px;
    }

    @media(max-width: 550px) {
        font-size: 10px;
        padding: 7px 10px;
        border-radius: 10px;
    }
`;