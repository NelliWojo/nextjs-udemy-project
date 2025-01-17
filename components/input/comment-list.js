import styles from "./comment-list.module.css";

function CommentList(props) {
  const { items } = props;

  return (
    <ul className={styles.comments}>
      {items?.map((item) => (
        <li key={item.id}>
          <p>{item.feedback}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
