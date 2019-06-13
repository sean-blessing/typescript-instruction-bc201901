"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stuffy = /** @class */ (function () {
    function Stuffy(inId, inType, inColor, inSize, inLimbs) {
        if (inId === void 0) { inId = 0; }
        if (inType === void 0) { inType = "n/a"; }
        if (inColor === void 0) { inColor = "n/a"; }
        if (inSize === void 0) { inSize = "/n/a"; }
        if (inLimbs === void 0) { inLimbs = 0; }
        this.id = inId;
        this.type = inType;
        this.color = inColor;
        this.size = inSize;
        this.limbs = inLimbs;
    }
    Stuffy.prototype.about = function () {
        return "Stuffy:  id=" + this.id + ", type=" + this.type +
            ", color=" + this.color + ", size=" + this.size +
            ", limbs=" + this.limbs;
    };
    return Stuffy;
}());
exports.Stuffy = Stuffy;
