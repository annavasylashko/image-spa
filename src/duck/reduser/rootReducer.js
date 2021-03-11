import { combineReducers } from "redux";
import photos from "../photos/photosReducer";
import singlePhoto from "../singlePhoto/singlePhotoReducer";
import album from "../album/albumReducer";

export default combineReducers({
  photos,
  singlePhoto,
  album,
});
