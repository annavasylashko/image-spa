import APIService from "../../APIService";

export const FETCH_ALBUM_BEGIN = "album/fetchBegin";
export const FETCH_ALBUM_SUCCESS = "album/fetchSuccess";
export const FETCH_ALBUM_FAILURE = "album/fetchFailure";
export const FETCH_ALBUM_USER_BEGIN = "album/fetchUserBegin";
export const FETCH_ALBUM_USER_SUCCESS = "album/fetchUserSuccess";
export const FETCH_ALBUM_USER_FAILURE = "album/fetchUserFailure";

export function fetchAlbum(albumId, page) {
  return (dispatch) => {
    dispatch(fetchAlbumBegin());
    return APIService.fetchAlbum(albumId, page)
      .then((json) => {
        dispatch(fetchAlbumSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchAlbumFailure(error)));
  };
}

export function fetchUser(albumId) {
  return (dispatch) => {
    dispatch(fetchAlbumUserBegin());
    return APIService.fetchUser(albumId)
      .then((json) => {
        dispatch(fetchAlbumUserSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchAlbumUserFailure(error)));
  };
}

export const fetchAlbumBegin = () => ({
  type: FETCH_ALBUM_BEGIN,
});

export const fetchAlbumSuccess = (photos) => ({
  type: FETCH_ALBUM_SUCCESS,
  payload: { photos },
});

export const fetchAlbumFailure = (error) => ({
  type: FETCH_ALBUM_FAILURE,
  payload: { error },
});

export const fetchAlbumUserBegin = () => ({
  type: FETCH_ALBUM_USER_BEGIN,
});

export const fetchAlbumUserSuccess = (user) => ({
  type: FETCH_ALBUM_USER_SUCCESS,
  payload: { user },
});

export const fetchAlbumUserFailure = (error) => ({
  type: FETCH_ALBUM_USER_SUCCESS,
  payload: { error },
});
