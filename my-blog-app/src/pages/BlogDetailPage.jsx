import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogPage from "../react-components/BlogPage";

function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("id", id);
  useEffect(() => {
    // Fetch blogs when page loads
    fetch(`http://127.0.0.1:5000/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data); // Save blogs in state
        setLoading(false); // Turn off loading
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        setLoading(false); // Even on error, stop loading spinner
      });
  }, []);

  if (loading) {
    return <div className="p-10 text-xl">Loading blogs...</div>;
  }
  return (
    <div>
      <nav className="flex justify-start space-x-10 px-10 text-xl py-6 shadow-md bg-[#6c3319]">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <BlogPage
              key={blog.id}
              title={blog.title}
              content={blog.content}
              topic={blog.topic}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogDetailPage;
