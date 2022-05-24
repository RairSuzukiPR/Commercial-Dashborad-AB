import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
    $isActive: boolean;
}

export const Container = styled.div`

`;

export const LinkArea = styled(Link)<{$isActive: boolean}>`
    display: flex;
    width: 210px;
    font-size: 16px;
    text-decoration: none;
    color: ${props => props.$isActive ? `var(--text-color)` : `var(--menu-item-inactive-color)`}; 
    border-radius: 10px;
    padding: 10px 20px;
    transition: background-color 0.07s linear;
    
    &:hover{
        background-color: var(--item-hover-bg);
    }
    
    @media(max-width: 950px) {
        font-size: 15px;
        width: auto;
        background-color: ${props => props.$isActive ? `var(--item-hover-bg)` : 'transparent'};
    
    }

    @media(max-width: 550px) {
        width: auto;
        font-size: 22px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        background-color: transparent;
    }
    
`;

export const Icon = styled.div<{$isActive: boolean}>`
    .icon_menu {
        color: ${props => props.$isActive ? `var(--text-color)` : `var(--menu-item-inactive-color)`};
        width: 18px;
        height: auto;
        margin-right: 15px;


        @media(max-width: 950px) {
            width: 18px;
            margin: 0;
        }

        @media(max-width: 550px) {
            width: 20px;
        }
    }

    .icon_menu_book {
        color: ${props => props.$isActive ? `var(--text-color)` : `var(--menu-item-inactive-color)`};
        width: 14px;
        height: auto;
        margin-right: 15px;
        margin-left: 4px;

        @media(max-width: 950px) {
            width: 13px;
            margin: 0;
            margin-left: 4px;
        }

        @media(max-width: 550px) {
            margin-left: 5px;
        }
    }

    .icon_menu_file {
        color: ${props => props.$isActive ? `var(--text-color)` : `var(--menu-item-inactive-color)`};
        width: 13px;
        height: auto;
        margin-right: 15px;
        margin-left: 4px;

        @media(max-width: 950px) {
            width: 13px;
            margin: 0;
            margin-left: 4px;
        }

        @media(max-width: 550px) {
            margin-left: 5px;
        }
    }

`;

export const Title = styled.div`
    @media(max-width: 950px) {
        display: none;
    }

    @media(max-width: 550px) {
        display: block;
        margin-left: 15px;
    }
`;

