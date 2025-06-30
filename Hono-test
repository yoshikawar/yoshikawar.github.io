//index.ts

import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json';
import blogs from "./blogs/blogs";
import auth from "./auth/auth";


const app = new Hono();
app.route("/posts", blogs);
app.route("/auth", auth);

app.use("*",prettyJSON());

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

export default app;






//auth.ts

import { Hono } from "hono"
import { basicAuth } from "hono/basic-auth"

const app = new Hono()

app.use(
  '/*',
  basicAuth({
    username: 'yoshikawa',
    password: 'yoshikawa',
  })
)

app.get('/page', (c) => {
  return c.text('You are authorized')
})

export default app;






//brogs.ts

import { Hono } from 'hono'

const app = new Hono();

let blogPosts = [
  {
    id: "1",
    title: "Blog1",
    content: "Blog1 Posts",
  },
  {
    id: "2",
    title: "Blog2",
    content: "Blog2 Posts",
  },
  {
    id: "3",
    title: "Blog3",
    content: "Blog3 Posts",
  },
];

app.get("/", (c) => c.json({ posts: blogPosts }));

app.get("/:id", (c) => {
  const id = c.req.param("id");
  const post = blogPosts.find((p) => p.id === id);

  if(post) {
    return c.json(post.title);
  }
  else{
    return c.json({ message: "not found this page" }, 404);
  }
});

app.post("/", async(c) => {
  const { title, content } = await c.req.json<{ title: string; content: string}>();
  const newPost = {id: String(blogPosts.length + 1), title, content };
  blogPosts = [...blogPosts, newPost];
  return c.json(newPost, 201);
});

app.put("/:id", async (c) => {
  const id = c.req.param("id");
  const index = blogPosts.findIndex((p) => p.id === id);

  if (index === -1) {
    return c.json({ message: "Post not found"}, 404)
  }

  const {title,content } = await c.req.json();
  blogPosts[index] = { ...blogPosts[index], title, content};

  return c.json(blogPosts[index]);
});

app.delete("/:id", async (c) => {
  const id = c.req.param("id");
  const index = blogPosts.findIndex((p) => p.id === id);

  if (index === -1) {
    return c.json({ message: "Post not found"}, 404)
  }

  blogPosts = blogPosts.filter((p) => p.id !== id);

  return c.json({ massege: "Blog post deleted"});
});

export default app;
