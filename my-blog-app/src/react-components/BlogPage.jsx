function BlogPage({ id, title, content, topic }) {
  return (
    <div className="blog-card">
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-16 mx-auto">
          <div class="mx-auto flex flex-col lg:flex-row">
            <div className="flex-shrink-0 w-full lg:w-1/3 py-8">
              <img
                alt="blog post"
                // Fixed height and object cover
                className="w-full h-80 object-cover object-center rounded"
                src="https://dummyimage.com/400x400"
              />
            </div>
            <div class="flex flex-col justify-start p-6 lg:w-2/3">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {topic}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {title}
              </h1>
              <p class="leading-relaxed">{content}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
