import React, { useState } from 'react'
import Modal from 'react-modal'
import ScrollableAnchor from 'react-scrollable-anchor'
import { EventsListStrings } from '../Strings/Strings'

const {
  TITLE, DRESS_CODE, CEREMONY, COCKTAIL, DINNER, DANCE,
} = EventsListStrings

const ModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
  },
}


const EventsListSection = () => {
  const [OpenModal, setOpenModal] = useState(false)
  return (
    <ScrollableAnchor id="Events">
      <section className="flex flex-row flex-wrap text-white items-center justify-around">
        <h3 className="header text-6xl w-full">{TITLE}</h3>
        <div className="w-6/12 border-r-2 border-white">
          <div className="m-8">
            <h5>
              {CEREMONY.TITLE}
            </h5>
            <h6>
              {CEREMONY.TIME}
            </h6>
            <p>
              {CEREMONY.DESCRIPTION}
            </p>
          </div>
          <div className="m-8">
            <h5>
              {COCKTAIL.TITLE}
            </h5>
            <h6 className="time">
              {COCKTAIL.TIME}
            </h6>
            <p>
              {COCKTAIL.DESCRIPTION}
            </p>
          </div>
        </div>
        <div className="w-6/12">
          <div className="m-8">
            <h5>
              {DINNER.TITLE}
            </h5>
            <h6>
              {DINNER.TIME}
            </h6>
            <p>
              {DINNER.DESCRIPTION}
            </p>
          </div>
          <div className="m-8">
            <h5>
              {DANCE.TITLE}
            </h5>
            <h6 className="time">
              {DANCE.TIME}
            </h6>
            <p>
              {DANCE.DESCRIPTION}
            </p>
          </div>
        </div>
        <button onClick={() => setOpenModal(!OpenModal)} className="btn btn--yellow hover:bg-yellow-400 focus:outline-none focus:shadow-outline active:bg-yellow-600 m-8" type="button">{DRESS_CODE.TITLE}</button>
        <Modal
          isOpen={OpenModal === true}
          onRequestClose={() => setOpenModal(false)}
          style={ModalStyles}
          contentLabel={DRESS_CODE.TITLE}
        >
          <div className="text-center">
            <h1 className="text-center text-2xl p-4">{DRESS_CODE.TITLE}</h1>
            <p className="content-center align-center px-24">
              {DRESS_CODE.DESCRIPTION}
            </p>
          </div>
        </Modal>
      </section>
    </ScrollableAnchor>
  )
}

export default EventsListSection
