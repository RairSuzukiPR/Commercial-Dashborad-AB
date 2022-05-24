import { useLocation } from 'react-router-dom';
import * as C from './styles';

type Props = {
    title: string;
    children: JSX.Element;
    link: string;
    pageActive?: string;
}

export const MenuItem = ({title, children, link, pageActive}: Props) => {
    let pathName = useLocation().pathname;
    let isActive = useLocation().pathname == link;

    if( pageActive && pathName.includes(pageActive) && pathName.includes(link)){
        isActive = true;
    }

    return (
            <C.LinkArea to={link} $isActive={isActive}>
                <C.Icon $isActive={isActive}>
                    {children}
                </C.Icon>
                <C.Title>{title}</C.Title>
            </C.LinkArea>
    );
}