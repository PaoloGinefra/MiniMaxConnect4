class Disk {
  constructor(position, player) {
    this.position = position;
    this.skin = player.skin;
  }

  draw(p) {
    p.fill(color);
    p.circle(x, y, diameter);
  }
}
