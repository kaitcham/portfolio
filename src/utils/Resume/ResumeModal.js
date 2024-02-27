import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import pdfFile from '../../assets/pdf/Christian Munezero.pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import ResumeWrapper from './ResumeStyles';

const backgroundVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const modalVariants = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ResumeModal = ({ setShowModal }) => {
  const [resume] = useState(pdfFile);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <ResumeWrapper>
      <motion.div
        className="modal__background full-page"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="modal__container" variants={modalVariants}>
          {resume && (
            <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
              <Viewer
                fileUrl={resume}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          )}
        </motion.div>
        <button
          type="button"
          className="close__icon"
          onClick={() => setShowModal(false)}
        >
          X
        </button>
      </motion.div>
    </ResumeWrapper>
  );
};

ResumeModal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default ResumeModal;
