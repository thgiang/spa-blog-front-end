export const state = () => ({
  blogs: {
    last_page: 0
  },
  blog: {}
})

export const mutations = {
  setBlogs (state, blogs) {
    state.blogs = blogs
  },
  setBlog (state, blog) {
    state.blog = blog
  },
  setBlogTitle (state, title) {
    state.blog.title = title
  },
  setBlogContent (state, content) {
    state.blog.content = content
  },
  setBlogCatId (state, cat_id) {
    state.blog.cat_id = cat_id
  },
  setBlogDescription (state, description) {
    state.blog.description = description
  },
  setBlogThumbnail (state, thumbnail) {
    state.blog.thumbnail = thumbnail
  },
}
