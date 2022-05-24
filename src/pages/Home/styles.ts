import { Link } from "react-router-dom";
import styled from "styled-components";
// import { HomePanelItem } from "../../components/HomePanelItem";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    /* height: calc(100vh - 200px);    */

    @media (min-width: 951px) {
        /* height: calc(100vh - 200px);    */
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        .estoque{
            grid-column: 1/2;
            grid-row: 2/4;
        }
        
        .agenda{
            grid-column: 2/3;
            grid-row: 2/4;
        } 
    }

    @media (min-width: 1300px) {
        grid-template-columns: 2fr 2fr 2fr ;
        grid-gap: 20px;
        .estoque{
            grid-column: 2/3;
            grid-row: 1/3;
        }

        .agenda{
            grid-column: 3/4;
            grid-row: 1/3;
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

export const HomePanelItem = styled.div`
    min-height: 430px;
    background-color: var(--main-bg);
    border-radius: 30px;
    padding: 30px;
    box-shadow: var(--box-shadow); 
    transition: background-color 0.1s linear;
    
    &.vendas {
        
    }
`;

export const TopInfoArea = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TopLeftInfo = styled.div`
    display: flex;
    align-items: center;

    .icon_sales {
        color: var(--primary-color);
        width: 15px;
        height: auto;
        margin-left: 10px;
    }
`;

export const SalesPercentage = styled.div`
    color: var(--primary-color);
    font-size: 12px;
    font-weight: 600;
    margin: 3px;
`;

export const TopRightInfo = styled.div`
    display: flex;
    align-items: center;

    .icon_eye {
        color: var(--text-color);
        width: 24px;
        height: auto;
        cursor: pointer;
    }

    span {
        .icon_arrow {
            color: var(--text-color);
            margin-top: 5px;
            margin-left: 15px; 
            width: 20px;
            height: auto;
            cursor: pointer;
        }
    }
`;

export const TitleHomePanel = styled(Link)`
    font-size: 20px;
    font-weight: 600;
    color: var(--text-color);
    text-decoration: none;
`;

export const HomePanelBody = styled.div`
    margin-top: 20px;
    height: 83%;
    display: flex;
    color: var(--text-color);
`;

export const WareHouseInfoArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const WarehouseTopInfo = styled.div`


`;

export const WarehouseBottomInfo = styled.div`

`;

export const Amounts = styled.div`

`;

export const DropdownOption = styled.div`
    width: 100%;
    white-space: nowrap;
    margin-bottom: 7px;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 10px;
    
    &:last-child {
        margin: 0;
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


// export const HomePanelItemStyled = styled(HomePanelItem)`

// `;
