import { Link } from "react-router-dom";
import styled from "styled-components";


export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 550px) {
        margin-bottom: 15px;
        h1 {
            margin: 0;
            margin-bottom: 10px;
        }

        .headerRightInfo {
            margin: 0;
        }
        
        .searchInput {
            margin: 0;
        }
        
    }
`;

export const Title = styled.h1`
    color: var(--text-color);
    margin-top: 0;
    margin-bottom: 20px;
    font-size: var(--page-title-font-size);
    font-weight: var(--page-title-font-weight);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    height: 45px;
    border-radius: 15px;
    
`;

export const Button = styled.a`
    height: 45px;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 600;
    border-radius: 15px;
    text-decoration: none;
    padding: 0 10px;
    cursor: pointer;

    :nth-child(1){
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    :nth-child(2){
        margin: 0 2px 0 2px;
        border-radius: 0px;
    }

    :nth-child(3){
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    &.modalButton {
        border-radius: 15px;
    }

    @media(max-width: 950px) {
        height: 35px;
        font-size: 11px;
    }
`;


export const Container = styled.div`
    height: 100%;
    border-radius: 30px;
    padding: 8px;
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow); 
    overflow-x: auto;
    border: 1px solid var(--footer-color);
    
    transition: background-color 0.1s linear;
`;

export const Table = styled.table`
    width: 100%;
    background-color: var(--main-bg);
    border-radius: 15px;
    color: var(--text-color);
    border-collapse: separate;
    transition: background-color 0.1s linear;
    
    thead tr {
        height: 50px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }

    thead tr th, tbody tr td{
        text-align: left;
        padding: 10px 16px;
        border-collapse: collapse;
        border-bottom: 1px solid var(--footer-color);
        transition: border 0.1s linear;
        border-bottom: none;
        &:last-child {
            padding-left: 0;
            display: flex;
        }
    }

    thead tr th {
        border-bottom: none;

        &.xsm {
            width: 3%;
        }

        &.sm {
            width: 9%;
        }

        &.md {
            width: 13%;
        }
        
        &:last-child {
            width: 3%;
        }
        
    }

    tbody tr:hover {
        transition: all 0.1s linear;
        background-color: var(--item-hover-bg);        
    }

`;

export const ActionButton = styled.div<{bgcolor: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: ${(props) => props.bgcolor};
    cursor: pointer;

    .iconEdit {
        width: 15px;
        height: auto;
        color: #fff;
    }

    .iconTrash {
        width: 12px;
        height: auto;
        color: #fff;
    }

    &:first-child {
        margin: 0 5px;
    }
`;

export const FooterModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ModalContainer = styled.div`
    /* display: flex; */
`;

export const Input = styled.input`

`;