// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
    let max: number = 0;
    let minPrice: number = prices[0];

    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        max = Math.max(prices[i] - minPrice, max);
    }

    return max;
};

// const test1 = console.log(maxProfit([7,1,5,3,6,4])); // 5
// const test2 = console.log(maxProfit([7,6,4,3,1])); // 0
const test3 = console.log(maxProfit([2,4,1])); // 2