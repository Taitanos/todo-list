import Menu from "../../components/menu/Menu";
import Logo from "../../components/logo/Logo";
import {S} from "./Header_Styled";

export default function Header() {
    return (
        <S.Header>
            <Logo/>
            <Menu/>
        </S.Header>
    )
}