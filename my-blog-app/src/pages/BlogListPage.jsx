import { useEffect, useState } from "react";
import background4 from "../assets/background4.png";
import img1 from "../assets/img1.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";
import img15 from "../assets/img15.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import BlogCard from "../react-components/BlogCard";
import Navbar from "../react-components/Navbar";
const BlogListPage = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch blogs when page loads
    fetch("http://127.0.0.1:5000/blogList")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.blogs); // Save blogs in state
        setLoading(false); // Turn off loading
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
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
            <div class="flex flex-wrap -m-4">
              {blogs.map((blog, index) => (
                <div id={blog.id} className="p-4 lg:w-1/3 md:w-1/2 w-full">
                  <BlogCard
                    id={blog.id}
                    title={blog.title}
                    content={blog.content}
                    topic={blog.topic}
                    image={images[index % images.length]}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogListPage;
