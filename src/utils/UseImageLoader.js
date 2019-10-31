import { useState, useEffect } from 'react'
// import {
//   Image,
//   Transformation,
//   CloudinaryContext,
// } from 'cloudinary-react'

const photos = [
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548881/Engagement-Photos/20180623_191010_go2suw.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548882/Engagement-Photos/20180623_191437_q9yk0x.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548884/Engagement-Photos/20180623_191037_fe05ov.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548885/Engagement-Photos/20180623_205233_wjbg9g.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548886/Engagement-Photos/20180623_205239_hgewa4.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548888/Engagement-Photos/20180623_190915_tf2v1q.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548887/Engagement-Photos/20180623_191710_okzb16.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548889/Engagement-Photos/20180623_134717_syngtq.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548865/Engagement-Photos/20180623_134745_z6ka80.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548866/Engagement-Photos/20180623_190629_cermq0.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548868/Engagement-Photos/20180623_134850_ainzrb.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548868/Engagement-Photos/20180623_190656_ghwe4u.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548869/Engagement-Photos/20180623_134947_sit4vd.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548869/Engagement-Photos/20180623_190755_nqhyrq.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548870/Engagement-Photos/20180623_135435_emicez.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548871/Engagement-Photos/20180623_141003_abiqwx.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548872/Engagement-Photos/20180623_141816_bz7czy.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548872/Engagement-Photos/20180623_135423_ynbcfp.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548876/Engagement-Photos/20180623_190901_mjilve.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548876/Engagement-Photos/20180623_142434_fph3yt.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548877/Engagement-Photos/20180623_190932_frvqwy.jpg',
  'https://res.cloudinary.com/dcz8zqfra/image/upload/v1572548878/Engagement-Photos/20180623_190948_dpersg.jpg',

]

const UseImageLoader = () => {
  const [images, setImages] = useState()

  useEffect(() => {
    const getData = async () => {
      const data = Promise.all(
        photos.map(async (photo) => fetch(photo)),
      )
      return data
    }
    getData()
      .then((data) => setImages(data.map((item) => item.url)))
      .catch((error) => error)
  }, [])

  return images
}

export default UseImageLoader
