import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostProps } from './components/Post';

import styles from './App.module.css';

import './global.css';

interface Post extends PostProps {
  id: number;
}


const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/daniloak.png',
      name: 'Danilo Kasparian',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ' },
      { type: 'link', content: 'linktest' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/baldini.png',
      name: 'John Steve',
      role: 'Web Designer'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ' },
      { type: 'link', content: 'linktestJohn' },
    ],
    publishedAt: new Date('2022-08-03 20:00:00')
  }
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
