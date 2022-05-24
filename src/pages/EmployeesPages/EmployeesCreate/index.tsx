import * as C from './styles';
import { PageTemplate } from '../../../components/PageTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

export const EmployeesCreate = () => {

    return(
        <PageTemplate pageActive='funcionarios'>
            <C.Title>Cadastrar Funcionário</C.Title>
            <C.Container>
                <C.BodyArea>
                    <C.Body>
                        <C.FormArea>
                            <C.FormItem className='asd'>
                                <C.ImageArea className='dentro'>
                                    <C.ImageItem>
                                        <FontAwesomeIcon className="icon" icon={faCameraRetro}/>
                                    </C.ImageItem>
                                </C.ImageArea>
                                <C.MediumInputs>
                                    <C.FormInputItem className='testInput'>
                                        <C.Label>Nome completo:</C.Label>
                                        <C.Input type='text' placeholder='Digite o nome completo...'/>
                                    </C.FormInputItem>
                                    <C.FormInputItem className='testInput'>
                                        <C.Label>Email:</C.Label>
                                        <C.Input type='email' placeholder='Digite o e-mail...'/>
                                    </C.FormInputItem>
                                </C.MediumInputs>
                            </C.FormItem>

                            <C.FormItem>
                                <C.FormInputItem>
                                    <C.Label>Senha:</C.Label>
                                    <C.Input type='password' placeholder='Digite a senha...'/>
                                </C.FormInputItem>
                                <C.FormInputItem>
                                    <C.Label>Confirme a senha:</C.Label>
                                    <C.Input type='password' placeholder='Confirme a senha...'/>
                                </C.FormInputItem>
                            </C.FormItem>

                            <C.FormItem>
                                <C.FormInputItem>
                                    <C.Label>Endereço:</C.Label>
                                    <C.Input type='text' placeholder='Digite o endereço...'/>
                                </C.FormInputItem>
                                <C.SmallInputs>
                                    <C.FormInputItem className='sm'>
                                        <C.Label>Idade:</C.Label>
                                        <C.Input type='text' placeholder='Digite a idade...'/>
                                    </C.FormInputItem>
                                    <C.FormInputItem className='sm'>
                                        <C.Label>Salario Base:</C.Label>
                                        <C.Input type='text' placeholder='Digite o salário base...'/>
                                    </C.FormInputItem>
                                    <C.FormInputItem className='sm'>
                                        <C.Label>Comissão:</C.Label>
                                        <C.Input type='text' placeholder='Digite a % da comissão...'/>
                                    </C.FormInputItem>
                                </C.SmallInputs>
                            </C.FormItem>
                        </C.FormArea>
                    </C.Body>
                    <C.FormItem className='textAreaDiv'>
                        <C.TextArea cols={30} rows={3} placeholder='Oberservações... (Opcional)'></C.TextArea>
                    </C.FormItem>
                </C.BodyArea>

                <C.Footer>
                    <C.ButtonLink to='/' bgcolor={'#00C74E'}>Cadastrar</C.ButtonLink>
                    <C.ButtonLink to='/funcionarios' bgcolor={'#F2306B'}>Cancelar</C.ButtonLink>
                </C.Footer>
            </C.Container>
        </PageTemplate>
    );
}