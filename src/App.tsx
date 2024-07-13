import '../src/global.css'

import styles from './App.module.css'

import Header from './components/Header'
import Post, { PostProps } from './components/Post'
import Sidebar from './components/Sidebar'

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/manuteu.png',
      name: 'Matheus Rodrigues',
      role: 'Front end Developer',
    },
    content: [
      { type: 'p', content: 'Fala pessoal 👋' },
      { type: 'p', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'a', content: 'Acesse e deixe seu feedback 👉 devonlane.design' },
    ],
    publishedAt: new Date('2024-07-10 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Dieguin',
      role: 'Full stack Developer',
    },
    content: [
      { type: 'p', content: 'Fala pessoal 👋' },
      { type: 'p', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'a', content: 'Acesse e deixe seu feedback 👉 devonlane.design' },
    ],
    publishedAt: new Date('2024-07-13 20:00:00')
  },
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post key={post.id} author={post.author} publishedAt={post.publishedAt} content={post.content} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
