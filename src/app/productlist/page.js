import Link from 'next/link';

const products = [
    { name: 'aam', link: '/productlist/aam' },
    { name: 'imli', link: '/productlist/imli' },
    { name: 'amrood', link: '/productlist/amrood' },
];

const ProductList = () => {
    return (
        <ul>
            <h1>Product List </h1>

            {products.map((product, index) => (
                <li key={index}>
                    <Link href={product.link}>
                        {product.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
