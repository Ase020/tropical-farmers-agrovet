import { useState } from "react";
import "./products.css";

function Products() {
    const categories = [
        {
            name: "Animal Feeds",
            subcategories: [
                { name: "Dairy Feeds" },
                { name: "Poultry" },
                { name: "Dog Food" },
            ],
        },
        { name: "Vegetables Seeds" },
        { name: "Farm Inputs" },
        { name: "Veterinary Products" },
        { name: "Nutritional Supplements" },
        { name: "Herbicides" },
        { name: "Foliar" },
        { name: "Fertilizers" },
    ];

    const products = {
        'Animal Feeds': {
            'Dairy Feeds': [
                {
                    name: 'Product 1',
                    seller: {
                        tel: '123-456-7890',
                        whatsapp: '+1234567890',
                    },
                    images: ['image1.jpg', 'image2.jpg'],
                },
            ],
            'Poultry': [
                {
                    name: 'Product 2',
                    seller: {
                        tel: '987-654-3210',
                        whatsapp: '+9876543210',
                    },
                    images: ['image3.jpg', 'image4.jpg'],
                },
            ],
            // Add more products for other subcategories as needed
        },
        // Add products for other categories as needed
    };

    const [expanded, setExpanded] = useState('');

    const toggle = (category) => {
        if (expanded === category) {
            setExpanded('');
        } else {
            setExpanded(category);
        }
    }

    function handleProductClick(product) {
        alert(`To order ${product.name}, contact us at ${product.seller.tel} or via WhatsApp at ${product.seller.whatsapp}`);
    }

    return (
        <div className="products">
            <div className="category-list">
                {categories.map(category => (
                    <div className="category" key={category.name}>
                        <button onClick={() => toggle(category.name)}>
                            {category.name} {expanded === category.name ? '-' : '+'}
                        </button>
                        {expanded === category.name &&
                            <div className="products-list">
                                {typeof products[category.name] === 'object' &&
                                    Object.keys(products[category.name]).map(subcategory => (
                                        <div key={subcategory} className="product-subcategory">
                                            <h3>{subcategory}</h3>
                                            {products[category.name][subcategory].map(product => (
                                                <div key={product.name} className="product">
                                                    <div className="product-images">
                                                        {product.images.map((image, index) => (
                                                            <img key={index} src={image} alt="product" />
                                                        ))}
                                                    </div>
                                                    <div className="product-details">
                                                        <h4>{product.name}</h4>
                                                        <button
                                                            className="purchase-button"
                                                            onClick={() => handleProductClick(product)}
                                                        >
                                                            Purchase
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
