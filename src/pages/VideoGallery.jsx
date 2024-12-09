noimport React from 'react'

const VideoGallery = () => {
  return (
    <div>

<h1 className='text-2xl font-bold capitalize py-2'>video Gallery</h1>

<div className="flex flex-wrap p-2 gap-2 lg:justify-center  ">
  {["https://youtu.be/LXb3EKWsInQ?si=cCl9pZvuOYqynKF7","https://youtu.be/7ZP7TWiOrDs?si=wWkxIFaxO2DPL0uy","https://youtu.be/qHxxmWySb6c?si=f2807Su2s3ZSALJ3","https://youtu.be/SJa4Qpkqg-I?si=sdBOJlfScw6CVUrO"].map((item,idx)=>{
    return <iframe width="560" height="315" src={item} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   
  })}
</div>
</div>
  )
}

export default VideoGallery