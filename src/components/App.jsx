import { useState, useEffect } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImg } from '../services/fetch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadMoreButton } from "./LoadMoreButton/LoadMoreButton";
import { Loader } from "./Loader/Loader";
import Modal from "./Modal/Modal";



export function App() {

  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState(0);
  const [largeImage, setLargeImage] = useState('');
  const [error, setError] = useState('');


 const openModal = index => {
    setShowModal(true);
    setLargeImage(pics[index].largeImageURL);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onLoadMoreButton = () => {
    setPage(prevState => prevState + 1 );
  };

  const formSubmit = inputEl => {
    if (inputEl.trim() === '') {
      toast.error('Please fill me ^.~');
      return;
    }
    if (inputEl === input) {
      toast.error("You're repeating yourself.");
      return;
    }
    setInput(inputEl);
    setPage(1);
    setPics([])
  };



  useEffect(() => {
    if (!input) {
      return;
    }
      setLoading(true);
      
    (async function renderGallery() {
      try {
        const fetchedPics = await fetchImg(input, page);
   
        setPics(prevState => [...prevState, ...fetchedPics.hits])
        setTotal(fetchedPics.total)
        setLoading(false);
      
      } catch (error) {
        setError(error);
        console.log("Somthing wrong, try to refresh the page: ", error);
      } finally {
        setLoading(false);
      }
    })();
   
  }, [input, page]);

  

    return (
      <div>
        <Searchbar onSubmit={formSubmit} />
        {error && <p>{error}</p>}
        <div>
          <ImageGallery galleryItems={pics} openModal={openModal} />
          {loading && <Loader />}
          <ToastContainer autoClose={2000}
            position="top-left" />
          {pics.length > 0 && total / page > 12 && <LoadMoreButton nextPage={onLoadMoreButton} />}
          {showModal && (
          <Modal toggleModal={toggleModal} largeImage={largeImage} />
        )}
      </div>
      </div>
      
    
    
          
  
  );
 
};
