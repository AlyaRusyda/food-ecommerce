function Blog({ posts }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 text-center md:text-left justify-between">
      {posts.map((post, index) => (
        <div className="p-5" key={index}>
          <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <div className="h-16">
                  <h2 className="text-xl font-semibold tracking-wide mb-1">
                    {post.title}
                  </h2>
                  <p className="text-gray-800">{post.id}</p>
                </div>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50"
              >
                {post.userId}
              </button>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Blog;
