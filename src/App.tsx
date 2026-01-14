// import Layout from "components/Layout/Layout";
import { DATA } from "pages/Project_15/Create_Employee/types";
import Layout from "./pages/Project_15/Layout";
import Create_Employee from "pages/Project_15/Create_Employee/Create_Employee";
import Employees from "pages/Project_15/Employees/Employees";

import { BrowserRouter, data, Navigate, Route, Routes } from "react-router-dom";
// Lessons
// import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
// import Lesson_07 from "lessons/Lesson_07/Lesson_07";
// import Homework_09 from "homeworks/hw_09/Homework_09";
// import Lesson_08 from "lessons/Lesson_08/Lesson_08";
// import Lesson_09 from "lessons/Lesson_09/Lesson_09";

// import Playground from "./consultation/consultation_1_use/Playground";

// import TodoForm from "./consultation/Laboratory_work/TodoForm";

import GlobalStyles from "styles/GlobalStyles";
import { ROUTES } from "pages/Project_15/routes";

// import ContactUs from "components/ContactUs/ContactUs";
// import About from "pages/EmployeeApp/About/About";
// import LogIn from "pages/EmployeeApp/LogIn/LogIn";
// import Home from "pages/EmployeeApp/Home/Home";

// Homeworks
// import Homework_06 from "./homeworks/Homework_06";
// import Homework_07 from "homeworks/hw_07/Homework_07";
// import Homework_08 from "homeworks/hw_08/Homework_08";
// import Homework_12 from "homeworks/hw_12/Homework_12";
// import Homework_10 from "homeworks/hw_10/Homework_10";

function App() {
  return (
    <BrowserRouter>
      {/* <Lesson_06 /> */}
      {/* <Lesson_07/> */}
      {/* <Lesson_08/> */}
      {/* <Lesson_09/> */}

      <GlobalStyles />

      {/* <Homework_06/> */}
      {/* <Homework_07/> */}
      {/* <Homework_07/> */}
      {/* <Homework_08/> */}
      {/* <Homework_09/> */}
      {/* <Homework_10/> */}

      {/* <Playground /> */}
      {/* <Homework_12 /> */}

      {/* <Playground /> */}
      {/* <h1>ToDo List</h1> */}
      {/* <TodoForm /> */}

      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Layout> */}

      <Layout>
        <Routes>
          <Route path={ROUTES.CREATE_EMPLOYEES} element={<Create_Employee />} />
          <Route index element={<Create_Employee />} />
          <Route path={ROUTES.EMPLOYEES} element={<Employees />} />
          <Route path="*" element={<Navigate to={ROUTES.CREATE_EMPLOYEES} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
