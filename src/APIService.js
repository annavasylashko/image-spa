export default class APIService {
  static baseURL = "https://jsonplaceholder.typicode.com";

  handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  static fetchPhotos = (page) =>
    fetch(`${this.baseURL}/photos?_page=${page}&_limit=6`)
      .then(this.handleErrors)
      .then((res) => res.json());

  static fetchSinglePhoto = (id) =>
    fetch(`${this.baseURL}/photos/${id}?_expand=album`)
      .then(this.handleErrors)
      .then((res) => res.json());

  static fetchAlbum = (albumId, page) =>
    fetch(`${this.baseURL}/photos?albumId=${albumId}&_page=${page}&_limit=6`)
      .then(this.handleErrors)
      .then((res) => res.json());

  static fetchUser = (albumId) =>
    fetch(`${this.baseURL}/albums/${albumId}?_expand=user`)
      .then(this.handleErrors)
      .then((res) => res.json());
}
