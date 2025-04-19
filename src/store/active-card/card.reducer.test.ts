import activeCardReducer, { setActiveCard } from './card-reducer';


describe('activeCardReducer', () => {
  it('should return the initial state', () => {
    expect(activeCardReducer(undefined, { type: undefined })).toEqual({activeCard: null});
  });

  it('should handle setActiveCard with a valid string', () => {
    const previousState = { activeCard: null };
    const newActiveCard = 'card-123';
    expect(activeCardReducer(previousState, setActiveCard(newActiveCard))).toEqual({activeCard: 'card-123'});
  });

  it('should handle setActiveCard with null', () => {
    const previousState = { activeCard: 'card-123' };
    expect(activeCardReducer(previousState, setActiveCard(null))).toEqual({activeCard: null,});
  });

});
