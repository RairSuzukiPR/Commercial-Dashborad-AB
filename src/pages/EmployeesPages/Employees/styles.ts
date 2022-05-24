import styled from "styled-components";
import { SearchInput } from "../../../components/SearchInput";
import { Link } from "react-router-dom";


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

    span {
        margin-right: 15px;
        height: 45px;
        /* background-color: red; */
        .icon {
            display: block;
            color: var(--text-color);
            width: 18px;
            height: auto;
            margin-top: 15px;
            cursor: pointer;

            @media(max-width: 550px) {
                width: 15px;
                height: auto;
            }
        }
    }

    @media(max-width: 950px) {
        margin-top: 15px;
    }

    @media(max-width: 550px) {
        justify-content: space-between;
    }
`;

// export const Icon = styled.div`
//     .icon {
//         display: block;
//         color: var(--text-color);
//         width: 18px;
//         height: auto;
//         margin: 15px 20px 0 0;
//         cursor: pointer;

//         @media(max-width: 550px) {
//             width: 15px;
//             height: auto;
//         }
//     }
// `;

export const ButtonLink = styled(Link)`
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

    @media(max-width: 950px) {
        height: 35px;
        font-size: 11px;
    }
`;

export const SearchInputStyled = styled(SearchInput)`
    @media(max-width: 950px) {
        
    }
`;

export const ProgressArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ProgressBarBase = styled.div`
    width: 100%;
    height: 10px;
    background-color: var(--menu-item-inactive-color);
    border-radius: 10px;
`;

export const ProgressBar = styled.div`
    /* position: absolute; */
    width: 40%;
    height: 10px;
    background-color: var(--primary-color);
    border-radius: 10px;
`;

export const ProgessPercentage = styled.div`
    margin-left: 15px;
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
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }

    thead tr th, tbody tr td{
        text-align: left;
        padding: 10px 16px;
        border-collapse: collapse;
        border-bottom: 1px solid var(--footer-color);
        transition: border 0.1s linear;
        
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


export const DropdownLabel = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    white-space: nowrap;
    color: var(--text-color);
    font-weight: 500;
    margin-bottom: 15px;
`;

export const MonthPickerArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 185px;
    height: 61px;
    border-radius: 10px;
`;

export const MonthPickerItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: var(--footer-color);
    font-weight: 500;
    cursor: pointer;

    &:nth-child(1) {
        border-top-left-radius: 10px;
    }

    &:nth-child(6) {
        border-top-right-radius: 10px;
    }

    &:nth-child(7) {
        border-bottom-left-radius: 10px;
    }

    &:nth-child(12) {
        border-bottom-right-radius: 10px;
    }

    &:nth-child(4) {
        background-color: var(--item-hover-bg);
        border: 1px solid var(--text-color);
    }

    // props => props.index
    /* &:nth-child(}) {
        background-color: var(--item-hover-bg);
        border: 1px solid var(--text-color);
    } */
`;




// export const Container = styled.div`

// `;