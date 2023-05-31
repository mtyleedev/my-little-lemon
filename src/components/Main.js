import React from "react";
import specials from "../APIs/specials";
import SpecialsCard from "./SpecialsCard";
import Reviews from "./Reviews";
import foodImage from "../images/ll-hero-image.jpg";
import Nico from "../images/ll-owner-niko-costas-fake.jpg";
import Helen from "../images/costas-wife-ll-fake.jpg";

const Main = () => {

    return(
        <main>

        {/* HOME HEADER */}
        <article id="home-header">
            <section>
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Little Lemon is a Mediterranean restaurant located on the South side of Chicago. We serve up all your favorite dishes from the homeland, but specialize in seafood. Our mission is to delivery delicious meals to the customer using only the freshest ingredients with the utmost quality.</p>
            </div>
            </section>
            <section id="home-hero" style={{backgroundImage: `url(${foodImage})`}} alt="Little Lemon's famous charcuterie toasts.">
            </section>
        </article>

        {/* SPECIALS */}
        <article id="specials-section">
            <section>
                <h2>Specials</h2>
                <span><a href="#" role="button" className="green-button">Online Menu</a></span>
            </section>
            <section>
              {
                specials.map(dish =>
                    <SpecialsCard
                    key={dish.id}
                    source={dish.image}
                    alt={dish.alt}
                    header={dish.name}
                    originalPrice={dish.oPrice}
                    price={dish.price}
                    body={dish.description}
                    />
                )
              }
            </section>
        </article>

        {/* REVIEWS */}
        <article id="review-section">
            <h2>What Customers are Saying</h2>
            <section>
                <Reviews/>
            </section>
        </article>

        {/* ABOUT */}
        <article id="about-section">
            <section id="owner-imgs">
                <span>
                    <div style={{backgroundImage: `url(${Nico})`}} alt="Nico Costas, Owner of Little Lemon Restaurant"/>
                    <div style={{backgroundImage: `url(${Helen})`}}  alt="Helen Costas, Owner of Little Lemon Restaurant"/>
                </span>
            </section>
            <section>
                <span>
                    <h2>About Us</h2>
                    <p>Meet Nico and Helen Costas, the passionate Greek immigrants who have brought a taste of the Mediterranean to the heart of Chicago with their beloved restaurant, Little Lemon. Born and raised in Greece, these two culinary enthusiasts have dedicated their lives to showcasing the vibrant flavors and rich traditions of their homeland.</p>
                </span>
            </section>
        </article>
        </main>
    )
}

export default Main;