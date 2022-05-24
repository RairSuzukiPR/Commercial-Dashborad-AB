import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--secondary-bg);
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    transition: background-color 0.1s linear;
`;

export const PageArea = styled.div`
    display: flex;
`;

// export const Menu = styled.div<{menu: boolean}>`
export const Menu = styled.div`
    position: fixed;
    top: 105px;
    left: 35px;
    width: 11%
    max-width: 240px; 
    height: calc(100vh - 140px);
    background-color: var(--main-bg);
    margin-right: 35px;
    padding: 30px 10px;
    box-shadow: var(--box-shadow);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    transition: background-color 0.1s linear;
      

    @media(max-width: 950px) {
        width: 80px;
        border-radius: 20px;
        transition: background-color 0.1s linear;
    }

    @media(max-width: 550px) {
        /* display: ${props => props ? 'flex' : 'none'}; .menu */
        /* display: none; */
        align-items: stretch;
        padding-left: 25px;
        position: absolute;
        margin: 0;
        border-top-left-radius: 0px; 
        border-bottom-left-radius: 0px; 
        width: 80vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 900;
        font-size: 30px;
        /* transition: background-color 0.1s linear; */

        transform-origin: left;
        transform: scale(0, 1);
        transition: transform 0.2s ease 0s;

        &.menuActive {
            transform: scale(1, 1);
            transition: transform 0.2s ease 0s;
        }
    }
`;

export const TopMenuItems = styled.div`
    height: 60%;
    max-height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const BottomMenuItems = styled.div`
    height: 30%;
    max-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const PageBodyArea = styled.div`
    display: flex;
    flex: 1; 
    flex-direction: column;
    margin: 35px;
    margin-left: var(--page-menu-lg-width);

    @media (max-width: 950px) {
        margin-left: var(--page-menu-sm-width);
    }

    @media (max-width: 550px) {
        margin: 35px;
    }
    
`;

// export const PageTitle = styled.h1`
//     margin: 0 0 20px 0;
//     font-size: var(--page-title-font-size);
//     font-weight: var(--page-title-font-weight);
// `;

// USAR NA PAGE em si
// export const PageBody = styled.div`
//     height: 100%;
//     padding: 30px;
//     border-radius: 30px;
//     background-color: var(--main-bg);
//     box-shadow: var(--box-shadow); 
// `;

/* ${(props) => props.isOpen && `
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 900;
`} */

/* @media(max-width: 550px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 900;
} */