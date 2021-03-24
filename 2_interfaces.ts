interface Rect {
    readonly id: string;
    color?: string

    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: { width: 20, height: 30 },
    color: '#ccc'
}

const rect2: Rect = { id: '1245', size: { width: 29, height: 233 } }
rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

// =============================
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '1233', size: { width: 12, height: 12 },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// ==========================
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date();

    setTime(date: Date): void{
        this.time = date;
    }
}

// ==========================
const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
}

interface Styles  {
    [key: string]: string
}

