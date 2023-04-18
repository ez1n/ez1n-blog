import PostsList from "@/components/posts/PostList/PostsList";
import useGetPosts from "@/hooks/useGetPosts";

export default function AllPosts({title, posts, featured}) {
  const postList = useGetPosts(posts, featured);

  return (
    <section>
      <h1>{title}</h1>

      <PostsList posts={postList}/>
    </section>
  )
}