import {useState} from "react";
import {S} from './Filter_Styled';

export default function Filter({onFilter, onResetFilters}) {

    const [isOpen, setIsOpen] = useState(false)
    const [filterType, setFilterType] = useState('incomplete')
    const [priority, setPriority] = useState('all')

    const handleFilter = () => {
        onFilter(filterType, priority)
        setIsOpen(false) // Закрытие меню после фильтрации
    };

    const handleResetFilter = () => {
        onResetFilters(filterType, filterType)
        setIsOpen(false)
    }

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <S.Dropdown>
            <S.Dropbtn onClick={toggleMenu}>Фильтры</S.Dropbtn>
            {isOpen && (
                <S.DropdownContent>
                    <>
                        <S.DropdownContentLabel>Тип:</S.DropdownContentLabel>
                        <S.DropdownContentSelect
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}>
                            <option value="incomplete">Незавершенные задачи</option>
                            <option value="complete">Завершенные задачи</option>
                        </S.DropdownContentSelect>
                    </>
                    <>
                        <S.DropdownContentLabel>Приоритет:</S.DropdownContentLabel>
                        <S.DropdownContentSelect
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}>
                            <option value="all">Все</option>
                            <option value="urgent">Срочные</option>
                            <option value="important">Важно</option>
                            <option value="not_urgent">Не срочные</option>
                            <option value="not_important">Не важные</option>
                        </S.DropdownContentSelect>
                    </>
                    <>
                        <S.DropdownBtn onClick={handleFilter}>Фильтровать</S.DropdownBtn>
                        <S.DropdownBtn onClick={handleResetFilter}>Сбросить</S.DropdownBtn>
                    </>
                </S.DropdownContent>
            )}
        </S.Dropdown>
    )
}