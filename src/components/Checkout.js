import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
                <div className="checkout__basket">
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    <div className="checkout__basket__item">
                        <img className="product__img" src="https://http2.mlstatic.com/D_NQ_NP_733189-MLA42623652264_072020-O.webp" />
                        <div>
                            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, debitis a vitae quas asperiores unde ratione quia cum consequatur dolore iste reiciendis voluptatem officiis nesciunt itaque sequi exercitationem omnis ipsa.</h2>
                            <p className="product__price">
                                <small>$</small>
                                <strong>11.96</strong>
                            </p>
                            <div className="product__rating">
                                <p>⭐</p>
                                <p>⭐</p>
                                <p>⭐</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
