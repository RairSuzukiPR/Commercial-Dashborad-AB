import * as C from './styles';
import { Modal } from '../Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

type Props = {
    title: string;
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCategory = ({title, status, setStatus}: Props) => {

    return (
        <Modal title={'Gerenciar ' + title} status={status} setStatus={setStatus}
            footer={
                <C.Footer>
                    <C.AddButton><FontAwesomeIcon className="icon" icon={faPlus}/></C.AddButton>
                    <C.Button>Salvar</C.Button>
                </C.Footer>
            }
        >
            
            <C.Container>
                <C.Table>
                    <thead>
                        <tr>
                            <th>{title}</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Calça</td>
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
                            <td>Tênis</td>
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

        </Modal>
        
    );
}