'use strict'
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
        
        this.departureTrainAB = [];
        this.arrivalTrainA = [];
        this.arrivalTrainB = [];
    }

    // function to get the final clean result
    getFinalResult(boggie){
        let result = boggie.split(',').join(' ');
        return result.replace('HYB', '');
    }
    
    /* function to merge boggies of TrainA with TrainB in descending order based on distance
       from the Hyderabad station */
    mergeTrainAwithTrainB(){
        let departureBoggieInitials = ['DEPARTURE', 'TRAIN_AB', 'ENGINE', 'ENGINE'];

        this.departureTrainAB = this.arrivalTrainA.concat(this.arrivalTrainB);

        this.departureTrainAB = this.departureTrainAB.sort((a, b) => b.distance - a.distance);
        let boggieListToArray = [];

        // remove any boggie with distance as 0 (ie. HYB)
        for (let i = 0; i < this.departureTrainAB.length; i++) {
            if (this.departureTrainAB[i].distance != 0) {
                boggieListToArray.push(this.departureTrainAB[i].name);
            }
        }

        let boggieList = departureBoggieInitials.concat(boggieListToArray);
        return boggieList.toString();
    }

    getDepartureTrain(data) {

        let inputLines = data.toString().split('\n');

        // remove spaces (if any) between the words
        inputLines = inputLines.filter(s => s.replace(/\s+/g, '').length !== 0);

        for (let i = 0; i < inputLines.length; i++) {

                let input = inputLines[i].split(' ');
                
                switch (input[0]) {
                    case 'TRAIN_A':
                        this.arrivalTrainA = vehicleTrain.printArrivalOfTrain(input);
                        break;
                    case 'TRAIN_B':
                        this.arrivalTrainB = vehicleTrain.printArrivalOfTrain(input);
                        break;
                    default: 
                        console.log('Sorry! No match found!');
                }
        }

        // If there are no boggies that are after hyderabad, return 'JOURNEY_ENDED'
        if(this.arrivalTrainA.length === 0 || this.arrivalTrainB.length === 0){
            console.log('JOURNEY_ENDED');
            return;
        }

        let boggie = this.mergeTrainAwithTrainB();
        let result = this.getFinalResult(boggie);

        console.log(result.trim());
        return result.trim();
    }
}

module.exports = Vehicle;