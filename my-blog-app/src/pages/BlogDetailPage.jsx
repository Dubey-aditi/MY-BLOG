import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import background4 from "../assets/background4.png";
import BlogPage from "../react-components/BlogPage";
import Navbar from "../react-components/Navbar";

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
      <div
        className="bg-cover bg-center bg-no-repeat relative"
        style={{ background: `url(${background4})`, backgroundSize: "cover" }}
      >
        <Navbar />
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap">
              <BlogPage
                key={blog.id}
                title={blog.title}
                content={blog.content}
                topic={blog.topic}
                image={blog.cover_photo_url}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BlogDetailPage;
