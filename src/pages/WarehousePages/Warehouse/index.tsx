import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { PageTemplate } from '../../../components/PageTemplate';
import { SearchInput } from '../../../components/SearchInput';


export const WareHouse = () => {

    return(
        <PageTemplate>
            <C.Header>
                <C.Title>Estoque</C.Title>
                <C.HeaderRightInfo className='headerRightInfo'>
                    <SearchInput className='searchInput' placeHolder='Digite o código do produto...' responsive={true}/>
                    <C.RightSideButtons>
                        <C.FilteredSearchButton>
                            <FontAwesomeIcon className="icon" icon={faSlidersH}/>
                        </C.FilteredSearchButton>
                        <C.ButtonLink to='/estoque/cadastrar' >Cadastrar Produto</C.ButtonLink>
                    </C.RightSideButtons>
                </C.HeaderRightInfo>
            </C.Header>
            <C.Container>
                <C.Table>
                        <thead>
                            <tr>
                                <th className="sm">Foto</th>
                                <th className="md">Código</th>
                                <th className="md">Tipo</th>
                                <th className="md">Marca</th>
                                <th className="sm">Tamanho</th>
                                <th className="md">Cor</th>
                                <th className="sm">Quantidade</th>
                                <th className="sm">Custo</th>
                                <th className="sm">Preço</th>
                                <th className="">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>...</td>
                                <td>123asd</td>
                                <td>Sandália</td>
                                <td>Adidas</td>
                                <td>42</td>
                                <td>Branco</td>
                                <td>12</td>
                                <td>49,50</td>
                                <td>120,00</td>
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
                                <td>123asd</td>
                                <td>Sandália</td>
                                <td>Adidas</td>
                                <td>42</td>
                                <td>Branco</td>
                                <td>12</td>
                                <td>49,50</td>
                                <td>120,00</td>
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
                                <td>123asd</td>
                                <td>Sandália</td>
                                <td>Adidas</td>
                                <td>42</td>
                                <td>Branco</td>
                                <td>12</td>
                                <td>49,50</td>
                                <td>120,00</td>
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
                                <td>123asd</td>
                                <td>Sandália</td>
                                <td>Adidas</td>
                                <td>42</td>
                                <td>Branco</td>
                                <td>12</td>
                                <td>49,50</td>
                                <td>120,00</td>
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
                                <td>123asd</td>
                                <td>Sandália</td>
                                <td>Adidas</td>
                                <td>42</td>
                                <td>Branco</td>
                                <td>12</td>
                                <td>49,50</td>
                                <td>120,00</td>
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
                                <td>123asd</td>
                                <td>Sandália</td>
                                <td>Adidas</td>
                                <td>42</td>
                                <td>Branco</td>
                                <td>12</td>
                                <td>49,50</td>
                                <td>120,00</td>
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