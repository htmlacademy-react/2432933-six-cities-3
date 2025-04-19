import toastReducer, {setError, removeError} from './toast.reducer';


describe('toastReducer', () => {
  it('should return the initial state', () => {
    expect(toastReducer(undefined, { type: undefined })).toEqual({
      type: null,
      message: null,
    });
  });

  it('should handle setError with valid payload', () => {
    const previousState = { type: null, message: null };
    const errorPayload = { type: 'error', message: 'An error occurred' };
    expect(toastReducer(previousState, setError(errorPayload))).toEqual({ type: 'error', message: 'An error occurred' });
  });

  it('should handle removeError', () => {
    const previousState = { type: 'error', message: 'An error occurred' };
    expect(toastReducer(previousState, removeError())).toEqual({ type: null, message: null, });
  });

});

