import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { api } from '../../api';
import { setToken } from '../../redux/reducers/userReducer';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/useAppSelector';


export const Login = () => {
    const user = useAppSelector(state => state.userRed);

    useEffect(() => {
        // valiodar a mzr do bct do token
        if (user.token != ''){
            console.log('entrou');
            <Navigate to="/"/>
        }
    }, [])

    const dispatch = useDispatch();

    const teste = async () => {
        let localAuth = await api.isAuth();
        dispatch(setToken(localAuth.auth));
    }

    return(
        <>
            {user.token != '' &&
                <Navigate to="/home"/>
            }
            
            {user.token == '' &&
                <C.Container>
                    <C.Logo>
                        <C.LogoImg src={'/assets/img/logo.jpg'}/>
                    </C.Logo>
                    
                    <C.LoginFormArea>
                        <C.Title>Login</C.Title>
                        
                        <C.Label>
                            Email: <br />
                            <C.Icon><FontAwesomeIcon className="icon" icon={faEnvelope}/></C.Icon>
                            <C.LoginInput type="email" placeholder="" />
                        </C.Label>
                        <C.Label>
                            Senha: <br />
                            <C.Icon><FontAwesomeIcon className="icon" icon={faLock}/></C.Icon>
                            <C.LoginInput type="password" placeholder=""/>
                        </C.Label>

                        <C.Button onClick={()=> teste()} type="submit">Entrar</C.Button>
                    </C.LoginFormArea>
                </C.Container>
            }
        </>
                
            
            

        // {user.token &&
        //     <div>Não há posts para exibir!</div>
        // }
               
    );
}