class Game {
    protected availableOptions: string[] = ["rock", "paper", "scissor"];
    protected winner: string = ""

    set setWinner(winner: string) {
        this.winner = winner
    }
}

export default Game