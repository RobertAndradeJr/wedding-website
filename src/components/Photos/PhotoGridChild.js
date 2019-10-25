import React from 'react'
import PropTypes from 'prop-types'
import { useArrowNavigationWithFocusState } from 'react-arrow-navigation'

const PhotoGridChild = ({
  index,
  item,
  handleClick,
  styles,
}) => {
  const {
    focusProps: { ref, tabIndex, onClick },
  } = useArrowNavigationWithFocusState(index, 0)
  return (
    <button
      type="button"
      ref={ref}
      tabIndex={tabIndex}
      className={styles.join(' ')}
      onClick={() => {
        onClick()
        handleClick(item)
      }}
      style={{ transition: 'padding 700ms' }}
    >
      <img src={item} alt="engagement" />
    </button>
  )
}

PhotoGridChild.defaultProps = {
  index: PropTypes.number,
  item: PropTypes.string,
  handleClick: PropTypes.func,
  styles: PropTypes.array,
}

PhotoGridChild.propTypes = {
  index: PropTypes.number,
  item: PropTypes.string,
  handleClick: PropTypes.func,
  styles: PropTypes.array,
}

export default PhotoGridChild
