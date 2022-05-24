import styled from "styled-components";

export const Container = styled.div`
    display: none;
    
    @media(max-width: 550px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(100% - 40px);
        padding-top: 30px;
        margin: 0 20px;
        
        .avatar_mobile{
            display: block;
            width: 35px;
            min-width: 35px;
            height: 35px;
        }
    }
`;

// export const MenuButton = styled.button<{openedMenu: boolean}>`
export const MenuButton = styled.button`
    width: 35px;
    height: 35px;
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow);
    border-radius: 10px;
    cursor: pointer;
    border:none;

    .icon_menu {
        color: var(--text-color);
        width: 13px;
        height: auto;
    }

    @media(max-width: 550px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Avatar = styled.div`
    width: 50px;
    height: 50px;
    min-width: 50px;
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