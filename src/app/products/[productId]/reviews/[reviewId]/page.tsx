const ReviewDetails = ({
	params: { productId, reviewId },
}: {
	params: { productId: string; reviewId: string };
}) => {
	return (
		<div>
			ReviewDetails of {reviewId} for product {productId}
		</div>
	);
};

export default ReviewDetails;
