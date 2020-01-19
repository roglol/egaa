import React from 'react';
import Link from 'next/link'


const Categories = () =>{
    return (
        <div className="product-categories">
            <div className="product_counter">
             <h1>პროდუქცია</h1>
            <p>სულ 80 პროდუქტი</p>
            </div>
        <div className="product-buttons">
        <Link href="/?category=coffee" as="/products/coffee">
        <figure>
        <img src="https://premiumcoffee.ge/images/Coffee.png" alt="Coffee"/>
        <figcaption>ყავა</figcaption>
        </figure>
        </Link>
        <Link href="/?category=tea" as="/products/tea">
        <figure>
        <img src="https://premiumcoffee.ge/images/Tea.png" alt="Coffee"/>
        <figcaption>ჩაი</figcaption>
        </figure>
        </Link>
        <Link href="/?category=equipment" as="/products/equipment">
        <figure>
        <img src="https://premiumcoffee.ge/images/aparats.png" alt="Coffee"/>
        <figcaption>აპარატები</figcaption>
        </figure>
        </Link>
        <Link href="/?category=accessories" as="/products/accessories">
        <figure>
        <img src="https://premiumcoffee.ge/images/Accessories.png" alt="Coffee"/>
        <figcaption>აქსესუარები</figcaption>
        </figure>
        </Link>
        </div>
        </div>
    )
}

export default Categories;