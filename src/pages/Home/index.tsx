import * as C from './styles';
import { PageTemplate } from '../../components/PageTemplate';
import { HomePanelItem } from '../../components/HomePanelItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEye, faEyeSlash, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { setName, setAge } from '../../redux/reducers/userReducer';
import { setSalesVisibility, setWhareHouseVisibility} from '../../redux/reducers/homePanelVisibReducer';
import { api } from './../../api';
import { Dropdown } from '../../components/Dropdown';
import { useState } from 'react';


export const Home = () => {
    const dispatch = useDispatch();
    const isVisible = useAppSelector(state => state.visibilityRed);

    const handleVisibleSalesPanel = () => {
        dispatch(setSalesVisibility(!isVisible.salesVisibility))
    }

    const handleVisibleWharehousePanel = () => {
        dispatch(setWhareHouseVisibility(!isVisible.wharehouseVisibility))
    }

    // const dispatch = useDispatch();
    // const user = useAppSelector(state => state.userRed);
    // const theme = useAppSelector(state => state.themeRed);

    // const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     changeName(e.target.value);
        // dispatch(setName(e.target.value));
    // }

    // const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     dispatch(setAge(parseInt(e.target.value)));
    // }

    // const changeName = (newName: string) => {
    //     dispatch(setName(newName));
    // }
    
    return (
        <PageTemplate>
            <C.Title>Home</C.Title>
            {/* <C.Title>Home {user.name} {user.age} {theme.status}</C.Title>
            <input type="text" value={user.name} onChange={handleNameInput} />
            <input type="text" value={user.age} onChange={handleAgeInput} /> */}
            {/* {console.log(api.getPong())} */}
            <C.Container>
                <C.HomePanelItem className='vendas'>
                    <C.TopInfoArea>
                        <C.TopLeftInfo>
                            <C.TitleHomePanel to='/vendas'>Vendas</C.TitleHomePanel>
                            <FontAwesomeIcon className="icon_sales" icon={faCaretUp}/>
                            <C.SalesPercentage>12,5%</C.SalesPercentage>
                        </C.TopLeftInfo>
                        <C.TopRightInfo>
                            {
                                isVisible.salesVisibility?
                                    <FontAwesomeIcon onClick={handleVisibleSalesPanel} className="icon_eye" icon={faEye}/> : <FontAwesomeIcon onClick={handleVisibleSalesPanel} className="icon_eye" icon={faEyeSlash}/>
                            }
                            <Dropdown icon={<FontAwesomeIcon className="icon_arrow" icon={faChevronDown} />} hover={true}>
                                <C.DropdownOption className='opt'>Hoje</C.DropdownOption>
                                <C.DropdownOption className='opt'>Última Semana</C.DropdownOption>
                                <C.DropdownOption className='opt'>Último Mês</C.DropdownOption>
                                <C.DropdownOption className='opt'>Último Ano</C.DropdownOption>
                            </Dropdown>
                            {/* <FontAwesomeIcon className="icon_arrow" icon={faChevronDown}/> */}
                        </C.TopRightInfo>
                    </C.TopInfoArea>
                    <C.HomePanelBody>
                        body
                    </C.HomePanelBody>
                </C.HomePanelItem>

                <C.HomePanelItem className='estoque'>
                    <C.TopInfoArea>
                        <C.TopLeftInfo>
                            <C.TitleHomePanel to='/estoque'>Estoque</C.TitleHomePanel>
                        </C.TopLeftInfo>
                        <C.TopRightInfo>
                            {
                                isVisible.wharehouseVisibility?
                                    <FontAwesomeIcon onClick={handleVisibleWharehousePanel} className="icon_eye" icon={faEye}/> : <FontAwesomeIcon onClick={handleVisibleWharehousePanel} className="icon_eye" icon={faEyeSlash}/>
                            }
                            <Dropdown icon={<FontAwesomeIcon className="icon_arrow" icon={faChevronDown} />} hover={true}>
                                <C.DropdownOption className='opt'>Aviso 1</C.DropdownOption>
                                <C.DropdownOption className='opt'>Aviso 2</C.DropdownOption>
                                <C.DropdownOption className='opt'>Aviso 3</C.DropdownOption>
                            </Dropdown>
                            {/* <FontAwesomeIcon className="icon_arrow" icon={faChevronDown}/> */}
                        </C.TopRightInfo>
                    </C.TopInfoArea>
                    <C.HomePanelBody>
                        <C.WareHouseInfoArea>
                            <C.WarehouseTopInfo>
                                
                                <C.Amounts>
                                    
                                </C.Amounts>
                                <C.Amounts>
                                    
                                </C.Amounts>
                            </C.WarehouseTopInfo>
                            <C.WarehouseBottomInfo>
                                {/* <FontAwesomeIcon className="icon_arrow" icon={faChevronDown}/> */}
                            </C.WarehouseBottomInfo>
                        </C.WareHouseInfoArea>
                    </C.HomePanelBody>
                </C.HomePanelItem>

                <C.HomePanelItem className='agenda'>
                    <C.TopInfoArea>
                        <C.TopLeftInfo>
                            <C.TitleHomePanel to='/financeiro'>Agenda</C.TitleHomePanel>
                        </C.TopLeftInfo>
                        <C.TopRightInfo>
                            
                        </C.TopRightInfo>
                    </C.TopInfoArea>
                    <C.HomePanelBody>
                        body
                    </C.HomePanelBody>
                </C.HomePanelItem>

                <C.HomePanelItem className='funcionarios'>
                    <C.TopInfoArea>
                        <C.TopLeftInfo>
                            <C.TitleHomePanel to='/funcionarios'>Funcionários</C.TitleHomePanel>
                        </C.TopLeftInfo>
                        <C.TopRightInfo>
                            <Dropdown icon={<FontAwesomeIcon className="icon_arrow" icon={faChevronDown} />} hover={true}>
                                <C.DropdownLabel>Escolha um mês:</C.DropdownLabel>
                                <C.MonthPickerArea>
                                {
                                    new Array(12).fill(0).map((item, index) => (
                                        <C.MonthPickerItem key={index}>
                                            {
                                                ((index+1).toString()).length == 1 ?
                                                0 + ((index+1).toString()) : index+1                                                
                                            }
                                        </C.MonthPickerItem>
                                    ))
                                }
                                    
                                </C.MonthPickerArea> 
                                
                            </Dropdown>
                            {/* <FontAwesomeIcon className="icon_arrow" icon={faChevronDown}/> */}
                        </C.TopRightInfo>
                    </C.TopInfoArea>
                    <C.HomePanelBody>
                        body
                    </C.HomePanelBody>
                </C.HomePanelItem>

            </C.Container>
        </PageTemplate>
    );
}