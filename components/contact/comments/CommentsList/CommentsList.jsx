import styles from "./CommentsList.module.css";
import CommentItem from "@/components/contact/comments/CommentItem/CommentItem";

const COMMENTS_DUMMY_DATA = [
  {id: 1, content: "예진짱!", createAt: "2023.03.28"},
  {id: 2, content: "메롱@!", createAt: "2023.03.25"},
  {id: 3, content: "화이티이이이잉!", createAt: "2023.03.25"},
  {id: 4, content: "히힣!", createAt: "2023.03.23"},
  {id: 5, content: "신나!!", createAt: "2023.03.21"},
]

export default function CommentsList() {
  return (
    <ul className={styles.list}>
      {
        COMMENTS_DUMMY_DATA.map(c => <CommentItem
          key={c.id}
          content={c.content}
          createAt={c.createAt}
        />)
      }
    </ul>
  )
}