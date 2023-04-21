import styles from "./PostsList.module.css";
import PostCard from "@/components/molecules/PostCard/PostCard";

export default function PostsList({posts}) {
  return (
    <ul className={styles.list}>
      {posts.map(post =>
        <PostCard
          key={post.id}
          image={post.image}
          title={post.title}
          description={post.description}
          createAt={post.createAt}
        />
      )}
    </ul>
  )
}