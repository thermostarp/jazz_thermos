// blog.js

// Fetch blog posts from JSON file
fetch('blog-posts.json')
  .then(response => response.json())
  .then(data => {
    // Call a function to render the blog posts
    renderBlogPosts(data);
  })
  .catch(error => console.log(error));

// Function to render blog posts
function renderBlogPosts(posts) {
  const blogPostsDiv = document.getElementById('blog-posts');

  // Loop through each blog post and create a new <div> for it
  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('blog-post');

    // Create HTML content for the blog post
    const postTitle = document.createElement('h3');
    postTitle.textContent = post.title;

    const postContent = document.createElement('p');
    postContent.textContent = post.content;

    // Append the post title and content to the post div
    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);

    // Append the post div to the main blog posts div
    blogPostsDiv.appendChild(postDiv);
  });
}


