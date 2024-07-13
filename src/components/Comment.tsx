import { useState } from 'react';
import Avatar from './Avatar'
import styles from './Comment.module.css'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

type CommentProps = {
  content: string;
  onDelete: (c: string) => void;
}

export default function Comment({ content, onDelete }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  const handleDeleteComment = () => {
    onDelete(content)
  }

  const handleLikeComment = () => {
    setLikeCount(prevState => prevState + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/manuteu.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Rodrigues</strong>

              <time title='13 de julho às 08:13h' dateTime='2024-07-13 08:00:00'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'><Trash size={24} /> </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
