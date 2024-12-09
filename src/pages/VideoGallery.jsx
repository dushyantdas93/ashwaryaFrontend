import React from 'react'

const VideoGallery = () => {
  return (
    <div>

<h1 className='text-2xl font-bold capitalize py-2'>video Gallery</h1>

<div className="flex flex-wrap p-2 gap-2 lg:justify-center  ">
  {["https://www.youtube.com/embed/XRSQHkzrQGQ?si=vH0GjubbyWD92ZEI","https://www.youtube.com/embed/XRSQHkzrQGQ?si=vH0GjubbyWD92ZEI"].map((item,idx)=>{
    return <iframe width="560" height="315" src={item} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   
  })}
</div>
</div>
  )
}

export default VideoGallery