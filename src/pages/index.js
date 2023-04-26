// Step 1: Import React
import * as React from 'react'
import {link} from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to the Future Site </h1>
      <Link to="/about">About</Link>
      <p>New Mexico Learning Project</p>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage

