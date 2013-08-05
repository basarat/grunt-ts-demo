var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Human = (function (_super) {
    __extends(Human, _super);
    function Human() {
        _super.call(this, 'pizza');
    }
    Human.prototype.speak = function () {
        console.log('A human spoke');
        _super.prototype.speak.call(this);
    };
    return Human;
})(Animal);
//@ sourceMappingURL=Human.js.map
