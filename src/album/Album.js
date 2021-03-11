import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAlbum, fetchUser } from "../duck/album/albumActions";

import styles from "./album.module.css";

class Album extends React.Component {
  state = {
    albumId: undefined,
    page: 1,
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.setState({ albumId: params.albumId }, () => {
      this.props.dispatch(fetchUser(this.state.albumId));
      this.loadMore();
    });
  }

  loadMore = () => {
    const { albumId, page } = this.state;
    this.setState({ page: page + 1 }, () =>
      this.props.dispatch(fetchAlbum(albumId, page))
    );
  };

  render() {
    const { photos, user } = this.props;
    const userInfo = user.user === undefined ? {} : user.user;

    return (
      <div>
        <div className={styles.albumTitles}>
          <p>Name: {userInfo.name}</p>
          <p>Username: {userInfo.username}</p>
          <p>email: {userInfo.email}</p>
        </div>

        <div className={styles.albumContainer}>
          {photos.map((photo) => (
            <Link to={`/photo/${photo.id}`} key={photo.id}>
              <div className={styles.albumPhotoContainer}>
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
  photos: state.album.items,
  loading: state.album.loading,
  error: state.album.error,
  user: state.album.user,
});

export default connect(mapStateToProps)(Album);
