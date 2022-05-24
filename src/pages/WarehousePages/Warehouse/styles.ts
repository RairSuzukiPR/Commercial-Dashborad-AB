import styled from "styled-components";
import { SearchInput } from "../../../components/SearchInput";
import { Link } from "react-router-dom";


export const Container = styled.div`
    height: 100%;
    border-radius: 30px;
    padding: 5px;
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow); 
    overflow-x: auto;
    border: 1px solid var(--footer-color);
    transition: background-color 0.1s linear;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 550px) {
        flex-direction: column;
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

export const HeaderRightInfo = styled.div`
    display: flex;
    align-items: top;
    flex-wrap: wrap;

    .searchInput {
        /* margin: 0 15px; */
    }

    @media(max-width: 950px) {
        margin-top: 15px;
    }

    @media(max-width: 550px) {
        justify-content: space-between;
    }
`;

export const RightSideButtons = styled.div`
    display: flex;
`;

export const FilteredSearchButton = styled.div`
    width: 45px;
    height: 45px;
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow);
    margin-left: 15px;
    border-radius: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.15s linear;

    .icon {
        width: 60%;
        height: auto;
        color: var(--text-color);
    }

    @media(max-width: 950px) {
        width: 35px;
        height: 35px;
        border-radius: 10px;
    }
`;

export const ButtonLink = styled(Link)`
    height: 45px;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 600;
    border-radius: 15px;
    margin-left: 15px;
    text-decoration: none;
    padding: 0 10px;

    @media(max-width: 950px) {
        height: 35px;
        font-size: 11px;
    }
`;

export const SearchInputStyled = styled(SearchInput)`
    @media(max-width: 950px) {
        
    }
`;

export const Table = styled.table`
    width: 100%;
    background-color: var(--main-bg);
    border-radius: 15px;
    color: var(--text-color);
    border-collapse: separate;
    transition: background-color 0.1s linear;
    
    thead tr {
        /* box-shadow: 0 5px 20px 0px rgb(0 0 0 / 10%); */
        height: 50px;
    }

    thead tr th, tbody tr td{
        text-align: left;
        padding: 10px 16px;
        border-collapse: collapse;

        &:last-child {
            padding-left: 0;
        }
    }

    thead tr th {
        border-bottom: none;

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

    tbody tr:last-child td {
        border-bottom: none;
    }

    tbody tr td:last-child {
        display: flex;
    }

    tbody tr:nth-child(odd) {
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







// export const Container = styled.div`

// `;