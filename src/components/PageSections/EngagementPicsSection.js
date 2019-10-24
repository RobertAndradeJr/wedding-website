import React, { useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { EngagementPicsStrings } from '../Strings/Strings'
import TravelingIllustration from '../../assets/undraw_travelers.svg'

const { SUBTITLE, TITLE } = EngagementPicsStrings
const importAll = (r) => r.keys().map(r)
const images = importAll(require.context('../../assets/engagement-photos', false, /\.(png|jpe?g|svg)$/))

const EngagementPicsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  // const handleClick = (image) => setSelectedImage(image)
  const handleFocus = (image) => setSelectedImage(image)
  const handleBlur = () => setSelectedImage(null)
  return (
    <ScrollableAnchor id="Engagement">
      <section className="h-auto flex flex-col items-center pb-8">
        <h2 className="text-4xl text-white py-8">{TITLE}</h2>
        <h2 className="text-lg text-white py-8">{SUBTITLE}</h2>
        <div className=" flex flex-row items-center justify-between w-screen">
          <div className="float-left w-4/12 flex flex-col justify-around max-h-full">
            <img src={selectedImage === null ? TravelingIllustration : selectedImage} alt="two travelers" className="max-h-full" />
          </div>
          <div className="float-right w-6/12 flex flex-row flex-wrap clearfix">
            {
              images.map((image) => (
                <button key={image} type="button" onFocus={() => handleFocus(image)} onBlur={() => handleBlur()} className="w-2/12 p-2 hover:p-0" style={{ transition: 'padding 700ms' }}>
                  <img src={image} alt="engagement" />
                </button>
              ))
            }
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  )
}

export default EngagementPicsSection
