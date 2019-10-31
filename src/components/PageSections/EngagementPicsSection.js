import React, { useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { EngagementPicsStrings } from '../Strings/Strings'
import TravelingIllustration from '../../assets/undraw_travelers.svg'
import PhotoGrid from '../Photos/PhotoGrid'
import UseImageLoader from '../../utils/UseImageLoader'

const { SUBTITLE, TITLE } = EngagementPicsStrings

const gridStyles = [
  'w-2/12',
  'p-2',
  'hover:p-0',
]

const EngagementPicsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const handleClick = (image) => setSelectedImage(image)
  const items = UseImageLoader()

  return (
    <ScrollableAnchor id="Engagement">
      <section className="h-auto flex flex-col items-center pb-8">
        <h2 className="text-4xl text-white py-2">{TITLE}</h2>
        <h2 className="text-lg text-white py-2">{SUBTITLE}</h2>
        <div className=" flex flex-row items-center justify-between w-screen">
          <div className="float-left w-4/12 flex flex-col justify-around max-h-full">
            <img src={selectedImage === null ? TravelingIllustration : selectedImage} alt="two travelers" className="max-h-full" />
          </div>
          {items && <PhotoGrid items={items} handleClick={handleClick} gridStyles={gridStyles} />}
        </div>
      </section>
    </ScrollableAnchor>
  )
}

export default EngagementPicsSection
