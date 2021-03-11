import APIService from "../../APIService";

export const FETCH_PHOTOS_BEGIN = "photos/fetchBegin";
export const FETCH_PHOTOS_SUCCESS = "photos/fetchSuccess";
export const FETCH_PHOTOS_FAILURE = "photos/fetchFailure";

export function fetchPhotos(page) {
  return (dispatch) => {
    dispatch(fetchPhotosBegin());
    return APIService.fetchPhotos(page)
      .then((json) => {
        dispatch(fetchPhotosSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchPhotosFailure(error)));
  };
}

export const fetchPhotosBegin = () => ({
  type: FETCH_PHOTOS_BEGIN,
});

export const fetchPhotosSuccess = (photos) => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: { photos },
});

export const fetchPhotosFailure = (error) => ({
  type: FETCH_PHOTOS_FAILURE,
  payload: { error },
});
