class Block {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  right() {
    this.x += 1;
    return this;
  }

  left() {
    this.x -= 1;
    return this;
  }
}

module.exports = Block;