const { test, describe } = require("node:test")
const assert = require("node:assert")
const listHelper = require("../utils/list_helper")

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0,
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0,
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0,
  },
]

describe("dummy", () => {
  test("dummy returns one", () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    assert.strictEqual(result, 1)
  })
})

describe("total likes", () => {
  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes([blogs[0]])
    assert.strictEqual(result, 7)
  })

  test("zero when list is empty", () => {
    const result = listHelper.totalLikes([])
    assert.strictEqual(result, 0)
  })

  test("when list has many blogs, equals the sum of likes", () => {
    const result = listHelper.totalLikes([blogs[0], blogs[1], blogs[2]])
    assert.strictEqual(result, 24)
  })
})

describe("favorite blog", () => {
  test("when list has only one blog, equals that blog", () => {
    const result = listHelper.favoriteBlog([blogs[0]])
    assert.deepStrictEqual(result, blogs[0])
  })

  test("null when list is empty", () => {
    const result = listHelper.favoriteBlog([])
    assert.strictEqual(result, null)
  })

  test("when list has many blogs, equals the blog with most likes", () => {
    const result = listHelper.favoriteBlog([blogs[0], blogs[1], blogs[2]])
    assert.deepStrictEqual(result, blogs[2])
  })
})

describe("most blogs", () => {
  test("when list has only one blog, equals the author of that blog", () => {
    const result = listHelper.mostBlogs([blogs[0]])
    assert.deepStrictEqual(result, { author: blogs[0].author, blogs: 1 })
  })

  test("null when list is empty", () => {
    const result = listHelper.mostBlogs([])
    assert.strictEqual(result, null)
  })

  test("when list has many blogs, equals the author with most blogs", () => {
    const result = listHelper.mostBlogs(blogs)
    assert.deepStrictEqual(result, { author: "Edsger W. Dijkstra", blogs: 2 })
  })
})

describe("most likes", () => {
  test("when list has only one blog, equals the author of that blog", () => {
    const result = listHelper.mostLikes([blogs[0]])
    assert.deepStrictEqual(result, { author: blogs[0].author, likes: blogs[0].likes })
  })
  test("null when list is empty", () => {
    const reslt=listHelper.mostLikes([])
    assert.strictEqual(reslt, null)
  })
  test("when list has many blogs, equals the author with most likes", () => {
    const result = listHelper.mostLikes(blogs)
    assert.deepStrictEqual(result, { author: "Edsger W. Dijkstra", likes: 17 })
  }
  )
})

