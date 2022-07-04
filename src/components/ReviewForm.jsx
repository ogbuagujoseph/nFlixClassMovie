import React, {useState, useContext} from 'react'
import { ReviewContext } from '../ReviewContext'

const ReviewForm = () => {
const {setSearchKey} = useContext (ReviewContext)
const [show, setShow] = useState ('');

const handleSubmit = (e) => {
e.preventDefault()
setSearchKey(show)
setShow('')
}

  return (
    <header className='form'>
        
       <main className='myForm'>
       <h1 className='form-title'>nFlix</h1>
       <form onSubmit={handleSubmit}>
        <input className='input_search' type="text" placeholder="Search" value={show} onChange={(e) => setShow(e.target.value)} />
        <div><button className='search_btn'>Search</button></div>
        </form>
       </main>
    </header>
  )
}

export default ReviewForm