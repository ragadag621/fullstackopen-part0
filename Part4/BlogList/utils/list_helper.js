const dummy = (blogs) => 1

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }

  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  let favorite = blogs[0]
  blogs.forEach((blog) => {
    if (blog.likes > favorite.likes) {
      favorite = blog
    }
  })
  return favorite
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }
  const authorCount = {}
  blogs.forEach((blog) => {
    if (authorCount[blog.author]) {
      authorCount[blog.author] += 1
    } else {
      authorCount[blog.author] = 1
    }
  })
  let most = { author: blogs[0].author, blogs: 1 }
  for (const author in authorCount) {
    if (authorCount[author] > most.blogs) {
      most = { author: author, blogs: authorCount[author] }
    }
  }
  return most
}



const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null
  }
  const authorLikes = {}
  blogs.forEach((blog) => {
    if (authorLikes[blog.author]) {
      authorLikes[blog.author] += blog.likes
    } else {
      authorLikes[blog.author] = blog.likes
    }
  })
  let most = { author: blogs[0].author, likes: blogs[0].likes }
  for (const author in authorLikes) {
    if (authorLikes[author] > most.likes) {
      most = { author: author, likes: authorLikes[author] }
    }
  }
  return most
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
