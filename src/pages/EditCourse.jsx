import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import CourseForm from "../components/courses/CourseForm";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get(`/Course/${id}`)
      .then((res) => {
        setCourse(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load course details");
        setLoading(false);
      });
  }, [id]);

  const handleUpdateCourse = (updatedCourse) => {
    api.put(`/Course/${id}`, updatedCourse)
      .then(() => {
        navigate(`/Course/${id}`);
      })
      .catch(() => {
        setError("Failed to update course");
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Edit Course</h1>
      {course && (
        <CourseForm course={course} onSubmit={handleUpdateCourse} />
      )}
    </div>
  );
};

export default EditCourse;
