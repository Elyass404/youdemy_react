import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Header from "../components/common/Header";

const CourseDetail = ()=>{

    const {id}= useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]= useState(null);

    useEffect( ()=>{
        api.get(`/Course/${id}`)
        .then((res)=>{
            console.log(res.data)
            setCourse(res.data);
            setLoading(false);
        })
        .catch((error)=>{
            setError("Sorry, something wrong happened, We can't show the Course Details now!")
            // setError(error);
            setLoading(false);

        });
    }, [id])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!course) return <p>No course found.</p>;

    return (
        <div>
        <Header/>
        <h2>{course.title}</h2>
      <img style={{width:"100%", borderRadius:"12px"}} src={course.thumbnail} alt="Course Thumbnail" />
      <p>{course.content}</p>
        </div>
    )
}

export default CourseDetail;