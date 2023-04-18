import {useEffect, useState} from "react";

export default function useGetPosts(posts, featured) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    if (featured) {
      setPostList(posts.filter(p => p.featured));
    } else {
      setPostList(posts);
    }
  }, []);

  console.log(posts, postList)

  return postList;
}