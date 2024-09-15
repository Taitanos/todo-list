import { useState, useEffect, useCallback } from 'react';

export default function useFilteredTasks(tasks) {
    const [filteredTasks, setFilteredTasks] = useState([]);

    const handleFilterTasks = (filterType, priority) => {
        let filtered = tasks;

        // Фильтрация по статусу
        if (filterType === 'incomplete') {
            filtered = filtered.filter(task =>
                task.taskStatus === 'В работе' || task.taskStatus === 'Новый'
            );
        } else if (filterType === 'complete') {
            filtered = filtered.filter(task => task.taskStatus === 'Завершено');
        }

        // Фильтрация по приоритету
        if (priority && priority !== 'all') {
            filtered = filtered.filter(task => {
                if (priority === 'urgent') {
                    return task.taskType === 'Срочно';
                } else if (priority === 'important') {
                    return task.taskType === 'Важно';
                } else if (priority === 'not_urgent') {
                    return task.taskType === 'Не срочно';
                } else if (priority === 'not_important') {
                    return task.taskType === 'Не важно';
                }
                return true;
            });
        }

        setFilteredTasks(filtered);
    };

    // Сортировка задач по приоритету при первом рендере
    useEffect(() => {
        const sortedTasks = [...tasks].sort((a, b) => {
            const priorityOrder = {
                'Срочно': 1,
                'Важно': 2,
                'Не срочно': 3,
                'Не важно': 4,
            };
            return (priorityOrder[a.taskType] || 5) - (priorityOrder[b.taskType] || 5);
        });
        setFilteredTasks(sortedTasks);
    }, [tasks]);

    const handleResetFilters = useCallback(() => {
        const sortedTasks = [...tasks].sort((a, b) => {
            const priorityOrder = {
                'Срочно': 1,
                'Важно': 2,
                'Не срочно': 3,
                'Не важно': 4,
            };
            return (priorityOrder[a.taskType] || 5) - (priorityOrder[b.taskType] || 5);
        });
        setFilteredTasks(sortedTasks);
    }, [tasks]);

    return { filteredTasks, handleFilterTasks, handleResetFilters };
}