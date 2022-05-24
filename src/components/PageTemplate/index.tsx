import * as C from './styles';
import { Header } from '../Header';
import { useEffect, useRef, useState } from 'react';
import { MenuMobile } from '../MenuMobile';
import { MenuItem } from '../MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTruckLoading, faUsers, faChartLine, faShoppingCart, faFileAlt, faUser, faCog, faPowerOff, faSignOutAlt, faBook } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { setToken } from './../../redux/reducers/userReducer';

type Props = {
    children: any;
    pageActive?: string;
}

const clickOutsideRef = (content_ref: React.MutableRefObject<any>, toggle_ref: React.MutableRefObject<any>) => {
	document.addEventListener('mousedown', (e: any) => {
		// console.log(e.target);
		if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
			content_ref.current.classList.toggle('menuActive')
            console.log(content_ref.current.classList)
			// console.log('1if');
		} else {
			if(content_ref.current && !content_ref.current.contains(e.target)){
				content_ref.current.classList.remove('menuActive')
				// console.log('2if');
			}
		}
	})
}

export const PageTemplate = ({children, pageActive}: Props) => {
    const content_el = useRef(null);
	const toggle_el = useRef(null);
    clickOutsideRef(content_el, toggle_el);

    // const renderedCount = useRef(0);
    // useEffect(()=> {
    //     renderedCount.current += 1;
    //     console.log(renderedCount.current);
    // });

    const theme = useAppSelector(state => state.themeRed);
    
    const [openedMenu, setOpenedMenu] = useState(false);
    
    const dispatch = useDispatch();

    const handleMenu = (e: any) => {
        if (openedMenu){
            if (!e.target.classList.contains('menuBg')) {
                setOpenedMenu(false);
            }
        }
    }

    return(
        // <C.Container onClick={handleMenu} className={`theme-${theme.status}`}>
        <C.Container className={`theme-${theme.status}`}>

            <MenuMobile innerRef={toggle_el} openedMenu={openedMenu} setOpenedMenu={setOpenedMenu}/>
            <Header/>
        
            {/* <C.Menu ref={content_el} menu={openedMenu} className="menuBg"> */}
            <C.Menu ref={content_el} className="">

                <C.TopMenuItems>
                    <MenuItem title="Home" link={"/home"}>
                        <FontAwesomeIcon className="icon_menu" icon={faHome}/>
                    </MenuItem>

                    <MenuItem title="Caixa" link={"/caixa"} pageActive={pageActive}>
                        <FontAwesomeIcon className="icon_menu_book" icon={faBook}/>
                    </MenuItem>

                    <MenuItem title="Estoque" link={"/estoque"} pageActive={pageActive}>
                        <FontAwesomeIcon className="icon_menu" icon={faTruckLoading}/>
                    </MenuItem>
                    
                    <MenuItem title="Funcionários" link={"/funcionarios"} pageActive={pageActive}>
                        <FontAwesomeIcon className="icon_menu" icon={faUsers}/>
                    </MenuItem>

                    <MenuItem title="Financeiro" link={"/financeiro"} pageActive={pageActive}>
                        <FontAwesomeIcon className="icon_menu" icon={faChartLine}/>
                    </MenuItem>

                    <MenuItem title="Relatórios" link={"/relatorios"} pageActive={pageActive}>
                        <FontAwesomeIcon className="icon_menu_file" icon={faFileAlt}/>
                    </MenuItem>
                </C.TopMenuItems>

                <C.BottomMenuItems>
                    <MenuItem title="Perfil" link={"/perfil"}>
                        <FontAwesomeIcon className="icon_menu" icon={faUser}/>
                    </MenuItem>
    
                    <MenuItem title="Configurações" link={"/configuracoes"}>
                        <FontAwesomeIcon className="icon_menu" icon={faCog}/>
                    </MenuItem>
                    
                    <div onClick={()=> {console.log('logout'); dispatch(setToken(('')))}}>
                        <MenuItem title="Sair" link={"/logout"}>
                            <FontAwesomeIcon  className="icon_menu" icon={faSignOutAlt}/>
                        </MenuItem>
                    </div>

                </C.BottomMenuItems>
            </C.Menu>
            
            <C.PageBodyArea>
                {children}
            </C.PageBodyArea>

        </C.Container>
    );
}