import React from 'react'

const VideoGallery = () => {
  return (
    <div>

<h1 className='text-2xl font-bold capitalize py-2'>video Gallery</h1>

<div className="flex flex-wrap p-2 gap-2 lg:justify-center  ">
  {["https://www.youtube.com/embed//Sr1kzDcON38?si=n35iAl5XhoXbxpQC","https://www.youtube.com/embed/KSiFxXoxbD8?si=Hlh5FC9DZliSLkwm","https://www.youtube.com/embed/DENYdf0n9wo?si=r9tCkA-69AxxeoU7","https://www.youtube.com/embed/5b3C3byJqvo?si=cyWhBdEnguMEi9E2"].map((item,idx)=>{
    return <iframe width="560" height="315" src={item} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   
  })}

{/*   <iframe width="560" height="315" src={item} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
</div>
{/*       <iframe width="560" height="315" src="https://www.youtube.com/embed/5b3C3byJqvo?si=cyWhBdEnguMEi9E2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
</div>
  )
}

export default VideoGallery
