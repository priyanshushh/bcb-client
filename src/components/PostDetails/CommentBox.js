export var disqus_config = function ({ id }) {
  this.page.url = `https://localhost:3000/posts/${id}`; // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = { id }; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
