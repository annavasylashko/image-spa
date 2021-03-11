import React from "react";
import { connect } from "react-redux";
import { fetchPhotos } from "../duck/photos/photosActions";
import { Link } from "react-router-dom";
import styles from "./gallery.module.css";

class Gallery extends React.Component {
  state = {
    page: 1,
  };

  constructor(props) {
    super(props);

    this.props.dispatch(fetchPhotos(this.state.page));
  }

  loadMore = () => {
    this.setState({ page: this.state.page + 1 }, () =>
      this.props.dispatch(fetchPhotos(this.state.page))
    );
  };

  render() {
    const { photos } = this.props;

    return (
      <div>
        <div className={styles.galleryContainer}>
          {photos.map((photo) => (
            <Link to={`/photo/${photo.id}`} key={photo.id}>
              <div className={styles.thmbPhotoContainer}>
                <img src={photo.thumbnailUrl} alt="thumbnailImg" />
                <p>{photo.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <button onClick={this.loadMore}>Load More</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos.items,
  loading: state.photos.loading,
  error: state.photos.error,
});

export default connect(mapStateToProps)(Gallery);
