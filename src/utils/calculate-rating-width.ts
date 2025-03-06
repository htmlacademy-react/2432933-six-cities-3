const MAX_RATING = 5;
const calculateRatingWidth = (rating: number) => `${(Math.round(rating) / MAX_RATING) * 100}%`;

export {calculateRatingWidth};
