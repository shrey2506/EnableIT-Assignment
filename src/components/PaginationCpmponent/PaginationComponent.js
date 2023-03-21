import React from 'react'
import './PaginationComponent.css'

const PaginationComponent = ({goToNextPage,goToPrevPage,dataPointer,setDataPointer,setCurrentPageUrl}) => {

  return (
    <div >
        { goToNextPage && 
        <button className='pagination-button pagination-button-next' onClick={()=>{
              setDataPointer(dataPointer+10)
              setCurrentPageUrl(`https://give-me-users-forever.vercel.app/api/users/${dataPointer+10}/next`)
        }}>Next</button>}
        { goToPrevPage && <button className='pagination-button pagination-button-prev' onClick={()=>{
              setDataPointer(dataPointer-10)
              setCurrentPageUrl(`https://give-me-users-forever.vercel.app/api/users/${dataPointer-10}/next`)
        }}>Previous</button>}
    </div>
  )
}

export default PaginationComponent