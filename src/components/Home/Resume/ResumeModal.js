import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import pdfFile from '../../../assets/pdf/Munezero Christian Resume.pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import ResumeWrapper from './ResumeStyles';

const ResumeModal = ({ setShowModal }) => {
  const [resume] = useState(pdfFile);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <ResumeWrapper>
      <div className="modal__container">
        {resume && (
          <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
            <Viewer fileUrl={resume} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        )}
      </div>
      <button
        type="button"
        className="close__icon"
        onClick={() => setShowModal(false)}
      >
        X
      </button>
    </ResumeWrapper>
  );
};

ResumeModal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default ResumeModal;
