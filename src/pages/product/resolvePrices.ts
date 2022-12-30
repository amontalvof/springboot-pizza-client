const resolvePrices = (prices?: string) => {
    if (prices) {
        const parsedPrices = JSON.parse(prices);
        return parsedPrices;
    }
    return [0, 0, 0];
};

export default resolvePrices;
