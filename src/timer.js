class Timer {
   
    constructor (count = 0) {
        this.intialcount = count
        this.count = count
        this.interval = false

        this.render()

    }

    render () {
        this.start = setInterval(function (){
            

        const sec = String(count % 60).padStart(2, '0')
        const minute = String(parseInt(count / 60) % 60).padStart(2, '0')
        const hour = String(parseInt(count / (60 * 60))).padStart(2, '0')

            document.getElementById('timer').innerText = 
            `${hour}: ${minute}: ${sec}`

        }, 1000)
    }
    
    static createTimerWithMinuteAndSecond(hour, minute, sec) {
        const count = minute * 60 + sec;

        return new Timer(count)
    }


    start () {
       if(this.interval)
            return

       this.interval = setInterval(this.increse, 1000)


    }

    stop () {
        clearInterval(this.setInterval)

        this.interval = false
    }

    reset () {
        clearInterval(this.interval)

        this.count = this.intialcount
        this.interval = false

        this.render()
    }

    increase = () => {
        this.count++
        this.render()
    }
}

const timer = Timer.createTimerWithMinuteAndSecond (20, 10, 30);

export { Timer };