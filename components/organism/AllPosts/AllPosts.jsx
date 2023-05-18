import styles from "./AllPosts.module.css";
import PostsList from "@/components/organism/PostList/PostsList";
import useGetPosts from "@/hooks/useGetPosts";

export default function AllPosts({title, posts}) {
  const postList = useGetPosts(posts);

  return (
    <section className={styles.posts}>
      <h1>{title}</h1>

      <PostsList posts={postList}/>
    </section>
  )
}