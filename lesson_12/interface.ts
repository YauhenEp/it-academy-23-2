interface Car {
    model: string,
    numberOfWheels: number,
    isAutomatic: boolean,
    move: (speed: number, distance: number) => number;
    isParktronic?: boolean
}

interface Track {
    weigh: number
}

const car: Car = {
    model: 'X5',
    numberOfWheels: 4,
    isAutomatic: true,
    move: function (speed, distance): number {
        return speed * distance;
    }
}

type Person = {
    name: string,
    surname: string,
    isMarried: boolean
}


type Vehicle = Car & Track;

const vehicle: Vehicle = {
    model: 'X5',
    numberOfWheels: 4,
    isAutomatic: true,
    move: function (speed, distance): number {
        return speed * distance;
    },
    weigh: 2000
}