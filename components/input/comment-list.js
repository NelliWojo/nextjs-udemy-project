import styles from "./comment-list.module.css";

function CommentList() {
  return (
    <ul className={styles.comments}>
      {/* Render list of comments - fetched from API */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Max</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Max</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
