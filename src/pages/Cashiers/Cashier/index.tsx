import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Modal } from '../../../components/Modal';
import { PageTemplate } from '../../../components/PageTemplate';
import * as C from './styles'


export const Cashier = () => {
    const [modalSale, setModalSale] = useState(false);
    const [modalReceivable, setModalReceivable] = useState(false);
    const [modalOutcome, setModalOutcome] = useState(false);
    
    return (
        <PageTemplate>
            <C.Header>
                <C.Title>Caixa</C.Title>

                <C.ButtonsContainer>
                    <C.Button onClick= {() => setModalSale(true)}>Venda</C.Button>
                    <C.Button onClick= {() => setModalReceivable(true)}>Recebimento</C.Button>
                    <C.Button onClick= {() => setModalOutcome(true)}>Saída</C.Button>
                </C.ButtonsContainer>
            </C.Header>
            <C.Container>
                <C.Table>
                    <thead>
                        <tr>
                            <th className="xsm">#</th>
                            <th className="md">Transação</th>
                            <th className="md">Código</th>
                            <th className="md">Funcionário</th>
                            <th className="sm">Data</th>
                            <th className="sm">Valor</th>
                            <th className="md">Pagamento</th>
                            <th className="sm">Desconto %</th>
                            <th className="md">Saída</th>
                            <th className="md">Observações</th>
                            <th className="md">Ações</th>
                        </tr>
                    </thead>     
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>À vista</td>
                            <td>12345678</td>
                            <td>João</td>
                            <td>01/01/2022</td>
                            <td>79,99</td>
                            <td>PIX</td>
                            <td>10%</td>
                            <td>79,99</td>
                            <td>Fulano de tal pegou</td>
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
                            <td>2</td>
                            <td>Recebido</td>
                            <td>-</td>
                            <td>João</td>
                            <td>01/01/2022</td>
                            <td>150,00</td>
                            <td>Conta 7</td>
                            <td>-</td>
                            <td>150,00</td>
                            <td>Irmão de cliclano</td>
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
                            <td>3</td>
                            <td>Saída</td>
                            <td>-</td>
                            <td>Maria</td>
                            <td>01/01/2022</td>
                            <td>150,00</td>
                            <td>Conta 11</td>
                            <td>-</td>
                            <td>150,00</td>
                            <td>-</td>
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

                <Modal title='Adicionar Venda' status={modalSale} setStatus={setModalSale} footer={
                    <C.FooterModal>
                        <C.Button className="modalButton">Salvar</C.Button>
                    </C.FooterModal>
                }>
                    <C.ModalContainer>
                        <C.Input type="date"/>
                        <C.Input type="text"/>

                        <C.Input type="text"/>
                        <C.Input type="text"/>
                    </C.ModalContainer>
                </Modal>

                <Modal title='Adicionar Recebimento' status={modalReceivable} setStatus={setModalReceivable} footer={
                    <C.FooterModal>
                        <C.Button className="modalButton">Salvar</C.Button>
                    </C.FooterModal>
                }>
                    <C.ModalContainer>
                        ...
                    </C.ModalContainer>
                </Modal>

                <Modal title='Adicionar Venda' status={modalOutcome} setStatus={setModalOutcome} footer={
                    <C.FooterModal>
                        <C.Button className="modalButton">Salvar</C.Button>
                    </C.FooterModal>
                }>
                    <C.ModalContainer>
                        ...
                    </C.ModalContainer>
                </Modal>
            </C.Container>
        </PageTemplate>
    );
}