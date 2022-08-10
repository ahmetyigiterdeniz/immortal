import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PostsCell from 'src/components/PostsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="content"><div className="title">Welcome to <span>Immortal</span></div><PostsCell /></div>
    </>
  )
}

export default HomePage
