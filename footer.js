const footerHTML = `
<footer class="section-footer">
<div class="footer-container container">
  <div class="content_1">
   
    <div
    class="navbar-brand"
    style="
      height: 20px;
      margin-bottom: 100px;
      font-size: 33px;
      font-weight: 700;
      margin-left: 100px;
    "
  >
    BoAthead
  </div>
    <p>
      Welcome to BoAthead, your ultimate destination for
      cutting-edge wearables!
    </p>
    <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
  </div>
  <div class="content_2">
    <h4>SHOPPING</h4>
    <a href="#">earbuds</a>
    <a href="#">headphones</a>
    <a href="#">bluetooth speakers</a>
    <a href="#">Smartwatches</a>
  </div>
  <div class="content_3">
    <h4>Experience</h4>
    <a href="./contact.html">Contact Us</a>
    <a href="" target="_blank">Payment Method</a>
    <a href="" target="_blank">Delivery</a>
    <a href="" target="_blank">Return and Exchange</a>
  </div>
  <div class="content_4">
    <h4>NEWSLETTER</h4>
    <p>Be the first to know about new<br />arrivals, sales & promos!</p>
    <div class="f-mail">
      <input type="email" placeholder="Your Email" />
      <i class="bx bx-envelope"></i>
    </div>
    <hr />
  </div>
</div>
<div class="f-design">
  <div class="f-design-txt">
    <p>Design and Code by Thapa Technical</p>
  </div>
</div>
</footer>
`;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);
