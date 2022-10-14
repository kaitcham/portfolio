import React from 'react';
import PropTypes from 'prop-types';
import ResumeWrapper from './ResumeStyles';

const ResumeModal = ({ setShowModal }) => (
  <ResumeWrapper>
    <div className="modal__container">Hello world!</div>
    <button
      type="button"
      className="close__icon"
      onClick={() => setShowModal(false)}
    >
      X
    </button>
  </ResumeWrapper>
);

ResumeModal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default ResumeModal;
