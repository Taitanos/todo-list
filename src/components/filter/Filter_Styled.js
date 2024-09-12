import styled from "styled-components";
import {theme} from "../../styled/Theme";

const Dropdown = styled.div`
    position: relative;
    display: inline-block;
`
const Dropbtn = styled.button`
    background-color: ${theme.colors.primaryBg};
    padding: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
`

const DropdownContent = styled.div`
    display: block;
    position: absolute;
    background-color: ${theme.colors.primaryBg};
    min-width: 200px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 10px;
`

const DropdownContentLabel = styled.label`
    display: block;
    margin: 5px 0;
`

const DropdownContentSelect = styled.select`
    display: block;
    margin: 5px 0;
`

const DropdownBtn = styled.button`
    justify-content: center;
    padding: 5px;
    text-align: center;
    max-width: 100px;
    border-radius: 10px;
    margin-left: 5px;
`

export const S = {
    Dropdown,
    Dropbtn,
    DropdownContent,
    DropdownContentLabel,
    DropdownContentSelect,
    DropdownBtn
}