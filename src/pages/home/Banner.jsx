import React from 'react'
import bannerimg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row py-8 justify-between item-center gap-12'>
      <div className='md:w-1/2 w-full'>
      <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Release This Week</h1>
      <p className='mb-10'>It's time to update your reading list with some of the latest and greatest
      release in the literary world . from heart-pumping thrillers to captivating memoirs,
      this week's new release offer something for everyone</p>
      <button className='btn-primary'>
        Subscribe
      </button>

      </div>
      <div className='md:w-1/2 w-full flex item-center md:justify-end'>
        <img src={bannerimg} alt="" />
      </div>
    </div>
  )
}

export default Banner
