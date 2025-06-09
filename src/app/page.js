
import React,{Suspense} from 'react'
import Slider from '../components/Slider'
import HomeDetail from '../components/HomeDetail'
import HomeMenus from '../components/HomeMenus'
import Footer from '../components/Footer'


const Home = () => {
  return (
 <>
      <Slider />
      <Suspense fallback={<div>Loading...</div>}>
      <HomeMenus />
     </Suspense>
      <HomeDetail />
      <Footer />
      </>
  
  )
}

export default Home
