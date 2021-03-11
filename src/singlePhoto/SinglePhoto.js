import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSinglePhoto } from "../duck/singlePhoto/singlePhotoActions";

import styles from "./singlePhoto.module.css";

class SinglePhoto extends React.Component {
  constructor(props) {
    super(props);

    const {
      match: { params },
    } = this.props;
    this.props.dispatch(fetchSinglePhoto(params.id));
  }

  render() {
    const { photoDetails } = this.props;

    return (
      <div className={styles.singlePhotoContainer}>
        <img src={photoDetails.url} alt="SinglePhotoImg" />
        <div className={styles.singlePhotoTitles}>
          <p>{photoDetails.title}</p>
          <Link to={`/album/${photoDetails.albumId}`}>
            <p>Album</p>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    photoDetails: state.singlePhoto.photoDetails,
    loading: state.singlePhoto.loading,
    error: state.singlePhoto.error,
  };
};

export default connect(mapStateToProps)(SinglePhoto);
