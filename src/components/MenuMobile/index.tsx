import * as C from './styles';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

type Props = {
    openedMenu: boolean;
    setOpenedMenu: React.Dispatch<React.SetStateAction<boolean>>;
    innerRef: React.MutableRefObject<any>;
}

export const MenuMobile = ({openedMenu, setOpenedMenu, innerRef}: Props) => {

    const handleOpenMenu = (e: any) => {
        setOpenedMenu(!openedMenu);
    }

    return (
        <C.Container >
            {/* <C.MenuButton ref={innerRef} openedMenu={openedMenu} onClick={handleOpenMenu}> <FontAwesomeIcon className="icon_menu" icon={faBars}/> </C.MenuButton> */}
            <C.MenuButton ref={innerRef} > <FontAwesomeIcon className="icon_menu" icon={faBars}/> </C.MenuButton>
            
            <C.Avatar className="avatar_mobile">
                <C.AvatarImg src={'/assets/img/avatar_default_female.png'}/>
            </ C.Avatar>
        </C.Container>
    );
}