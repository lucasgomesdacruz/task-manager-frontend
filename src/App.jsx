import "./App.scss";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";



const App = () => {
    return (
        <div className="app-container">  
            <Sidebar />
            <Tasks />
        </div>
    );
};

export default App;
