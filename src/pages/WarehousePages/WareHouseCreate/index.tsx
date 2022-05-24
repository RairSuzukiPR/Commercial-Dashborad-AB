import * as C from './styles';
import { PageTemplate } from '../../../components/PageTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faCameraRetro, faPen } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '../../../components/Modal';
import { useState } from 'react';
import { ModalCategory } from '../../../components/ModalCategory';


export const WarehouseCreate = () => {
    const [modalTypeStatus, setModalTypeStatus] = useState(false);
    const [modalSizeStatus, setModalSizeStatus] = useState(false);
    const [modalBrandStatus, setModalBrandStatus] = useState(false);
    const [modalColorStatus, setModalColorStatus] = useState(false);

    return(
        <PageTemplate pageActive='estoque'>
            <C.Title>Cadastrar Produto</C.Title>
            <C.Container>

                <C.Body>
                    <C.ImagesArea>
                        <C.MainImageArea>
                            <FontAwesomeIcon className="icon" icon={faCameraRetro}/>
                        </C.MainImageArea>
                        <C.SecondaryImagesArea>
                            <C.SecondaryImagesItem><FontAwesomeIcon className="icon" icon={faCameraRetro}/></C.SecondaryImagesItem>
                            <C.SecondaryImagesItem><FontAwesomeIcon className="icon" icon={faCameraRetro}/></C.SecondaryImagesItem>
                            <C.SecondaryImagesItem><FontAwesomeIcon className="icon" icon={faCameraRetro}/></C.SecondaryImagesItem>
                            <C.SecondaryImagesItem><FontAwesomeIcon className="icon" icon={faCameraRetro}/></C.SecondaryImagesItem>
                        </C.SecondaryImagesArea>
                    </C.ImagesArea>

                    <C.FormArea>
                        <C.FormItem>
                            <C.Label htmlFor='code'>Código:</C.Label>
                            <C.InputArea>
                                <C.Input type='text' id='code' placeholder='Digite o código...' />
                                <C.ButtonAddon>
                                    <FontAwesomeIcon className="icon" icon={faBarcode}/>
                                </C.ButtonAddon>
                            </C.InputArea>
                        </C.FormItem>

                        <C.FormItem className='multipleSelects'>
                            <C.FormItemSelect>
                                <C.Label htmlFor='type'>Tipo:</C.Label>
                                <C.SelectArea>
                                    <C.Select id='type' defaultValue={''} required>
                                        <C.Option value="" disabled hidden >Selecione o tipo...</C.Option>
                                        <C.Option value='asd'>asd</C.Option>
                                        <C.Option value='dsa'>dsa</C.Option>
                                    </C.Select>
                                    <C.ButtonAddon onClick={()=> setModalTypeStatus(true)}>
                                        <FontAwesomeIcon className="icon" icon={faPen}/>
                                    </C.ButtonAddon>
                                </C.SelectArea>
                            </C.FormItemSelect>
                            <C.FormItemSelect>
                                <C.Label htmlFor='size'>Tamanho:</C.Label>
                                <C.SelectArea>
                                    <C.Select id='size' defaultValue={''} required>
                                        <C.Option value='' disabled hidden> Selecione o tamanho... </C.Option>
                                        <C.Option value='asd'>asd</C.Option>
                                        <C.Option value='dsa'>dsa</C.Option>
                                    </C.Select>
                                    <C.ButtonAddon onClick={()=> setModalSizeStatus(true)}>
                                        <FontAwesomeIcon className="icon" icon={faPen}/>
                                    </C.ButtonAddon>
                                </C.SelectArea>
                            </C.FormItemSelect>
                        </C.FormItem>

                        <C.FormItem className='multipleSelects'>
                            <C.FormItemSelect>
                                <C.Label htmlFor='brand'>Marca:</C.Label>
                                <C.SelectArea>
                                    <C.Select id='brand' defaultValue={''} required>
                                        <C.Option value='' disabled hidden> Selecione a marca... </C.Option>
                                        <C.Option value='asd'>asd</C.Option>
                                        <C.Option value='dsa'>dsa</C.Option>
                                    </C.Select>
                                    <C.ButtonAddon onClick={()=> setModalBrandStatus(true)}>
                                        <FontAwesomeIcon className="icon" icon={faPen}/>
                                    </C.ButtonAddon>
                                </C.SelectArea>
                            </C.FormItemSelect>
                            <C.FormItemSelect>
                                <C.Label htmlFor='color'>Cor:</C.Label>
                                <C.SelectArea>
                                    <C.Select id='color' defaultValue={''} required>
                                        <C.Option value='' disabled hidden> Selecione a cor... </C.Option>
                                        <C.Option value='asd'>asd</C.Option>
                                        <C.Option value='dsa'>dsa</C.Option>
                                    </C.Select>
                                    <C.ButtonAddon onClick={()=> setModalColorStatus(true)}>
                                        <FontAwesomeIcon className="icon" icon={faPen}/>
                                    </C.ButtonAddon>
                                </C.SelectArea>
                            </C.FormItemSelect>
                        </C.FormItem>
                        
                        <C.FormItem className='multipleInputs'>
                            <C.FormItemInput>
                                <C.Label htmlFor='quantity'>Quantidade: </C.Label>
                                <C.Input type='number' id='quantity' placeholder='Insira a quantidade...' className='smInput'/>
                            </C.FormItemInput>
                            <C.FormItemInput>
                                <C.Label htmlFor='cost_price'>Preço de custo:</C.Label>
                                <C.Input type='text' id='cost_price' placeholder='Insira o PDC...' className='smInput'/>
                            </C.FormItemInput>
                            <C.FormItemInput>
                                <C.Label htmlFor='price'>Preço de venda:</C.Label>
                                <C.Input type='text' id='price' placeholder='Insira o PDV...' className='smInput '/>
                            </C.FormItemInput>
                            <C.FormItemInput>
                                <C.Label htmlFor=''>Gênero: </C.Label>
                                <C.FormItemInputRadioArea> 
                                    <C.FormItemInputRadio>
                                        <C.Input type='radio' id='male' name='gender' className='smInput'/>
                                        <C.Label htmlFor='male'>Masculino</C.Label>
                                    </C.FormItemInputRadio>
                                    <C.FormItemInputRadio>
                                        <C.Input type='radio' id='female' name='gender' className='smInput'/>
                                        <C.Label htmlFor='female'>Feminino</C.Label>
                                    </C.FormItemInputRadio>
                                    <C.FormItemInputRadio>
                                        <C.Input type='radio' id='unissex' name='gender' className='smInput'/>
                                        <C.Label htmlFor='unissex'>Unissex</C.Label>
                                    </C.FormItemInputRadio>
                                </C.FormItemInputRadioArea>
                            </C.FormItemInput>
                        </C.FormItem>

                    </C.FormArea>
                </C.Body>

                <C.Footer>
                    <C.FooterLeftArea>
                        <C.ButtonLink to='/' bgcolor={'#00C74E'}>Cadastrar</C.ButtonLink>
                        <C.ButtonLink to='/' bgcolor={'#4458D4'}>Cadastrar e continuar</C.ButtonLink>
                    </C.FooterLeftArea>
                    <C.FooterRightArea>
                        <C.ButtonLink to='/estoque' bgcolor={'#F2306B'}>Cancelar</C.ButtonLink>
                    </C.FooterRightArea>
                </C.Footer>

                {/* Mandar aq os arrays com as categorias via props */}
                <ModalCategory title='Tipo' status={modalTypeStatus} setStatus={setModalTypeStatus} />
                <ModalCategory title='Tamanho' status={modalSizeStatus} setStatus={setModalSizeStatus} />
                <ModalCategory title='Marca' status={modalBrandStatus} setStatus={setModalBrandStatus} />
                <ModalCategory title='Cor' status={modalColorStatus} setStatus={setModalColorStatus} />
            </C.Container>
            
        </PageTemplate>
    );
}