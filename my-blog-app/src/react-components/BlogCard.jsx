import { Link } from "react-router-dom";
function BlogCard({ id, title, content, topic, image }) {
  console.log("id", id);
  return (
    <div className="blog-card">
      <div className="h-full">
        <div class="h-[450px] bg-[#f0eddd] bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col justify-between">
          <div>
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {topic}
            </h2>
            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
              {title}
            </h1>
            {image && (
              <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={image}
                  alt="blog-image"
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <p class="leading-relaxed mb-3">
              {content.length > 100 ? content.slice(0, 100) + "..." : content}
            </p>
          </div>
          <div>
            <Link
              to={`/blogs/${id}`}
              className="text-indigo-500 inline-flex items-center"
            >
              Read More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
