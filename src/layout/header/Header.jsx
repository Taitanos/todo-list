import Menu from "../../components/menu/Menu";
import Logo from "../../components/logo/Logo";
import {S} from "./Header_Styled";

export default function Header({onFilter, onResetFilters}) {
    return (
        <S.Header>
            <Logo/>
            <Menu onFilter={onFilter} onResetFilters={onResetFilters}/>
        </S.Header>
    )
}