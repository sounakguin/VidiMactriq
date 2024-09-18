"use client";
import { useState, useEffect } from "react";
import Products from "../../data/Productpage/Products";
import Image from "next/image";

const Variation = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Find the product based on the passed productId
    if (productId) {
      const productFound = Products.find((p) => p.id === parseInt(productId));
      setProduct(productFound);

      // Set the first variation image as the default
      if (productFound) {
        setSelectedImage(productFound.variationImages[0]);
      }
    }
  }, [productId]);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="mt-20">
      <div className="container mx-auto px-4 w-11/12">
        <div className="flex">
          <div className="flex flex-col space-y-2">
            {/* Main Image Display */}
            <div className=" border-black border-[1px] p-4">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="Selected Variation"
                  width={366}
                  height={364} 
                  style={{
                    objectFit: "contain"
                  }}
                />
              ) : (
                <p>Select an image to view</p>
              )}
            </div>

            {/* Thumbnails for Image Variations */}
            <div className="flex space-x-2 overflow-x-auto">
              {product.variationImages.map((imageUrl, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(imageUrl)}
                  className="cursor-pointer"
                >
                  <Image
                    src={imageUrl}
                    alt={`Product Variation ${index + 1}`}
                    width={100} // Smaller thumbnail size
                    height={100} // Smaller thumbnail size
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Variation;
