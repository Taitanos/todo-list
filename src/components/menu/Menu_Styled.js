import styled from "styled-components";

const Menu = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
`
const Dashboard = styled.div`

`
const Filter = styled(Dashboard)`

`

const Calendar = styled(Dashboard)`

`

export const S = {
    Menu,
    Dashboard,
    Filter,
    Calendar
}