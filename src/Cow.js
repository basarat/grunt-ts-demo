var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Cow = (function (_super) {
    __extends(Cow, _super);
    function Cow() {
        _super.call(this, 'grass');
    }
    Cow.prototype.speak = function () {
        console.log('Cow mooed');
        _super.prototype.speak.call(this);
    };
    return Cow;
})(Animal);
//@ sourceMappingURL=Cow.js.map
