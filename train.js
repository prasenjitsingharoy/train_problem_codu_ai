// importing and creating instance of VehicleTrain class
const VehicleTrain = require('./train-merger');
const vehicleTrain = new VehicleTrain();

class Vehicle {

    constructor() {
        
        // Before bhopal, the distances are considered from hyderabad
        // After bhopal, the distances are considered from the source station
        this.station_after_HYB = {
            'HYB': 0, 'NGP': 400, 'ITJ': 700, 'BPL': 800,
            'AGA': 2500, 'NDL': 2700, 'PTA': 3800, 'NJP': 4200, 'GHY': 4700
        };
        
        // TRAIN AB
        this.departureTrain = [];
        // TRAIN A
        this.departureTrainA = [];
        // TRAIN B
        this.departureTrainB = [];
    }

    getFinalResult(boggie){
        const search = ',';
        const replaceWith = ' ';

        // replace ',' with ' '
        let result = boggie.split(search).join(replaceWith);

        // If hyderadbad is one of the boggies, replace it with empty string
        result = result.replace('HYB', '');

        return result;
    }
    
    mergeTrainAwithTrainB(){
        let departureBoggieInitials = ['DEPARTURE', 'TRAIN_AB', 'ENGINE', 'ENGINE'];

        // concat trainB to trainA to produce a new array
        this.departureTrain = this.departureTrainA.concat(this.departureTrainB);

        // sorting the trains in descending order based on distance (here distances are stored in id)
        this.departureTrain = this.departureTrain.sort((a, b) => b.id - a.id);
        let boggieListToArray = [];

        // remove any boggie with id as 0 (ie. HYB)
        for (let i = 0; i < this.departureTrain.length; i++) {
            if (this.departureTrain[i].id != 0) {
                boggieListToArray.push(this.departureTrain[i].name);
            }
        }

        // concatenate the merged train initials with the sorted boggies
        let boggieList = departureBoggieInitials.concat(boggieListToArray);
        let boggie = boggieList.toString();

        return boggie;
    }

    main(data) {

        var inputLines = data.toString().split('\n');

        // remove spaces (if any) between the words
        inputLines = inputLines.filter(s => s.replace(/\s+/g, '').length !== 0);

        for (let i = 0; i < inputLines.length; i++) {
            if (inputLines) {

                // splitting the inputLines to get the Train type (A or B)
                let input = inputLines[i].split(' ');
                
                switch (input[0]) {
                    case 'TRAIN_A':
                        this.departureTrainA = vehicleTrain.printArrivalOfTrain_(input);
                        break;
                    case 'TRAIN_B':
                        this.departureTrainB = vehicleTrain.printArrivalOfTrain_(input);
                        break;

                }
            }
        }

        // If there are no boggies that are after hyderabad, return 'JOURNEY_ENDED'
        if(this.departureTrainA.length === 0 || this.departureTrainB.length === 0){
            console.log('JOURNEY_ENDED');
            return;
        }

        // get the departing TRAIN_AB
        let boggie = this.mergeTrainAwithTrainB();

        // get the final clean result
        let result = this.getFinalResult(boggie);

        console.log(result.trim());
        return result.trim();
    }
}

module.exports = Vehicle;