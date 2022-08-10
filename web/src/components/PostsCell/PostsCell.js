import { Link, routes } from "@redwoodjs/router"

export const QUERY = gql`
  query PostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }) => {
  return (
    <ul>
      {posts.map((item) => {
        return <div className="post-card"><Link to={routes.post({id: item.id})} key={item.id} className="post-title">{item.title}</Link><li key={item.body} className="post-body">{item.body}</li><li key={item.date} className="post-date">{item.createdAt}</li></div>
      })}
    </ul>
  )
}