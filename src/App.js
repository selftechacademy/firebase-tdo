import TodoApp from "./containers/todoApp/TodoApp";
import SignIn from "./containers/signIn/SignIn";
import SignUp from "./containers/signUp/SignUp";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todoapp" element={<TodoApp />} />
    </Routes>
  );
};

export default App;
