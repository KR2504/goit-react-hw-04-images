import { useState, useEffect } from "react";
import Searchbar  from "./components/Searchbar";
import ImageGallery  from "./components/ImageGallery";
import Button  from "./components/Button";
import Loader from "./components/Loader"
import Modal  from "./components/Modal";
import Api from "./services/Api";

export default function App() {
  
  const [images, setImages] = useState([]);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState(null);
  
  useEffect(() => {
    const options = { page, value };

    if (!value) {
      return
    }

    setLoading(true)
    
    if (page === 1) {
      
      Api(options).then(images => {

        if (images.hits.length === 0) {
          setError(error)
        }

        setImages(images.hits)
      }).catch(error => setError(error)).finally(() => setLoading(false));
    }

    if (page > 1) {
      Api(options).then(images =>

        setImages(state => [...state, ...images.hits])
      ).catch(error => setError(error))
        .finally(() => setLoading(false));
    }
  }, [value, page, error]);


  const handleSubmit = (value) => {
    setValue(value);
    setPage(1)
  }
    

  const handleLoadMore = () => {
    setPage(state => state + 1)
  };

  const toggleModal = () => {
    setShowModal(state => !state)
  };

  const handleClickImage = (largeImage) => {
    toggleModal();
    setLargeImage(largeImage)
  };

  const onClose = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      toggleModal()
    }
  };

    return (
      <div>
        <Searchbar onSubmit={handleSubmit} />
        {images && <ImageGallery images={images} largeImage={handleClickImage} />}
        {loading && <Loader />}
        {images.length !== 0 && (loading ? <Loader /> : <Button onClick={handleLoadMore} />)}
        {showModal && <Modal onClose={onClose}>{largeImage}</Modal>}
        {error && <h1>Sorry, there are no images matching your search query. Please try again.</h1>}
      </div>
    );
  };

