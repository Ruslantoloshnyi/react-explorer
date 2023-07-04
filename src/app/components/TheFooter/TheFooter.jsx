function TheFooter() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-content__menu">
            <ul>
              <li className="footer-content__menu-item">
                <a href="#">Home</a>
              </li>
              <li className="footer-content__menu-item">
                <a href="#">Blog</a>
              </li>
              <li className="footer-content__menu-item">
                <a href="#">Categories</a>
              </li>
              <li className="footer-content__menu-item">
                <a href="#">About us</a>
              </li>
              <li className="footer-content__menu-item">
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer-content-block">
            <div className="footer-content__text">
              Copyright © Explorer - Images used for demonstration purpose only
            </div>
            <div className="footer-content__label">
              <p>Explorer</p>
            </div>
            <div className="footer-content__social">
              <a href>
                <img src="/instagram.png" alt />
              </a>
              <a href>
                <img src="/facebook.png" alt />
              </a>
              <a href>
                <img src="/telegram.png" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default TheFooter;
