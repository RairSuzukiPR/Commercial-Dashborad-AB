import * as C from './styles';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';


type Props = {
    children: any;
    title: string;
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
    footer?: JSX.Element;
}

export const Modal = ({children, title, status, setStatus, footer}: Props) => {

    useEffect(()=> {
        if (status) {
            // document.getElementById(`modal${title.split(' ')[1]}`)?.classList.remove('animateBgOut');
            console.log('abriu');
            document.getElementById(`modal${title.split(' ')[1]}`)?.classList.toggle('animateBg');
            document.getElementById(`modal${title.split(' ')[1]}Content`)?.classList.toggle('animateConent');
        } else {
            console.log('fechou');
        }
    }, [status])
    
    const handleModalClick = (e: any) => {
        if(e.target.classList.contains('modalBg')){
            setStatus(false);
        }
    }

    const handleCloseModalClick = () => {
        setStatus(false);
    }

    return (
        <C.Container id={ `modal${title.split(' ')[1]? title.split(' ')[1] : ''}` } status={status} onClick={handleModalClick} className='modalBg' modalClassName={'modal' + title.split(' ')[1]} >

            <C.ModalContent status={status} id={`modal${title.split(' ')[1]? title.split(' ')[1] : ''}Content`} modalClassName={'modal' + title.split(' ')[1] + 'Content'}>
                <C.ModalBodyArea>
                    <C.ModalHeader>
                        <C.Title>{title}</C.Title>
                        <C.CloseModalIcon onClick={handleCloseModalClick}><FontAwesomeIcon className="icon" icon={faTimes}/></C.CloseModalIcon>
                    </C.ModalHeader>
                    <C.ModalBody>
                        {children}
                    </C.ModalBody>
                </C.ModalBodyArea>

                <C.ModalFooter>
                    {
                        footer == null? 
                            <div> Conteudo default </div> : footer
                    }
                </C.ModalFooter>
            </C.ModalContent>
            
        </C.Container>
    )
}
