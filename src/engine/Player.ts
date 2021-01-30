class Player {
    protected name: string = "";
    protected score: number = 0;
    protected option: string = "";
    
    constructor(name: string) {
        this.name = name
    }

    incrementScore() {
        this.score++;
    }

    setOption(option: string = "")  {
        return this.option = option
    }
}

export default Player