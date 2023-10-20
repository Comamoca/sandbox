import { collect } from "../collect.ts";
import { create_post } from "../markdown.ts";
import { globToRegExp } from "https://deno.land/std@0.204.0/path/mod.ts";
import { Post } from "../post.ts";

const md_files = await collect(
  ["**/blog/*.md"].map((glob) => globToRegExp(glob)),
);

const posts = await Promise.all(md_files.map((md) => create_post(md)));

function PostCard(props: { post: Post }) {
  const { post } = props;
  const title = post.attr.title;
  const description = post.attr.description;

  return (
    <>
      <div className="m-5">
        <a href={`/blog/${post.entry.name.replace(".md", ".html")}`}>
          <div className="
	  card
	  card-side
	  bg-base-100
	  shadow-xl
	  hover:bg-primary
	  hover:shadow
	  transition-all
	  duration-500
	  ease-out
	  border-2
	  border-primary
	  w-96">
            <div className="card-body">
              <h2 className="card-title text-4xl">{title}</h2>
              {
                <p className="text-2xl mt-5">
                  {`${description.slice(0, 20)}...`}
                </p>
              }
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

function Posts() {
  return (
    <>
      <ul>
        {posts.map((post: Post) => (
          <li>
            <PostCard
              post={post}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default function () {
  return (
    <>
      <div class="flex flex-col">
        <div class="mx-2 mb-4">
          <h1 class="flex justify-center text-4xl">Howdy!</h1>

          <p>this is blog top page.</p>
        </div>
        <Posts />
      </div>
    </>
  );
}
