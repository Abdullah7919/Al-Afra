import React from 'react'

function Footer() {
  return (
    <footer class="section-p1">
    <div class="col">
        <h2 style={{marginBottom: "30px", fontSize: "2rem"}}>al-afra</h2>
        <h4>Contact</h4>
        <p><strong>Address:</strong> Nawab Yusuf Road Jaunpur </p>
        <p><strong>Phone:</strong> (+91) 9794163139</p>
        <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
        <div class="follow">
            <h4>Follow Us</h4>
            <div class="icon">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-pintrest-p"></i>
                <i class="fab fa-youtube"></i>
            </div>
        </div>
    </div>

    <div class="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Term & condition</a>
        <a href="#">Contact Us</a>
    </div>

    <div class="col">
        <h4>My Accounts</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
    </div>

    <div class="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div class="row">
            <img src="img/pay/app.jpg" alt=""/>
            <img src="img/pay/play.jpg" alt=""/>
        </div>
        <p>Secured Payment Gateway</p>
        <img src="img/pay/pay.png" alt=""/>
    </div>

    <div class="copyright">
        <p>@ 2023,al-afra -Ecommerce website </p>
    </div>
</footer>
  )
}

export default Footer