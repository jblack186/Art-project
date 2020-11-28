import Link from 'next/link';
import Layout from '../components/Layout'

export default () => (
  <div>
    <h1>About</h1>
    <Link href='/'>
      <a>Go to home</a>
    </Link>
    <img src="/static/github1.png" alt="git" height="200px"/>
    
  </div>
)

