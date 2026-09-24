import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const Men = () => {
    // Array of 30 Men's Products with custom image slots ready
    const menProducts = [
        { id: 1, title: 'Classic Black Hoodie', price: '$45.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp885YyyvkO5lAuCiIv6pztKGXgiwjPMyb5-op9KsXO7K6qtH5ZJY64KuI&s=10' },
        { id: 2, title: 'Casual Denim Jacket', price: '$65.00', image: 'https://www.permanentstyle.com/wp-content/uploads/2025/04/denim-jacket-style-500x688.jpg' },
        { id: 3, title: 'Slim Fit Chinos', price: '$40.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6GhG6ElXhho6QN0ProQUnItVkhURy-aupE3sovXKG48lcRcUljHnM9r3&s=10' },
        { id: 4, title: 'Graphic Cotton Tee', price: '$25.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8P7AsLiYT38Pez4SBErTNdXa0ID6JAqvjdUGgf4m8eA&s' },
        { id: 5, title: 'Formal White Shirt', price: '$50.00', image: 'https://focusclothing.pk/cdn/shop/files/001_fc45fda1-8898-4326-a856-bf70ac2557f3.jpg?v=1786805494&width=2000' },
        { id: 6, title: 'Puffer Winter Coat', price: '$90.00', image: 'https://hustlersonlypk.com/cdn/shop/files/WhatsAppImage2026-01-05at5.52.59PM.jpg?v=1767675062' },
        { id: 7, title: 'Cargo Trousers', price: '$55.00', image: 'https://weavewardrobe.com/cdn/shop/files/1_5607aa9a-6d1f-4a47-92ae-455050876b65_900x.jpg?v=1727879613' },
        { id: 8, title: 'Striped Polo Shirt', price: '$35.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jByP08WQW4uCFRU4b5VAmJo4NESxfzO41AwZOSt2S4vjAJB7sjCuVmhS&s=10' },
        { id: 9, title: 'Leather Biker Jacket', price: '$120.00', image: 'https://www.thejacketmaker.pk/cdn/shop/files/Men_s_Lavendard_Brown_Leather_Biker_Jacket-2_746fba86-1fbc-43f9-a9d5-1e400876d80d_2048x.jpg?v=1760635123' },
        { id: 10, title: 'Cotton Joggers', price: '$40.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOoBGE6hUGO7RC9p4i0nzKV6imQGmVO3DU5levDK8LEgY0XFXDD-zq4A&s=10' },
        { id: 11, title: 'V-Neck Pullover', price: '$50.00', image: 'https://giordanopk.com/cdn/shop/files/13-heather-grey-1-69085bb513743.webp?v=1762155667&width=1024' },
        { id: 12, title: 'Athletic Shorts', price: '$30.00', image: 'https://www.dominance.pk/cdn/shop/files/Shorts_Black_Performance_3.png?v=1784291341' },
        { id: 13, title: 'Flannel Overshirt', price: '$55.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReV77rkws_S8GoYRt6Zo_SrgmIUnpfYFQ1g598UBTxkq8M6HbiFmfHaEnY&s=10' },
        { id: 14, title: 'Wool Blend Overcoat', price: '$140.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRRGcDPaDa8afNEwmSSW-QiW7-u9fzgQazg-MCFs-JA53nE2PD2wULKg&s=10' },
        { id: 15, title: 'Basic Crewneck', price: '$30.00', image: 'https://outfitters.com.pk/cdn/shop/files/F0538107808_3_copy.jpg?v=1757917989&width=1920' },
        { id: 16, title: 'Ripped Skinny Jeans', price: '$60.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZvR2-bITULea41R2p0PGSJOXE1yyD18rL9sw9b-B6wtAN5KvKxk0ll-F&s=10' },
        { id: 17, title: 'Tracksuit Set', price: '$85.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdYuk0PTgbeOTJK1wU2X8mgb8_lWvSNRtSzYZ9HydcMt0qf5B7-rtSbI&s=10' },
        { id: 18, title: 'Oxford Button-Down', price: '$55.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvBHqxbvnmSxkWW8Fup933HG4te9leqX-z1IfuhEGC57DE7YhsuA4tqxK&s=10' },
        { id: 19, title: 'Jacket', price: '$35.00', image: 'https://www.everlane.com/cdn/shop/files/2083aeaa_c3b3.jpg?v=1753411405' },
        { id: 20, title: 'Windbreaker Jacket', price: '$70.00', image: 'https://brandsoutlet.com.pk/wp-content/uploads/2025/12/2.webp' },
        { id: 21, title: 'Thermal Henley', price: '$38.00', image: 'https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM11315.283_VINTAGE-THERMAL-HENLEY_NATURAL_3077.jpg?v=1760048579&format=webp&width=700&height=700' },
        { id: 22, title: 'Pleated Trousers', price: '$65.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUthSWyu22xEw6HiLIKU9ztOvgsWkOv1WMXyyJAYTH5h_9gmOqXXCzYiA_&s=10' },
        { id: 23, title: 'Zip-Up Fleece', price: '$50.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKk7YwAVBWooGrZKjmSwL7QKPF5r_h0wTVVl3xam8JUdhgk98Fagnx7dQ&s=10' },
        { id: 24, title: 'Distressed Denim', price: '$45.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQb6_2AuJ9kzXq0ZTB0GdmbElACo2JgD4iCQx0Sa8ALyQ2m-P6u1pfEah&s=10' },
        { id: 25, title: 'Sleeveless Gym Tank', price: '$22.00', image: 'https://img.drz.lazcdn.com/static/pk/p/8c39e7910040aeaa1c83022f161fe6d0.jpg_720x720q80.jpg' },
        { id: 26, title: 'Tuxedo Blazer', price: '$150.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZQyMxuuaqLUkBiX36oldP5B11vdqUo40LuD7kGjo4tnScnMGOfEDhQQ&s=10' },
        { id: 27, title: 'Corduroy Pants', price: '$60.00', image: 'https://mendeez.com/cdn/shop/files/2-1_f80cf84f-5a59-4f09-ad0e-db385b7e8547.jpg?v=1756381214&width=720' },
        { id: 28, title: 'Heavyweight Work Shirt', price: '$55.00', image: 'https://needessentials.com/cdn/shop/files/Hemp-cotton-heavyweight-shirt-Dunegrassfront_1240x.jpg?v=1760413207' },
        { id: 29, title: 'Linen Beach Shirt', price: '$48.00', image: 'https://cdn-cciha.nitrocdn.com/sTHrxuiQbJpfiXcBTmNcAUIVfmHWvCDo/assets/images/optimized/rev-477bf2f/www.weddingtropics.com/wp-content/uploads/2018/02/butterfly-havana-LS-455x700.webp' },
        { id: 30, title: 'Anorak Rain Jacket', price: '$85.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tKe1kIoOLqGhN0Wb7uampu-4BULQqJxdvmnmQDFtEw&s' },
    ]

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6
    const totalPages = Math.ceil(menProducts.length / itemsPerPage)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentProducts = menProducts.slice(indexOfFirstItem, indexOfLastItem)

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-white mb-6">Men's Collection</h2>

            {/* Grid mapping items and passing props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>

            <div className="flex justify-center items-center gap-4 py-4">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-medium text-white transition ${currentPage === 1 ? 'bg-gray-800 opacity-40 cursor-not-allowed' : 'bg-cyan-600 hover:bg-cyan-500'
                        }`}
                >
                    Previous
                </button>
                <span className="text-gray-300 text-sm font-medium">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-medium text-white transition ${currentPage === totalPages ? 'bg-gray-800 opacity-40 cursor-not-allowed' : 'bg-cyan-600 hover:bg-cyan-500'
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Men