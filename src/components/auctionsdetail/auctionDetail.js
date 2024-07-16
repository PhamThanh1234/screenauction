import './auctionDetail.css';
import Pic1 from '../../assets/images/pic1.png'
import Pic2 from '../../assets/images/pic2.png'
import Pic3 from '../../assets/images/pic3.png'
import Pic4 from '../../assets/images/pic4.png'

const auctionDetail = () => {
    return(
        <>
        <div className="container">
    <div className="header-content">
      <div className="title-header">
        <h2>Auctions Detail</h2>
      </div>
    </div>
    <div className="main-content">
      <div className="content">
        <div className="main">
          <span className="control prev">
            <i className="bx bx-chevron-left" />
          </span>
          <span className="control next">
            <i className="bx bx-chevron-right" />
          </span>
          <center>
            <div className="img-wrap">
              <img src={Pic1} alt="" />
            </div>
          </center>
        </div>
        <div className="list-img">
          <div>
            <img src={Pic1}alt="" />
          </div>
          <div>
            <img src={Pic2} alt="" />
          </div>
          <div>
            <img src={Pic3} alt="" />
          </div>
          <div>
            <img src={Pic4} alt="" />
          </div>
          <div>
            <img src={Pic1} alt="" />
          </div>
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
          />
        </div>
        <div className="bid-container">
          <button className="bid-button">Bid now</button>
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

        </>
    )
}

export default auctionDetail;