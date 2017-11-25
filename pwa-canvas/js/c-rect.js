export class Rect {
    constructor(ctx, {top, left, width, height, bgc = 'blue'}) {
        this.ctx = ctx;
        this.dimension = {left, top, width, height};
        this.style = {bgc};
        this.draw();
    }

    draw() {
        this.ctx.beginPath();
        const {top, left, width, height} = this.dimension;
        this.ctx.rect(left, top, width, height);
        this.ctx.closePath();
        this.ctx.fillStyle = this.style.bgc;
        this.ctx.fill();
        return this;
    }
}

export class BlockViewport extends Rect {
    setViewport({top, left, right, bottom}) {
        const {width, height} = this.dimension;
        this.viewport = {
            top: top,
            left: left,
            right: right - width,
            bottom: bottom - height,
        };
        return this;
    }

    isBlockOutsideViewport(x, y) {
        return this.isBlockOutsideViewportX(x || this.dimension.left, 0.01) || this.isBlockOutsideViewportY(y || this.dimension.top, 0.01);
    }

    isBlockOutsideViewportX(x, dx) {
        return x + (dx || this.dx) > this.viewport.right || x + (dx || this.dx) < this.viewport.left;
    }

    isBlockOutsideViewportY(y, dy) {
        return y + (dy || this.dy) > this.viewport.bottom || y + (dy || this.dy) < this.viewport.top;
    }

    getCords() {
        return [
            this.dimension.left,
            this.dimension.left + this.dimension.width,
            this.dimension.top,
            this.dimension.top + this.dimension.height
        ];
    }

    intersects(rect) {
        const [_y, _y1, _x, _x1] = this.getCords();
        const [__y, __y1, __x, __x1] = rect.getCords();

        return !( _y > __y1 || _y1 < __y || _x1 < __x || _x > __x1 );
    }
}

export class BlueBlock extends BlockViewport {
    moveInViewport() {
        const {left, top} = this.dimension;

        if (this.isBlockOutsideViewportX(left)) {
            this._dx = -this._dx;
        }
        if (this.isBlockOutsideViewportY(top)) {
            this._dy = -this._dy;
        }

        this.dimension.left += this.dx;
        this.dimension.top += this.dy;

        return this.draw();
    }

    setSpeed(speedFactor) {
        this.speedFactor = speedFactor;
        return this;
    }

    get dy() {
        return this._dy * this.speedFactor;
    }

    get dx() {
        return this._dx * this.speedFactor;
    }

    setDelta(dy, dx) {
        this._dy = dy;
        this._dx = dx;
        return this;
    }
}

export class RedBlock extends BlockViewport {
    constructor(ctx, {stopGame}) {
        super(...arguments);
        this.stopGame = stopGame;
    }

    moveXY([top, left]) {

        this.dimension.top = left - this.dimension.width / 2;
        this.dimension.left = top - this.dimension.height / 2;
        if (this.isBlockOutsideViewport(this.dimension.top, this.dimension.left)) {
            this.stopGame();
        }
        return this.draw();
    }
}