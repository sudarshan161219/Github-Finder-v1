import React from 'react'
import { AiFillEye, AiOutlineLink, AiOutlineInfoCircle, AiOutlineStar, AiOutlineFork } from 'react-icons/ai'


const RepoItem = ({repo}) => {

const {
name,
description,
html_url,
forks,
open_issues,
watchers_count,
stargazers_count
} = repo

  return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900' >
<div className="card-body">
    <h3 className="mb-2 text-xl font-semibold">
        <a href={html_url}><AiOutlineLink className='inline mr-1' />{name}</a>
    </h3>
    <p className='mb-3' >{description}</p>
    <div>
        <div className="mr-2 badge badge-info badge-lg">
        <AiFillEye className='inline mr-2' />{watchers_count}
        </div>
        <div className="mr-2 badge badge-sucess badge-lg">
        <AiOutlineStar className='inline mr-2' />{stargazers_count}
        </div>
        <div className="mr-2 badge badge-error badge-lg">
        <AiOutlineInfoCircle className='inline mr-2' />{open_issues}
        </div>
        <div className="mr-2 badge badge-info badge-lg">
        <AiOutlineFork className='inline mr-2' />{forks}
        </div>
    </div>
</div>
    </div>
  )
}

export default RepoItem