import './auctionDetail.css';
import Pic1 from '../../assets/images/pic1.png';
import Pic2 from '../../assets/images/pic2.png';
import Pic3 from '../../assets/images/pic3.png';
import Pic4 from '../../assets/images/pic4.png';
import React, { useState } from 'react';

function ImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="img-wrap">
        <img src={images[currentIndex].src} alt="" />
      </div>
      <div className="list-img">
        {images.map((image, index) => (
          <div key={index} onClick={() => handleThumbnailClick(index)} className={index === currentIndex ? 'active' : ''}>
            <img src={image.src} alt="" />
          </div>
        ))}
      </div>
      <span className="control prev" onClick={handlePrevClick}>
        <i className="bx bx-chevron-left" />
      </span>
      <span className="control next" onClick={handleNextClick}>
        <i className="bx bx-chevron-right" />
      </span>
    </>
  );
}

function AuctionDetail() {
  const [bidAmount, setBidAmount] = useState('');
  const [error, setError] = useState('');
  const images = [
    { src: Pic1 },
    { src: Pic2 },
    { src: Pic3 },
    { src: Pic4 },
    { src: Pic1 },
  ];

  const handleBidChange = (e) => {
    setBidAmount(e.target.value);
  };

  const handleBidNowClick = () => {
    if (bidAmount === '' || isNaN(bidAmount) || parseFloat(bidAmount) <= 0) {
      setError('Please enter a valid bid amount.');
    } else {
      setError('');
      // Thực hiện hành động đấu giá ở đây
      alert(`Bid amount: ${bidAmount}$`);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="header-content">
          <div className="title-header">
            <h2>Auctions Detail</h2>
          </div>
        </div>
        <div className="main-content">
          <div className="content">
            <div className="main">
              <ImageGallery images={images} />
            </div>
          </div>
          <div className="title-content">
            <h2>Name of good</h2>
            <div className="details-item">
              <span className="details-label">Price:</span>
              <span className="details-value">100.000 $</span>
            </div>
            <div className="details-item">
              <span className="details-label">Description:</span>
              <span className="details-value">Text</span>
            </div>
            <div className="details-item">
              <span className="details-label">Condition:</span>
              <span className="details-value">Text</span>
            </div>
            <div className="details-item">
              <span className="details-label">Category:</span>
              <span className="details-value">Text</span>
            </div>
            <div className="details-item">
              <span className="details-label">Location:</span>
              <span className="details-value">Text</span>
            </div>
            <div className="details-item">
              <span className="details-label">Shipping:</span>
              <span className="details-value">Text</span>
            </div>
            <div>
              <span className="details-value">SUSD</span>
              <input
                type="number"
                placeholder="Enter Bid Amount"
                style={{ height: 36, margin: "0 5px" }}
                value={bidAmount}
                onChange={handleBidChange}
              />
              {error && <span className="error">{error}</span>}
            </div>
            <div className="bid-container">
              <button className="bid-button" onClick={handleBidNowClick}>Bid now</button>
            </div>
            <div className="details-item">
              <span className="details-label">To be added at payment:</span>
              <span className="details-value">Text</span>
            </div>
            <div className="details-item">
              <span className="details-label">Buyer's premium:</span>
              <span className="details-value">Text</span>
            </div>
            <div className="details-item">
              <span className="details-label">High bidder:</span>
              <span className="details-value">Text</span>
            </div>
            <div className="details-item">
              <span className="details-label">Seller:</span>
              <span className="details-value">Text</span>
            </div>
            <div className="details-item">
              <span className="details-label">Contact:</span>
              <span className="details-value">Text</span>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="description-content">
            <h2 className="text-description">Description</h2>
            <textarea
              className="textarea-description"
              readOnly="readonly"
              wrap="hard"
              style={{ resize: "none" }}
              defaultValue={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionDetail;
