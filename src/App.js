import React from 'react';
import Header from "./layout/header/Header";
import Main from "./layout/section/main/Main";
import Footer from "./layout/footer/Footer";
import useFilteredTasks from "./hook/useFilteredTasks";

function App({ tasks }) {
    const { filteredTasks, handleFilterTasks, handleResetFilters } = useFilteredTasks(tasks);

    return (
        <div>
            <Header onFilter={handleFilterTasks} onResetFilters={handleResetFilters} />
            <Main tasks={filteredTasks} />
            <Footer />
        </div>
    );
}

export default App;