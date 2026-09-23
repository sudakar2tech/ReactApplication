import apiclient from './apiclient';

export const postService = {
  // GET: Fetch all posts
  getAll: async () => {
    const response = await apiclient.get('/posts');
    return response.data;
  },

  // POST: Create a new post
  create: async (postData) => {
    const response = await apiclient.post('/posts', postData);
    return response.data;
  },

  // PUT: Update an existing post
  update: async (id, postData) => {
    const response = await apiclient.put(`/posts/${id}`, postData);
    return response.data;
  },

  // DELETE: Remove a post
  delete: async (id) => {
    const response = await apiclient.delete(`/posts/${id}`);
    return response.data;
  }
};