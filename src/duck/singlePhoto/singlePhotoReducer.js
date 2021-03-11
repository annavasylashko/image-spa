import {
  FETCH_SINGLE_PHOTO_BEGIN,
  FETCH_SINGLE_PHOTO_SUCCESS,
  FETCH_SINGLE_PHOTO_FAILURE,
} from "./singlePhotoActions";

const initialState = {
  photoDetails: {},
  loading: false,
  error: null,
};

export default function SinglePhotoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SINGLE_PHOTO_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SINGLE_PHOTO_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        photoDetails: action.payload.singlePhoto,
      };

    case FETCH_SINGLE_PHOTO_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
