import { useState } from "react";
import Modal from "react-modal";
import "./products.css";

function Products() {
    const categories = [
        {
            name: "Animal Feeds",
            subcategories: [
                { name: "Dairy Feeds" },
                { name: "Poultry Feed" },
                { name: "Pig Feed" },
                { name: "Dog Food" },
            ],
        },
        {
            name: "Vegetables Seeds",
            subcategories: [
                { name: "Tomatoes" },
                { name: "Lettuces" },
                { name: "Carrots" },
            ],
        },
        {
            name: "Farm Inputs",
            subcategories: [
                { name: "Irrigation Systems" },
                { name: "Greenhouses" },
                { name: "Tools (shovels, rakes)" },
            ],
        },
        {
            name: "Veterinary Products",
            subcategories: [
                { name: "Medicines" },
                { name: "Vaccines" },
                { name: "Medical Equipment" },
            ],
        },
        {
            name: "Nutritional Supplements",
            subcategories: [
                { name: "Vitamins" },
                { name: "Minerals" },
                { name: "Probiotics" },
                { name: "Prebiotics" },
            ],
        },
        {
            name: "Herbicides",
            subcategories: [
                { name: "Selective herbicides (targets specific weeds)" },
                { name: "Non-selective herbicides (broad-spectrum weed control)" },
            ],
        },
        {
            name: "Foliar",
            subcategories: [
                { name: "Foliar Fertilizers" },
                { name: "Foliar Pesticides" },
                { name: "Foliar Fungicides" },
            ],
        },
        {
            name: "Fertilizers",
            subcategories: [
                { name: "Organic Fertilizers" },
                { name: "Inorganic Fertilizers" },
                { name: "NPK Fertilizers" },
                { name: "Secondary Macronutrients" },
                { name: "Micronutrients" },
            ],
        },
    ];

    const products = {
        'Animal Feeds': {
            'Dairy Feeds': [
                {
                    name: 'Milk booster',
                    seller: {
                        tel: '+254 740 522124',
                        whatsapp: '+254 740 522124',
                    },
                    images: ['../../../milk-booster.png'],
                },
            ],
            'Poultry Feed': [
                {
                    name: 'Layers Mash',
                    seller: {
                        tel: '+254 740 522124',
                        whatsapp: '+254 740 522124',
                    },
                    images: ['../../../layer-mash.png'],
                },
            ],
            'Pig Feed': [
                {
                    name: 'Growth-Booster',
                    seller: {
                        tel: '+254 740 522124',
                        whatsapp: '+254 740 522124',
                    },
                    images: ['../../../pig-growth-booster.jpg'],
                }
            ], 
            'Dog Food': [
                {
                    name: 'Growth-Booster',
                    seller: {
                        tel: '+254 740 522124',
                        whatsapp: '+254 740 522124',
                    },
                    images: ['../../../dog-food.jpg'],
                }
            ],
        },
        // Add products for other categories as needed
    };

    const [expanded, setExpanded] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);


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

    function handleModalClose() {
        setSelectedProduct(null);
    }

    return (
        <div className="products">
            <div className="category-list">
                {categories.map(category => (
                    <div className="category" key={category.name}>
                        <button onClick={() => toggle(category.name)}>
                            {category.name} {expanded === category.name ? '-' : '+'}
                        </button>
                        {expanded === category.name && (
                            <div className="products-list">
                                {category.subcategories &&
                                    category.subcategories.map(subcategory => (
                                        <div key={subcategory.name} className="product-subcategory">
                                            <h3>{subcategory.name}</h3>
                                            <div className="product-row">
                                                {products[category.name] &&
                                                    products[category.name][subcategory.name] &&
                                                    products[category.name][subcategory.name].map(product => (
                                                        <div key={product.name} className="product">
                                                            <div className="product-images">
                                                                {product.images &&
                                                                    product.images.map((image, index) => (
                                                                        <img key={index} src={image} alt="product" />
                                                                    ))
                                                                }
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
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Modal
                isOpen={selectedProduct !== null}
                onRequestClose={handleModalClose}
                contentLabel="Seller Contact Information"
            >
                {selectedProduct && (
                    <div className="seller-info">
                        <h2>{selectedProduct.name}</h2>
                        <p>To order this product, contact us at:</p>
                        <p>Telephone: {selectedProduct.seller.tel}</p>
                        <p>WhatsApp: {selectedProduct.seller.whatsapp}</p>
                        <button onClick={handleModalClose}>Close</button>
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default Products;
