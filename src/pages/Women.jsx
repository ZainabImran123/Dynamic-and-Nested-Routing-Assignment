import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const Women = () => {
    // Array of 30 Pakistani & Islamic Women's Wear Products
    const womenProducts = [
        { id: 1, title: 'Embroidered Lawn Suit 3-Piece', price: 'Rs. 6,500', image: 'https://declarepakistan.com/cdn/shop/files/P1100_9.png?v=1717153026&width=1445' },
        { id: 2, title: 'Designer Front-Open Abaya', price: 'Rs. 5,500', image: 'https://hijabulhareem.com/cdn/shop/files/0116-J-1214_3.png?v=1787651994&width=800' },
        { id: 3, title: 'Printed Cambric Kurti', price: 'Rs. 3,200', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwC4OuvoS7c_P9WSyYpFdY0BeOaxdFRQxCxRe_-WISTw&s' },
        { id: 4, title: 'Luxury Chiffon Formals', price: 'Rs. 14,500', image: 'https://trendzcollection.pk/cdn/shop/files/mbc95.jpg?v=1780751967&width=1024' },
        { id: 5, title: 'Casual Daily Shalwar Kameez', price: 'Rs. 4,000', image: 'https://pk-live-21.slatic.net/kf/S069ba69a836d4d52b1533eb68cb7f7e6m.jpg' },
        { id: 6, title: 'Embroidered Organza Dupatta Suit', price: 'Rs. 12,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqtQp8sIbFcSeISTFwnjF_AMbQSgfvtLZo8GQWvamQqDSx9SaMa3dtiV4&s=10' },
        { id: 7, title: 'Winter Khaddar 3-Piece', price: 'Rs. 7,500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4x-ngedkY3Wi6F124usywvueelKrvvBBdCtJm8RC3-KqugtSY6GN6yUF7&s=10' },
        { id: 8, title: 'Arabic Butterfly Abaya', price: 'Rs. 6,000', image: 'https://mariam-col.com/cdn/shop/files/5-piece-set-butterfly-abaya-with-niqab-loose-full-cover-satin-abaya-moa019-735948.jpg?v=1745728674&width=1200' },
        { id: 9, title: 'Block Printed Cotton Kurti', price: 'Rs. 2,800', image: 'https://img.theloom.in/live/media/catalog/product/cache/101a419f04e4161b4f9f2458eaa9a195/j/c/jc0107758-_1_.jpg' },
        { id: 10, title: 'Bridal Maxi Outfit', price: 'Rs. 25,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPq1ni-4ha4JRqbWuP7hTJje5ORpgx036JVGr6ZJF7cKWlUP2JkxYmlQ&s=10' },
        { id: 11, title: 'Stitched Jacquard Suit', price: 'Rs. 8,500', image: 'https://primepointstore.com/cdn/shop/files/3-pc-embroidered-jacquard-stitched-suit3-piece-stitchedwomen-148380.jpg?v=1756902959' },
        { id: 12, title: 'Ready-to-Wear Cotton Shalwar', price: 'Rs. 3,500', image: 'https://senorita.pk/cdn/shop/files/WhatsApp_Image_2025-12-08_at_4.15.54_PM.jpg?v=1765192607' },
        { id: 13, title: 'Net Embroidered Maxi', price: 'Rs. 11,000', image: 'https://styleloft.pk/cdn/shop/files/styleloft-pk-luxury-black-net-maxi-by-akbar-aslam-embroidered-black-net-maxi-3-piece-1182506817_1024x1024.jpg?v=1753985801' },
        { id: 14, title: 'Daily Wear Cotton Kurti', price: 'Rs. 2,500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRR8A_hVeXrgmSRmwj9wWt4APIp0R_JZqe0daGYp5uw&s=10' },
        { id: 15, title: 'Plain Hijab Abaya Set', price: 'Rs. 4,800', image: 'https://thehijabeez.com.pk/cdn/shop/files/BLACK_b6cd05ea-4450-49f6-b137-f4f17cd97338.png?v=1785438046&width=1200' },
        { id: 16, title: 'Karandi Winter 3-Piece', price: 'Rs. 9,000', image: 'https://www.limelight.pk/cdn/shop/files/U3073SU-3Pc-OWH_1_3PieceKarandiSuit-Embroidered_Unstitched.jpg?v=1744025825&width=1946' },
        { id: 17, title: 'Formal Peplum Frock', price: 'Rs. 13,500', image: 'https://www.nameerabyfarooq.com/cdn/shop/products/EmbellishedPakistaniWeddingDressDesignerPeplumSuit_1080x.jpg?v=1657997598' },
        { id: 18, title: 'Printed Lawn 2-Piece', price: 'Rs. 4,500', image: 'https://ellena.pk/cdn/shop/products/EAS-L2-03-02.jpg?v=1709559662' },
        { id: 19, title: 'Velvet Winter Suit', price: 'Rs. 15,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLwGBL5RZbbXVeUn6xytEQoINlzoAXZOgKl1ZTitQAJNC_7mTAzvdxIpj&s=10' },
        { id: 20, title: 'Embroidered Net Shirt', price: 'Rs. 10,000', image: 'https://beechtree.pk/cdn/shop/files/BT2250002LP2520_3.jpg?v=1770246700&width=934' },
        { id: 21, title: 'Casual Linen Kurti', price: 'Rs. 3,000', image: 'https://www.faisalabadfabricstore.com/wp-content/uploads/2025/09/Bluish-Cyan-self-print-pure-linen-kurtis-wholesale.png' },
        { id: 22, title: 'Party Wear Maxi Dress', price: 'Rs. 16,000', image: 'https://static.markaz.app/pakistan/products/2321-95-711729-product-1.webp' },
        { id: 23, title: 'Denim Abaya Design', price: 'Rs. 6,500', image: 'https://thenabia.com/cdn/shop/files/24-10-202506727_cfcba98b-91db-4fb2-9f69-347a8b876cc7.jpg?v=1774686220' },
        { id: 24, title: 'Traditional Embroidered Kurti', price: 'Rs. 4,200', image: 'https://chaudharyarts.com/cdn/shop/files/SnapInsta.to_689524334_18197036263362479_4943357533003795793_n_ab7aae2a-2328-4ff7-a340-e9cfcd4961b9.jpg?v=1788272841' },
        { id: 25, title: 'Stitched Raw Silk Suit', price: 'Rs. 18,000', image: 'https://www.nameerabyfarooq.com/cdn/shop/products/EmbellishedRawSilkSalwarSuitOnlineforPakistaniDress_1080x.jpg?v=1658851598' },
        { id: 26, title: 'Casual Cambric 2-Piece', price: 'Rs. 3,800', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtoxcgYKInbtB1zmsLKGOSITTJ27vURwCvAeFLAUPOyD-fhCsTtj955eg&s=10' },
        { id: 27, title: 'Luxury Formal Lehnga Style Suit', price: 'Rs. 22,000', image: 'https://sillhouete.com/cdn/shop/articles/05_7a98962f-9148-44dd-80f9-4086086f548d.png?v=1776971395' },
        { id: 28, title: 'Georgette Party Abaya', price: 'Rs. 7,000', image: 'https://img.drz.lazcdn.com/static/pk/p/1f447bc7754b3362f10abb561862cc06.jpgstyle=width:1600px;height:2400px;display:inline;vertical-align:middle_960x960q80.jpg_.webp' },
        { id: 29, title: 'Printed Jacquard Kurti', price: 'Rs. 3,400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHoCYzJ3kyWjEybdcexIPtWGsT7SxG6GiAwqx4wiS9h3mh0R9ufEb3BHwN&s=10' },
        { id: 30, title: 'Pashmina Shawl & Suit Set', price: 'Rs. 12,500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj0G8TUrrrQCF8McRoNsh3udjmEnIHZ1hEllKcII0rbtHdd2OK6_mahqsP&s=10' },
    ]

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6
    const totalPages = Math.ceil(womenProducts.length / itemsPerPage)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentProducts = womenProducts.slice(indexOfFirstItem, indexOfLastItem)

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-white mb-6">Women's Collection</h2>

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

            {/* Pagination Controls */}
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

export default Women