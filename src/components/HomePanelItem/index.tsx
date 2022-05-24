import * as C from './styles';

type Props = {
    children: string;
    className: string;
}

export const HomePanelItem = ({className, children}: Props) => {
    return (
        <C.Container className={className}>
            <C.Title>{children}</C.Title>
        </C.Container>
    );
}