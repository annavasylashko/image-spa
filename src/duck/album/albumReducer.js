import {
  FETCH_ALBUM_BEGIN,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE,
  FETCH_ALBUM_USER_BEGIN,
  FETCH_ALBUM_USER_SUCCESS,
  FETCH_ALBUM_USER_FAILURE,
} from "./albumActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
  user: {},
};

export default function PhotosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALBUM_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ALBUM_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        items: [...state.items, ...action.payload.photos],
      };

    case FETCH_ALBUM_FAILURE:
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

    case FETCH_ALBUM_USER_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ALBUM_USER_SUCCESS:
      console.log(state);
      console.log(action.payload);
      return {
        ...state,
        user: action.payload.user,
      };

    case FETCH_ALBUM_USER_FAILURE:
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
