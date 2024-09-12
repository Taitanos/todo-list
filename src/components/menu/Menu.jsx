import {S} from "./Menu_Styled";
import Filter from "../filter/Filter";

export default function Menu({onFilter, onResetFilters}) {
    return (
        <S.Menu>
            <S.Dashboard>Dashboard</S.Dashboard>
            <Filter onFilter={onFilter} onResetFilters={onResetFilters}/>
            <S.Calendar>Calendar</S.Calendar>
        </S.Menu>
    )
}