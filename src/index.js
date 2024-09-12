import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "styled-components";
import {GlobalStyled} from "./styled/Global.styled";
import {theme} from './styled/Theme';
import {Tasks} from "./data/Tasks";


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <ThemeProvider theme={theme}>
        <GlobalStyled/>
        <App tasks={Tasks}/>
    </ThemeProvider>
)