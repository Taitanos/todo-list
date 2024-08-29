import logo from "../../assets/images/logoTodo.webp";
import {S} from "./Logo_Styled";

export default function Logo() {
    return (
        <S.Logo src={logo} alt={"logo"}/>
    )
}