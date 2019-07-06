// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var result = {};
    var count;
    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }

    if (currency >= 50) {
        count = Math.floor(currency / 50);
        currency -= count * 50;
        result.H = count;
    }
    if (currency >= 25) {
        count = Math.floor(currency / 25);
        currency -= count * 25;
        result.Q = count;
    }
    if (currency >= 10) {
        count = Math.floor(currency / 10);
        currency -= count * 10;
        result.D = count;
    }
    if (currency >= 5) {
        count = Math.floor(currency / 5);
        currency -= count * 5;
        result.N = count;
    }
    if (currency >= 1) {
        count = Math.floor(currency / 1);
        currency -= count * 1;
        result.P = count;
    }
    return result;
}
