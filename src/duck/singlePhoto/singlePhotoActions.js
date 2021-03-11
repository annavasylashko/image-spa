import APIService from "../../APIService";

export const FETCH_SINGLE_PHOTO_BEGIN = "singlePhoto/fetchBegin";
export const FETCH_SINGLE_PHOTO_SUCCESS = "singlePhoto/fetchSuccess";
export const FETCH_SINGLE_PHOTO_FAILURE = "signlePhoto/fetchFailure";

export function fetchSinglePhoto(id) {
  return (dispatch) => {
    dispatch(fetchSinglePhotoBegin());
    return APIService.fetchSinglePhoto(id)
      .then((json) => {
        dispatch(fetchSinglePhotoSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchSinglePhotoFailure(error)));
  };
}

export const fetchSinglePhotoBegin = () => ({
  type: FETCH_SINGLE_PHOTO_BEGIN,
});

export const fetchSinglePhotoSuccess = (singlePhoto) => ({
  type: FETCH_SINGLE_PHOTO_SUCCESS,
  payload: { singlePhoto },
});

export const fetchSinglePhotoFailure = (error) => ({
  type: FETCH_SINGLE_PHOTO_FAILURE,
  payload: { error },
});
