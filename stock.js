var stock = {
    randomAroundZero: function () {
        return Math.random() > 0.5 ? 1 : -1;
    },

    getStockPrice: function (input) {
        let start = input.startingPoint;
        let rate = input.rate;
        let variance = input.variance;

        if (start < 10) {
            start += 1;
        } else if (start > 50) {
            start -= 2;
        }

        return start * rate + variance * stock.randomAroundZero();
    }
};

module.exports = stock;
