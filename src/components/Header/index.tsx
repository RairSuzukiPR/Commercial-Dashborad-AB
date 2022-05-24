import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { setThemeStatus } from '../../redux/reducers/themeReducer';
import { Dropdown } from '../Dropdown';
import { Link } from 'react-router-dom';


export const Header = () => {

    const dispatch = useDispatch();

    const theme = useAppSelector(state => state.themeRed);
    const switchTheme = (newTheme: string) =>  dispatch(setThemeStatus(newTheme));

    const handleSwitchTheme = () => {
        switchTheme(theme.status === 'light' ? 'dark' : 'light');
    }


    return(
        <C.Container>
            
            <C.TopBar>
                <C.LeftInfo>
                    <C.Logo>
                        <C.LogoImg src={'/assets/img/logoSmall.jpg'}/>
                    </ C.Logo>
                    <C.Title to='/home'>Alamoa Boutique</ C.Title>
                </C.LeftInfo>

                <C.RightInfo>
                    {/* <C.DayInfo>Segunda Feira, 1 Janeiro de 2022 | 10:30</C.DayInfo> */}
                    <Link to='/perfil'>
                        <C.Avatar>
                            <C.AvatarImg src={'/assets/img/avatar_default_female.png'}/>
                        </C.Avatar>
                    </Link>
                                   
                    <Dropdown icon={<FontAwesomeIcon className="icon" icon={faBell} />} badgeContent='3' headerDropdown= {true} hover={true}>
                        <C.DropdownOption className='opt'>Aviso 1</C.DropdownOption>
                        <C.DropdownOption>Aviso 2</C.DropdownOption>
                        <C.DropdownOption>Aviso 3</C.DropdownOption>
                    </Dropdown>

                    <Dropdown icon={<FontAwesomeIcon className="icon" icon={faChevronDown}/>} headerDropdown= {true}>
                        <C.DropdownOption onClick={handleSwitchTheme}>
                            <C.ToggleArea theme={theme.status}>
                                <C.ToggleCircle theme={theme.status}></C.ToggleCircle>
                            </C.ToggleArea>
                        </C.DropdownOption>
                        <C.DropdownOption><Link to='/logout'>Sair</Link></C.DropdownOption>
                    </Dropdown>
                </C.RightInfo>
            </C.TopBar>

        </C.Container>
    );
}