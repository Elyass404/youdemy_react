import { useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import api from '../../services/api'
import { Link } from 'react-router-dom'
// import CircularIndeterminate from './CircularIndeterminate';

function CourseList() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get('/Course')
      .then(res => {
        setCourses(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to load courses')
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading Courses...</p> 
  if (error) return <p>{error}</p>

  return (
    <div>
    <div style={{ padding: '1rem', display: 'flex', flexWrap: 'wrap', width: '100%' }}>
    <div >
      <div><h1>All Available Courses</h1></div>
      <Link to="/Create-course">
      <div style={{
        display:'flex',
        justifyContent:'right',
        marginRight:'50px'
      }}>
      <button style={{
      padding: "0.5rem 1rem",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor:"pointer",
      marginBottom:"20px"

    }}>
      + Create Course
    </button>
      </div>
    
  </Link>


      <div style={{
        width:'100%', 
        display:'flex',
        flexWrap:'wrap', 
        gap:'20px', 
        justifyContent:'center'
      }}>
        {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
      </div>
      
      
    </div>
    </div>
    </div>
  )
}

export default CourseList
