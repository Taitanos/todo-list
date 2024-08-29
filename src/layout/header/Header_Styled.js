import styled from "styled-components";
import {theme} from "../../styled/Theme";

const Header = styled.header`
    background-color: ${theme.colors.primaryBg};
    padding: 5px;
    display: flex;
    justify-content: space-around;
`

export const S = {
    Header
}