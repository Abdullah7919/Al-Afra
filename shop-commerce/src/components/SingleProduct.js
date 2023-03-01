import React from 'react'

function SingleProduct() {
  return (
    <section id="prodetail" class="section-p1">
        <div class="single-pro-image">
            <img src="img/product/f1.jpg" width="100%" id="MainImg" alt=""/>

            <div class="small-img-group">
                <div class="small-img-col">
                    <img src="img/product/f1.jpg" width="100%" class="small-img" alt=""/>
                </div>
                <div class="small-img-col">
                    <img src="img/product/f2.jpg" width="100%" class="small-img" alt=""/>
                </div>
                <div class="small-img-col">
                    <img src="img/product/f3.jpg" width="100%" class="small-img" alt=""/>
                </div>
                <div class="small-img-col">
                    <img src="img/product/f4.jpg" width="100%" class="small-img" alt=""/>
                </div>
            </div>
        </div>
        <div class="single-pro-details">
            <h6>Home / T-Shirt</h6>
            <h4>Men's Fashion T-Shirts</h4>
            <h2>₹899.00</h2>
            <select>
                <option>Select Size</option>
                <option>XL</option>
                <option>XXL</option>
                <option>Small</option>
                <option>Large</option>
            </select>
            <input type="number" value="1"/>
            <button class="normal">Add To Cart</button>
            <h4>Product Details</h4>
            <span>The Gilden ultra Cotton T-Shirt is made from a substantial 6.0 oz. per
                sq.yd. fabric constructed from 100% cotton, this classic fit preshruk
                jersy knit provides unmatched comfort with each wear.Featuring ataped neck
                and shoulder, and a seamless double-needle collar,and available ina rnage
                of color,it offers it all int the ultimate head-turning package.</span>
        </div>
    </section>
    
  )
}

export default SingleProduct