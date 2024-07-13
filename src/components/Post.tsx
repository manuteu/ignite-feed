import Avatar from './Avatar'
import Comment from './Comment'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { useState } from 'react'

export type PostProps = {
  id?: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  }
  publishedAt: Date;
  content: { type: string, content: string }[];
}

export default function Post({ author: { name, avatarUrl, role }, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState([
    'Fera baluco'
  ])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR as any,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR as any,
    addSuffix: true
  })

  const handleCreateNewComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setComments([...comments, newCommentText])
    setNewCommentText('')

  }

  const handleNewCommentChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e?.target?.setCustomValidity('')
    setNewCommentText(e?.currentTarget.value)
  }

  const handleNewCommentInvalid = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e?.target?.setCustomValidity('Esse campo é obrigatório!');
  }

  const isNewCommentEmpty = newCommentText.length === 0;


  const deleteComment = (content: string) => {
    const removedComment = comments.filter(comment => {
      return comment !== content
    })

    setComments(removedComment)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={avatarUrl} />
          <div className={styles.authorInfo} >
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content?.map((line, index) => {
          if (line.type === 'p') {
            return <p key={index}>{line.content}</p>
          } else if (line.type === 'a') {
            return <p key={index}><a href=''>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={(e) => handleCreateNewComment(e)} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment key={index} content={comment} onDelete={deleteComment} />
        ))}
      </div>
    </article>
  )
}
