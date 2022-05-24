import { faChevronDown, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from '../../../components/Dropdown';
import { PageTemplate } from '../../../components/PageTemplate';
import * as C from './styles';


export const Employees = () => {

    return(
        <PageTemplate> 
            <C.Header>
                <C.Title>Funcionários</C.Title>
                <C.HeaderRightInfo className='headerRightInfo'>
                    {/* <C.Icon><FontAwesomeIcon className="icon" icon={faChevronDown}/></C.Icon> */}
                    <Dropdown icon={<FontAwesomeIcon className="icon" icon={faChevronDown} />} hover={true}>
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
                    <C.ButtonLink to='/funcionarios/cadastrar' >Cadastrar Funcionário</C.ButtonLink>
                </C.HeaderRightInfo>
            </C.Header>
            <C.Container>
            <C.Table>
                    <thead>
                        <tr>
                            <th className="sm">Foto</th>
                            <th className="md">Nome</th>
                            <th className="md">Vendas Mensal</th>
                            <th className="md">Progresso</th>
                            <th className="sm">Horários</th>
                            <th className="asd">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>...</td>
                            <td>Admin</td>
                            <td>0</td>
                            <td>
                                <C.ProgressArea>
                                    <C.ProgressBarBase>
                                        <C.ProgressBar></C.ProgressBar>
                                    </C.ProgressBarBase>
                                    <C.ProgessPercentage>40%</C.ProgessPercentage>
                                </C.ProgressArea>
                            </td>
                            <td>ok</td>
                            <td>
                                <C.ActionButton bgcolor={'#4458D4'}>
                                    <FontAwesomeIcon className="icon iconEdit" icon={faEdit}/>
                                </C.ActionButton>
                            </td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>Fulano</td>
                            <td>8.000,00</td>
                            <td>
                                <C.ProgressArea>
                                    <C.ProgressBarBase>
                                        <C.ProgressBar></C.ProgressBar>
                                    </C.ProgressBarBase>
                                    <C.ProgessPercentage>40%</C.ProgessPercentage>
                                </C.ProgressArea>
                            </td>
                            <td>ok?</td>
                            <td>
                                <C.ActionButton bgcolor={'#4458D4'}>
                                    <FontAwesomeIcon className="icon iconEdit" icon={faEdit}/>
                                </C.ActionButton>
                                <C.ActionButton bgcolor={'#F2306B'}>
                                    <FontAwesomeIcon className="icon iconTrash" icon={faTrash}/>
                                </C.ActionButton>
                            </td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>Ciclano</td>
                            <td>3.000,00</td>
                            <td>
                                <C.ProgressArea>
                                    <C.ProgressBarBase>
                                        <C.ProgressBar></C.ProgressBar>
                                    </C.ProgressBarBase>
                                    <C.ProgessPercentage>40%</C.ProgessPercentage>
                                </C.ProgressArea>
                            </td>
                            <td>ok?</td>
                            <td>
                                <C.ActionButton bgcolor={'#4458D4'}>
                                    <FontAwesomeIcon className="icon iconEdit" icon={faEdit}/>
                                </C.ActionButton>
                                <C.ActionButton bgcolor={'#F2306B'}>
                                    <FontAwesomeIcon className="icon iconTrash" icon={faTrash}/>
                                </C.ActionButton>
                            </td>
                        </tr>
                    </tbody>
                </C.Table>
            </C.Container>
        </PageTemplate>

    );
}