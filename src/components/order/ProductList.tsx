import ProductCard from './ProductCard';

const products = [
  {
    image: '/images/wedding-gown.jpg',
    title: 'Armless Wedding Gown',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '100',
  },
  {
    image: '/images/casual-jean.jpg',
    title: 'Casual Jean',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '100',
  },
  {
    image: '/images/marque-uniform.jpg',
    title: 'Marque Uniform',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '100',
  },
  {
    image: '/images/brown-cardigan.jpg',
    title: 'Brown Cardigan',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '100',
  },
  {
    image: '/images/ankara.jpg',
    title: 'Ankara',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '100',
  },
  {
    image: '/images/senator-wear.jpg',
    title: 'Senator Wear',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '100',
  },
  {
    image: '/images/brown-cardigan-2.jpg',
    title: 'Brown Cardigan',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '100',
  },
  {
    image: '/images/green-ankara.jpg',
    title: 'Green Ankara',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '100',
  },
  {
    image: '/images/native-caps.jpg',
    title: 'Native Designer Caps',
    description: 'Radiant fabrics, with neat stitches of multi hemming for casual wear',
    price: '100',
  },
];

const ProductList = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Continue Shopping</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
