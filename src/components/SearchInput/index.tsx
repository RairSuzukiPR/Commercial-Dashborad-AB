import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useState } from 'react';
import * as C from './styles';

type Props = {
    placeHolder: string;
    responsive: boolean;
    className?: string;
}

export const SearchInput = ({className, placeHolder, responsive}: Props) => {
    const [search, setSearch] = useState('');
    const [inputActive, setInputActive] = useState(search == '' ? false: true);

    const handleinputFocus = () => {
        setInputActive(true);
    }

    const handleinputBlur = () => {
        if(search == ''){
            setInputActive(false);
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const teste = () => {
        if (className) {
            document.getElementById('searchInput')?.focus();
        }
        handleinputFocus();
    }

    return(
        <C.Container>
            <C.Icon  onClick={teste} onBlur={handleinputBlur}><FontAwesomeIcon className="icon" icon={faSearch}/></C.Icon>
                <C.SearchInput id='searchInput' className={className} 
                                type="text" 
                                autoComplete="off"
                                placeholder={placeHolder} 
                                value={search} 
                                onChange={handleChange} 
                                onFocus={handleinputFocus} 
                                onBlur={handleinputBlur} 
                                isActive={inputActive} 
                                isResponsive={responsive}
                /> 
        </C.Container>
    );
}