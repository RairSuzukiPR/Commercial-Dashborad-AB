import styled from 'styled-components';

export const Container = styled.div`

`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border: 1px solid var(--secondary-color);
    border-radius: 10px;
    color: var(--secondary-color);
    transition: all 0.15s linear;
    cursor: pointer;
    
    &:hover {
        color: #fff;
        background-color: var(--secondary-color);
    }
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    padding: 6px 12px;
    color: #fff;
    background-color: var(--primary-color);
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
`;

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid #d5d9de;
    color: var(--text-color);
    border-collapse: separate;
    
    thead tr {
        box-shadow: 0 5px 20px 0px rgb(0 0 0 / 10%);
        height: 40px;
    }

    thead tr th, tbody tr td{
        text-align: left;
        padding: 8px 16px;
        border-collapse: collapse;
        border-bottom: 1px solid #f2f2f2;

        &:last-child {
            padding-left: 0;
        }
    }

    thead tr th {
        border-bottom: none;

        &:last-child {
            width: 8%;
        }
        
    }

    tbody tr:last-child td {
        border-bottom: none;
    }

    tbody tr td:last-child {
        display: flex;
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
        margin-right: 5px;
    }
`;

// export const Container = styled.div`

// `;

// export const Container = styled.div`

// `;

// export const Container = styled.div`

// `;