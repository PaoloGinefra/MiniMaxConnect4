class Renderer {
  static diskPadding = 0.1;
  constructor(p) {
    this.p = p;
    this.diskSize = 0;
  }

  renderGame(game) {
    this.p.background(0);
    this.renderBoard(game.state.board);
  }

  indices2Position(i, j) {
    function index2Position(index, diskSize) {
      return (
        (0.5 + Renderer.diskPadding) * diskSize +
        index * (diskSize + 2 * diskSize * Renderer.diskPadding)
      );
    }
    return new p5.Vector(
      index2Position(j, this.diskSize),
      index2Position(i, this.diskSize)
    );
  }

  renderBoard(board) {
    this.diskSize =
      Math.min(
        (this.p.width - 2 * Renderer.diskPadding) / board[0].length,
        (this.p.height - 2 * Renderer.diskPadding) / board.length
      ) *
      (1 - 2 * Renderer.diskPadding);
    for (let i = 0; i < board.length; i++) {
      const row = board[i];
      for (let j = 0; j < row.length; j++) {
        const cell = row[j];
        if (cell !== 0) {
          const player = Object.values(Players).find(
            (player) => player.id === cell
          );
          this.renderDisk(new Disk(this.indices2Position(i, j), player));
        }
      }
    }
  }

  renderDisk(disk) {
    this.p.fill(disk.skin.color);
    this.p.circle(disk.position.x, disk.position.y, this.diskSize);
  }
}
