import { Link, routes } from '@redwoodjs/router'

const DefaultLayout = ({ children }) => {
  return <>
    <nav className="def-navbar">
      <ul>
        <Link to={routes.home()}>Home</Link>
      </ul>
    </nav>
    <main>{children}</main>
  </>
}

export default DefaultLayout
