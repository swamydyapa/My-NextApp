const ProductDetails = ({ params }: { params: { productId: string } }) => {
	return <div>Details about the Product {params.productId}</div>;
};

export default ProductDetails;
