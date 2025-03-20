import './pre-loading.css';

const PreLoading = () => (
  <div className='wrapper'>
    <svg className="spinner" role="progressbar" aria-label="Loading">
      <circle className="spinner__track"></circle>
      <circle className="spinner__indicator"></circle>
    </svg>
  </div>
);

export default PreLoading;
