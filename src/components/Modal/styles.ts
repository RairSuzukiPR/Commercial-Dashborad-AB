import styled from 'styled-components';

export const Container = styled.div<{status: boolean, modalClassName: string}>`
    * {
        @keyframes modalAnimationBg {
            to {
                opacity: 1;
            }
        }
        @keyframes modalAnimationContent {
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        /* .animateBg {
            animation: modalAnimationBg 0.4s forwards ease;
        }

        .animateBgOut {
            background-color: red;
            animation: modalAnimationBg 1s forwards ease;
        } */
    }

    display: ${(props) => props.status? 'flex' : 'none'};
    position: fixed;   
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 900;
    justify-content: center;
    overflow-y: auto;
    
    
    &.animateBg {
        /* opacity: 1; */
        /* background-color: green; */
        animation: modalAnimationBg 0.4s forwards ease;
    }

    &.animateBgOut {
        opacity: 0;
        background-color: red;
        animation: modalAnimationBg 1s forwards reverse ease;
    }
`;

export const ModalContent = styled.div<{status: boolean, modalClassName: string}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 30px;
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow);
    margin: auto;
    width: 800px;
    transform: translateY(-50px);
    opacity: 0;

    animation: modalAnimationContent 0.4s forwards ease;
    /* &.animateContent {
        animation: modalAnimationContent 0.4s forwards ease;
    }

    &.animateContentOut {
        animation: modalAnimationContent 1s forwards reverse ease;
    } */
    
    @media(max-width: 950px) {
        max-width: 600px;
    }

    @media(max-width: 550px) {
        max-width: 90vw;
    } 
`;

export const ModalBodyArea = styled.div`
    padding: 30px;
    height: 100%;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const Title = styled.div`
    color: var(--text-color);
    font-size: 20px;
`;

export const CloseModalIcon = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    width: 25px;
    height: 25px;
    color: gray;
    cursor: pointer;

    &:hover {
        color: var(--text-color);
    }
`;

export const ModalBody = styled.div`

`;

export const ModalFooter = styled.div`
    width: 100%;
    background-color: var(--footer-color);
    padding: 15px 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;



// export const Container = styled.div`

// `;