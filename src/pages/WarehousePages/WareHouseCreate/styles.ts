import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--main-bg);
    border-radius: 30px;
    box-shadow: var(--box-shadow); 
`;

export const Title = styled.h1`
    color: var(--text-color);
    margin-top: 0;
    margin-bottom: 20px;
    font-size: var(--page-title-font-size);
    font-weight: var(--page-title-font-weight);
`;

export const Body = styled.div`
    padding: 30px;
    display: flex;

    @media(max-width: 950px) {
        flex-direction: column;
    }
`;

export const ImagesArea = styled.div`
    width: 20%;
    /* background-color: rgba(0,0,0,0.55); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 950px) {
        width: 100%;
        flex-direction: row;
        margin-bottom: 30px;
        justify-content: space-around;
    }

    @media(max-width: 550px) {
        
    }
`;

export const MainImageArea = styled.div`
    width: 12vw;
    height: 12vw;
    border-radius: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;

    .icon {
        color: #9FB1C6;
        width: 15%;
        height: auto;
        cursor: pointer;

        @media(max-width: 550px) {
            width: 15px;
            height: auto;
        }
    }

    @media(max-width: 950px) {
        width: 15vw;
        height: 15vw;
    }
`;

export const MainImage = styled.img`

`;

export const SecondaryImagesArea = styled.div`
    margin-top: 10%;
    width: 12vw;
    height: 12vw;
    /* background-color: rgba(0,0,0,0.15); */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;

    @media(max-width: 950px) {
        width: auto;
        height: auto;
        grid-template-columns: repeat(4, 1fr);
        margin: 0 0 0 15px;
    }
`;

export const SecondaryImagesItem = styled.div`
    background-color: #ccc;
    border-radius: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
        color: #9FB1C6;
        width: 25%;
        height: auto;
        cursor: pointer;

        @media(max-width: 550px) {
            width: 15px;
            height: auto;
        }
    }

    @media(max-width: 950px) {
        width: 11vw;
        height: 11vw;
    }
`;

export const FormArea = styled.div`
    flex: 1;
    /* background-color: rgba(0,0,0,0.1); */
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media(max-width: 950px) {
        margin: 0;
    }
`;

export const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-bottom: 15px; */
    margin-bottom: 2.5%;
    flex-wrap: wrap;

    &.multipleSelects, &.multipleInputs{
        flex-direction: row;
        justify-content: space-between;
    }

    &:last-child {
        margin: 0;
    }
`;

export const FormItemSelect = styled.div`
    width: 48%;

    &:nth-child(2) {
        @media(max-width: 550px) {
            margin-top: 2.5%;
        }
    }
    @media (max-width: 550px) {
        width: 100%;
    }
`;

export const FormItemInput = styled.div`
    width: 22%;

    @media (max-width: 1200px) {
        width: 48%;
        margin-bottom: 2.5%;
    }

    @media (max-width: 550px) {
        width: 100%;
        margin-bottom: 2.5%;
    }
`;

export const FormItemInputRadioArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-height: 35px;
    margin-top: 5px;
`;

export const FormItemInputRadio = styled.div`
    display: flex;
    align-items: center;

    Label {
        margin-right: 6px;
        font-size: 13px;

        &:last-child {
            /* margin: 0; */
        }
    }
`;

export const Label = styled.label`
    color: var(--text-color);
    /* margin-right: 15px; */
`;

export const Input = styled.input`
    margin-top: 10px;

    &[type="text"], &[type="number"] {
        width: 100%;
        /* height: 30px; */
        border-radius: 5px;
        border: 1px solid #ced4da;
        padding: 7px 12px 6px 12px;
    }
    
    &[type="radio"] { 
        display: block;
        cursor: pointer;
        margin: 0 5px 0 0;
    }

    &:first-child {
        @media(max-width: 950px) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    }

    &:focus {
        outline: none;
    }
`;

export const InputArea = styled.div`
    display: flex;
    
    div:last-child {
        margin-top: 10px;
        display: none;

        @media(max-width: 950px) {
            display: flex;
        }
    }


`;

export const InputRadio = styled.input`
    /* cursor: pointer; */
`;


export const SelectArea = styled.div`
    display: flex;
    margin-top: 10px;
    flex: 1;
`;

export const Select = styled.select<{clicked?: boolean}>`
    width: 100%;
    /* height: 30px; */
    background-color: #fff;
    border: 1px solid #ced4da;
    padding: 6px 12px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    color: #000;
    /* color: ${props => props.clicked ? '#000' : 'gray'};; */

    &:focus {
        outline: none;
    }

    option {
        color: #000;
    }

    &:invalid, &option[value=""] {
        color: gray;
    }
    
`;

export const Option = styled.option`

`;

export const ButtonAddon = styled.div`
    width: 35px;
    height: 35px;
    background-color: #fff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 1px solid var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.15s linear;

    &:hover{
        background-color: var(--secondary-color);
        .icon {
            color: #fff;
        }
    }

    .icon {
        width: 60%;
        height: auto;
        color: var(--secondary-color);
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

export const FooterLeftArea = styled.div`
    display: flex;

`;

export const FooterRightArea = styled.div`
    
`;
