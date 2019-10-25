import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { ArrowNavigation } from 'react-arrow-navigation'
import PhotoGridChild from './PhotoGridChild'

const PhotoGrid = ({ items, handleClick, gridStyles }) => {
  const navRef = useRef()

  return (
    <ArrowNavigation className="float-right w-6/12 flex flex-row flex-wrap clearfix" ref={navRef} initialIndex={[0, 0]}>
      {
        items.map((item, index) => (
          <PhotoGridChild
            key={item}
            label={item}
            index={index}
            item={item}
            handleClick={() => handleClick(item)}
            styles={gridStyles}
          />
        ))
      }
    </ArrowNavigation>
  )
}


PhotoGrid.defaultProps = {
  items: PropTypes.array,
  handleClick: PropTypes.func,
  gridStyles: PropTypes.array,
}

PhotoGrid.propTypes = {
  items: PropTypes.array,
  handleClick: PropTypes.func,
  gridStyles: PropTypes.array,
}

export default PhotoGrid
