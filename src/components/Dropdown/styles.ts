import styled from "styled-components";


export const Container = styled.span`
    position: relative;
    z-index: 99;
`;

export const Button = styled.button`
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;

    .icon {
        display: block;
        color: var(--text-color);
        cursor: pointer;
    }
`;

export const Badge = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -12px;
    right: -10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--text-color);
    

`;

export const BadgeLabel = styled.div`
    width: 100%;
    font-size: 9px;
    font-weight: 600;
    color: var(--main-bg);
    margin-top: 2px;
    
`;

export const BodyArea = styled.div<{headerDropdown?: boolean}>`
    min-width: 120px;
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: ${props => props.headerDropdown ? '15px' : '4px'};;
    border: 2px solid var(--footer-color);
    border-radius: 15px;
    /* top: calc(100% + 40px); */
    top: ${props => props.headerDropdown ? `calc(100% + 40px)` : `calc(100% + 5px)`};
    right: -20px;
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow);
    color: var(--text-color);
    
    transform-origin: top;
    transform: scale(0);
    transition: transform 0.1s ease 0s;

    &.active{
        transform: scale(1);
        transition: transform 0.1s ease 0s;
    }

    @media (max-width: 550px) {
        top: ${props => props.headerDropdown ? `calc(100% + 50px)` : `calc(100% + 5px)`};
    }

    /* &:before { 
        content: '';
        display: block;
        position: absolute;
        margin-top: -31.5px;
        margin-left: 35px;
        border: 8px solid;
        border-color: transparent transparent var(--main-bg) transparent;
    }  */
    
`;

export const Teste = styled.div`
    position: relative;
`;

export const BodyArrow = styled.div<{headerDropdown?: boolean}>`
    width: 0;
    height: 0;
    position: absolute;
    top: ${props => props.headerDropdown ? '-24.5px' : '-13px'};
    right: ${props => props.headerDropdown ? '3px' : '13px'};
    border-style: solid;
    border-width: 0px 10px 10px 10px;
    border-color:  transparent transparent var(--main-bg) transparent;
    filter: drop-shadow(0px -1.5px 2px rgba(0, 0, 0, .2));
`;


export const Body = styled.div<{hover? : boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    .opt:hover {
        background-color: ${props => props.hover ? `var(--item-hover-bg)` : 'transparent'};
    }
    

`;