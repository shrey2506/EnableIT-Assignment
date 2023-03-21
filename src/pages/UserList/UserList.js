import React,{useState,useEffect} from 'react'
import axios from 'axios'
import PaginationComponent from '../../components/PaginationCpmponent/PaginationComponent'
import './UserList.css'
import UserCard from '../../components/UserCard/UserCard'


const UserList = () => {
    const [dataPointer,setDataPointer]=useState(0)
    const [userData,setUserData]=useState([])
    const [currentPageUrl,setCurrentPageUrl]=useState(`https://give-me-users-forever.vercel.app/api/users/${dataPointer}/next`)
    const [loading,setLoading]=useState(true)
  
    const fetchData=async ()=>{
        await axios.get(currentPageUrl).then(res=>{
           setUserData(res.data.users)
          setLoading(false)
        })
        .catch(err=>{
          console.log(err)
        })            
    }

    useEffect(()=>{
        setLoading(true)
        fetchData()
      },[currentPageUrl])
    
  return (
    <>
    {loading && <div>Loading...</div>}
    {!loading && <div className='list-container'>
        <div className='grid'>
                {userData && userData.map((p,i)=>{
                    if(i<10){
                      return(
                        <UserCard user={p}  key={i}/>
                     )
                    }
                })}
        </div>  

        <PaginationComponent  
            goToNextPage={true}
            goToPrevPage={dataPointer!==0? true:false}
            dataPointer={dataPointer}
            setDataPointer={setDataPointer}
            setCurrentPageUrl={setCurrentPageUrl}
        />
    </div>}
    </>
  )
}

export default UserList