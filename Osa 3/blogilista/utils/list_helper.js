const dummy = (blogs) => {
    return 1
  }
  const totalLikes = (blogs) => {
    const reducer = (sum, item) => {
      return sum + item.likes
    }
    return blogs.reduce(reducer, 0)
  }
  const favoriteBlog = (blogs) => {
      const mostLikes=Math.max(...blogs.map(blog=>blog.likes))
      //console.log(blogs.map(blog=>blog.likes))
      //console.log('Most likes: '+mostLikes)
      return blogs.length==0 ? 0 : blogs.find(blog=>blog.likes==mostLikes)
  }
  
  module.exports = {
    dummy,totalLikes,favoriteBlog
  }