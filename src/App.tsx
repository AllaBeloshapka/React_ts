import Layout from "components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Lessons
// import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
// import Lesson_07 from "lessons/Lesson_07/Lesson_07";
// import Homework_09 from "homeworks/hw_09/Homework_09";
// import Lesson_08 from "lessons/Lesson_08/Lesson_08";
// import Lesson_09 from "lessons/Lesson_09/Lesson_09";

// import Playground from "./consultation/consultation_1_use/Playground";

// import TodoForm from "./consultation/Laboratory_work/TodoForm";

import GlobalStyles from "styles/GlobalStyles";

import ContactUs from "components/ContactUs/ContactUs";
import About from "pages/EmployeeApp/About/About";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import Home from "pages/EmployeeApp/Home/Home";
import Homework_14 from "homeworks/hw_14/Homework_14";

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
      <Homework_14 />

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
    </BrowserRouter>
  );
}
export default App;
