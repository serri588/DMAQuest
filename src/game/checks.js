var Checks = (function () {
    function Checks() {
    }
    return Checks;
}());
export default Checks;
Checks.available = function (game) {
    for (var item in game.plot) {
        if (game.plot.hasOwnProperty(item)) {
            if (!game.plot[item].visible) {
                var nowAvailable = true;
                var parents = game.plot[item].parents;
                for (var i = 0; i < parents.length; i++) {
                    parent = parents[i];
                    if (game[parent[1]][parent[0]].value < parent[2]) {
                        nowAvailable = false;
                    }
                }
                if (nowAvailable)
                    game.plot[item].visible = true;
            }
        }
    }
};
Checks.purchasable = function (game) {
    for (var item in game.plot) {
        if (game.plot.hasOwnProperty(item)) {
            if (!game.plot[item].available) {
                var nowAvailable = true;
                var pricing = game.plot[item].pricing;
                for (var i = 0; i < pricing.length; i++) {
                    parent = pricing[i];
                    if (game.resources[parent[0]].value < parent[1]) {
                        nowAvailable = false;
                    }
                }
                if (nowAvailable)
                    game.plot[item].available = true;
            }
        }
    }
};
//# sourceMappingURL=checks.js.map