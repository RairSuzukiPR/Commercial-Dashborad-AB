import { useRef } from 'react';
import * as C from './styles';


type Props = {
	children: any;
	icon: JSX.Element;
	badgeContent?: string;
	headerDropdown?: boolean;
	hover? : boolean;
}

const clickOutsideRef = (content_ref: React.MutableRefObject<any>, toggle_ref: React.MutableRefObject<any>) => {
	document.addEventListener('mousedown', (e: any) => {
		// console.log(e.target);
		if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
			content_ref.current.classList.toggle('active')
			// console.log('1if');
		} else {
			if(content_ref.current && !content_ref.current.contains(e.target)){
				content_ref.current.classList.remove('active')
				// console.log('2if');
			}
		}
	})
}

export const Dropdown = ({icon, children, badgeContent, headerDropdown, hover} : Props) => {

	const dropdown_content_el = useRef(null);
	const dropdown_toggle_el = useRef(null);

	clickOutsideRef(dropdown_content_el, dropdown_toggle_el)

	return (
	<C.Container>
		<C.Button ref={dropdown_toggle_el}>
			{icon}
			{
				badgeContent? <C.Badge><C.BadgeLabel>{badgeContent}</C.BadgeLabel></C.Badge> : ''
			}
		</C.Button>
		<C.BodyArea headerDropdown={headerDropdown} className='' ref={dropdown_content_el}>
			<C.Teste>
				<C.BodyArrow headerDropdown={headerDropdown}></C.BodyArrow>
			</C.Teste>
			
			<C.Body hover={hover}>
				{children}
			</C.Body>
			
		</C.BodyArea>
	</C.Container>
  )
}
