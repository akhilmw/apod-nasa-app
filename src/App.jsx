import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"


const App = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const [showModal, setShowModal] = useState(false)

  const handleToggleModal = () => {
    setShowModal(!showModal)
  }


  useEffect(() => {

    const fetchAPIData = async () => {
      const NASA_KEY = import.meta.env.VITE_REACT_APP_NASA_API_KEY;
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`

      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched data from local Cache')
        return
      }

      localStorage.clear()

      try{
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched data from API')
      } catch(err) {

      }

    }
    fetchAPIData()
  }, [])

  return (
    <>
      {data ? (<Main data = {data}/>) : 
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      }
      {(showModal && <Sidebar data = {data} handleToggleModal = {handleToggleModal}/>)}
      {(data && <Footer data = {data} handleToggleModal = {handleToggleModal}/>)}
    </>
  )
}

export default App
