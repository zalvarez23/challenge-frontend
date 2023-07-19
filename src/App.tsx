import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PermissionContainer from "./containers/PermissionContainer";
import UpdatePermissionContainer from "./containers/UpdatePermissionContainer";
import CreatePermissionContainer from "./containers/CreatePermissionContainer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PermissionContainer />} />
        <Route path="/update/:id" element={<UpdatePermissionContainer />} />
        <Route path="/create" element={<CreatePermissionContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
