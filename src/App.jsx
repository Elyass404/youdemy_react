import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import CourseList from './components/courses/CourseList';
import CategoryList from './components/Categories/CategoryList';
import CourseDetail from './pages/CourseDetail'; 
import Greeting from './Greeting';
import CourseForm from './components/courses/CourseForm';
import EditCourse from './pages/EditCourse';

function App() {
  return (

    
    <Router>
      <Header />

      <div style={{ padding: '1rem', width: "100%" }}>
        <Routes>
          <Route path="/Course" element={<CourseList />} />

          <Route path="/Course/:id" element={<CourseDetail />} />

          <Route path='/Create-course' element= {<CourseForm />}/>

          <Route path="/Edit-course/:id" element={<EditCourse />} />

          <Route path="/Categories" element={<CategoryList />} />

          


          
          {/* <Route path="/courses/:id" element={<CourseDetail />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
