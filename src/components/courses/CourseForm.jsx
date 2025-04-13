import { useEffect, useState } from "react";
import api from "../../services/api";

const CourseForm = ({ course = {}, onSubmit }) => {
  const [title, setTitle] = useState(course.title || "");
  const [description, setDescription] = useState(course.description || "");
  const [content, setContent] = useState(course.content || "");
  const [mentorId, setMentorId] = useState(course.mentor_id || "");
  const [categoryId, setCategoryId] = useState(course.category_id || "");
  const [thumbnail, setThumbnail] = useState(course.thumbnail || "");

  const [categories, setCategories] = useState([]);

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    color: "gray",
  };

  useEffect(() => {
    api.get("/Categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch(() => {
        console.error("Failed to fetch categories");
      });
  }, []);

  useEffect(() => {
    if (course.id) {
      setTitle(course.title);
      setDescription(course.description);
      setContent(course.content);
      setMentorId(course.mentor_id);
      setCategoryId(course.category_id);
      setThumbnail(course.thumbnail);
    }
  }, [course]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      content,
      mentor_id: mentorId,
      category_id: categoryId,
      thumbnail,
    };

    onSubmit(data); // Pass data to the parent onSubmit function
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        Width: "100%",
        margin: "2rem auto",
        padding: "2rem",
        border: "1px solid #ccc",
        borderRadius: "12px",
        backgroundColor: "#fafafa",
      }}
    >
      <h2 style={{ textAlign: "center", color: "black" }}>
        {course.id ? "Edit Course" : "Create a New Course"}
      </h2>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ ...inputStyle, height: "100px" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Mentor ID"
          value={mentorId}
          onChange={(e) => setMentorId(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select a Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Thumbnail URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          style={inputStyle}
        />
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "0.75rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {course.id ? "Update Course" : "Create Course"}
      </button>
    </form>
  );
};

export default CourseForm;
