import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
    
    
    @media(max-width: 550px) {
        position: static;
    }
`;

export const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0 35px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow);
    transition: background-color 0.1s linear;
    
    @media(max-width: 550px) {
        width: calc(100% - 70px);
        border-radius: 30px;
        min-height: 85px;
        margin: auto;
        margin-top: 45px;
    }
`;

export const LeftInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.div`
    width: 50px;
    height: 50px;
    min-width: 50px;
    background-color: #999;
    border-radius: 15px;
    margin-right: 20px;

    @media(max-width: 950px) {
        width: 45px;
        height: 45px;
        min-width: 45px;
        border-radius: 5px;
    }

    @media(max-width: 550px) {
        width: 35px;
        height: 35px;
        min-width: 35px;
        border-radius: 5px;
    }
`;

export const LogoImg = styled.img`
    width: 100%;
    border-radius: 15px;
    object-fit: cover;

    @media(max-width: 550px) {
        border-radius: 5px;
    }
`;

export const Title = styled(Link)`
    color: var(--text-color);
    font-size: 24px;
    text-decoration: none;

    @media(max-width: 950px) {
        font-size: 20px;
    }
`;

export const RightInfo = styled.div`
    display: flex;
    align-items: center;

    span {  
        display: flex;
        align-items: center;

        .icon {
            width: 18px;
            height: auto;
            margin-left:20px;

            @media(max-width: 550px) {
                width: 15px;
                height: auto;
            }
        }
    }
`;

export const DayInfo = styled.div`
    color: var(--text-color);
    margin-right: 20px;
    font-size: 18px;

    @media(max-width: 950px) {
        font-size: 14px;
    }

    @media(max-width: 550px) {
        display: none;
    }
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    min-width: 40px;
    background-color: #999;
    border-radius: 30px;
    
    @media(max-width: 550px) {
        display: none;
    }
`;

export const AvatarImg = styled.img`
    width: 100%;
    border-radius: 30px;
    object-fit: cover;
    cursor: pointer;
`;

export const DropdownOption = styled.div`
    white-space: nowrap;
    padding-bottom: 7px;
    cursor: pointer;
    
    &:last-child {
        padding: 0;
    }

    a {
        text-decoration: none;
        color: var(--text-color);
    }
`;

export const ToggleArea = styled.div<{theme: string}>`
    width: 55px;
    height: 30px;
    border-radius: 50px;
    padding: 5px;
    background-color: ${(props) => props.theme == 'light' ? '#e9e9ea' : '#000' }; // fqazed cond baseado no tema atual via props
    display: flex;
    align-items: center;
    position: relative;
`;

export const ToggleCircle = styled.div<{theme: string}>`
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: var(--box-shadow);
    position: absolute;
    right: ${(props) => props.theme == 'light' ? '26px' : '5px'};
    transition: all 0.1s linear;
`;

export const Teste = styled.div`
    
`;

// export const Icon = styled.div`
//     .icon {
//         display: block;
//         color: var(--text-color);
//         width: 18px;
//         height: auto;
//         margin-left:20px;
//         cursor: pointer;

//         @media(max-width: 550px) {
//             width: 15px;
//             height: auto;
//         }
//     }
// `;

// export const MenuButton = styled.div`
//     width: 35px;
//     height: 35px;
//     background-color: #E9E9E9;
//     border-radius: 10px;
//     cursor: pointer;
    
//     @media(max-width: 550px) {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     }
// `;







// export const Title = styled.div`

// `;