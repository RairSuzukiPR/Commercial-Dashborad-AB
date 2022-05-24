import styled from "styled-components";

interface Props  {
    isActive: boolean;
    isResponsive: boolean;
}

export const Container = styled.div`
    display:flex;
    
    /* background-color: red; */
`;

export const Icon = styled.div`
    cursor: pointer;
    height: 45px;
    display: flex;
    align-items: center;

    .icon {
        position: absolute;
        color: var(--text-color);
        width: 25px;
        height:auto;
        margin-left: 12px;

        @media (max-width: 950px) {
            width: 20px;
            margin-left: 8px;
            margin-top: -5px;
        }
    }
`;

export const SearchInput = styled.input<{ isActive: boolean, isResponsive: boolean}>`
    background-color: var(--main-bg);
    width: ${(props) => (props.isActive ? 300 : 0)}px;
    font-size: 15px;
    height: 45px;
    border: 0;
    border-radius: 17px;
    /* background-image: url('/assets/img/search.png');
    background-size: 25px;
    background-repeat: no-repeat;
    background-position: 14px center; */
    padding-left: 50px; 
    outline: 0;
    transition: all ease .18s;
    box-shadow: var(--box-shadow); 
    color: var(--text-color);
    cursor: pointer;

    &:focus {
        cursor: text;
    }


    @media(max-width: 950px) {
        width: ${(props: Props) => (props.isActive ? 220 : 0)}px;
        font-size: 12px;
        height: 35px;
        border-radius: 10px;
        background-size: 15px;
        padding-left: 35px;
        background-position: 11px center;
    }

    @media(max-width: 550px) {
        width: ${(props: Props) => (props.isActive ? 160 : 0)}px;
        font-size: 12px;
        height: 35px;
        border-radius: 10px;
        background-size: 15px;
        padding-left: 35px;
        background-position: 11px center;
    }

    
/* PQ N FUNC
    ${(props: Props) => props.isResponsive && `
        @media(max-width: 950px) {
            width: ${(isActive: boolean) => (isActive ? 220 : 0)}px;
            font-size: 12px;
            height: 35px;
            border-radius: 10px;
            background-size: 15px;
            padding-left: 35px;
            background-position: 11px center;
        }
    
        @media(max-width: 550px) {
            width: ${(isActive: boolean) => (isActive ? 250 : 0)}px;
            font-size: 12px;
            height: 35px;
            border-radius: 10px;
            background-size: 15px;
            padding-left: 35px;
            background-position: 11px center;
        }
    `
    } */

`;