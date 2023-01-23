import React from 'react'
import { UserResult, UserSearch } from '../components'

const Home = () => {
  return (
    <>
        <UserSearch />
        <UserResult />
        {/* {import.meta.env.VITE_GITHUB_TOKEN} */}
    </>
  )
}

export default Home