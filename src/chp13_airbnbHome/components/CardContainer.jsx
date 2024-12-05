import React from 'react';
import Card from './Card';
import apt1 from '../imgs/apt1.jpg'
import apt2 from '../imgs/apt2.jpg'
import apt3 from '../imgs/apt3.jpg'
import apt4 from '../imgs/apt4.jpg'


const listings = [
    {
        id: 1,
        title: "응애",
        price: 100000,
        rating: 4.9,
        imageUrl: `${apt1}`
    },
    {
        id: 2,
        title: "응애",
        price: 150000,
        rating: 4.8,
        imageUrl: `${apt2}`
    },
    {

        id: 3,
        title: "응애",
        price: 120000,
        rating: 4.7,
        imageUrl: `${apt3}`

    },
    {

        id: 4,
        title: "응애",
        price: 200000,
        rating: 4.9,
        imageUrl: `${apt4}`

    },
];

function CardContainer() {
    return (
        <div className="card-container">
            {listings.map(Listing  => (
                <Card key={Listing.id} {...Listing} />
            ))}
        </div>
    );
}

export default CardContainer;