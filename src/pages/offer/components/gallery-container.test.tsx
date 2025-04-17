import { render, /* screen */ } from '@testing-library/react';
import GalleryContainer from './gallery-container';
import { withStore } from '../../../utils/mock-component';


const initialState = {
  offer: null,
  offersNearby: [],
  comments: [],
  userComment: null,
  isLoading: false,

};

describe('Component: GalleryContainer', () => {
  it('should render correctly', () => {
    const mockState = {
      offer:{
        ...initialState,
        images:[
          'https://url-to-image/image.png',
          'https://url-to-image/image2.png',
        ]
      }
    };
    const { withStoreComponent } = withStore(<GalleryContainer />, mockState);
    render(withStoreComponent);

  });
});
