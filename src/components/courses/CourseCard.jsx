import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this course?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/Course/${course.id}`);
      alert("Course deleted successfully!");
      window.location.reload(); // simple way to refresh the list after delete
    } catch (error) {
      console.error("Delete failed", error);
      alert("Failed to delete the course.");
    }
  };

  return (
    <div
      style={{
        width: "45%",
        backgroundColor: "#ffffff",
        padding: "1rem",
        color: "black",
        marginBottom: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxSizing: "border-box",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 6px 16px rgb(50, 14, 212)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Link to={`/Course/${course.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img
          style={{ width: "100%", height: "250px", borderRadius: "4px" }}
          src={course.thumbnail}
          alt="course thumbnail"
        />
        <h2>{course.title}</h2>
        <h3>{course.description}</h3>
      </Link>

      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "orange",
            color: "black",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/Edit-course/${course.id}`)}
        >
          Edit
        </button>

        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
