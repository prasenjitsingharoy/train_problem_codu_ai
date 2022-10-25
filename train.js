// importing and creating instance of VehicleTrain class
const VehicleTrain = require('./train-merger');
const vehicleTrain = new VehicleTrain();

class Vehicle {

    constructor(dataInput) {

        this.dataInput = dataInput;

        // Before bhopal, the distances are considered from hyderabad
        // After bhopal, the distances are considered from the source station
        this.station_after_HYB = {
            'HYB': 0, 'NGP': 400, 'ITJ': 700, 'BPL': 800,
            'AGA': 2500, 'NDL': 2700, 'PTA': 3800, 'NJP': 4200, 'GHY': 4700
        };

        // TRAIN AB
        this.DeptTrain = [];
        // TRAIN A
        this.deptTrainA = [];
        // TRAIN B
        this.deptTrainB = [];
    }

    main(dataInput) {

        var inputLines = dataInput.toString().split('\n');

        // remove spaces (if any) between the words
        inputLines = inputLines.filter(s => s.replace(/\s+/g, '').length !== 0);

        for (let i = 0; i < inputLines.length; i++) {
            if (inputLines) {

                // splitting the inputLines to get the Train type (A or B)
                let input = inputLines[i].split(' ');
                
                switch (input[0]) {
                    case 'TRAIN_A':
                        this.deptTrainA = vehicleTrain.printTrainA(input);
                        break;
                    case 'TRAIN_B':
                        this.deptTrainB = vehicleTrain.printTrainB(input);
                        break;

                }
            }
        }

        // If there are no boggies that are after hyderabad, return 'JOURNEY_ENDED'
        if(this.deptTrainA.length === 0 && this.deptTrainB.length === 0){
            console.log('JOURNEY_ENDED');
            return;
        }

        let startBoggie = ['DEPARTURE', 'TRAIN_AB', 'ENGINE', 'ENGINE'];

        // concat trainB to trainA to produce a new array
        this.DeptTrain = this.deptTrainA.concat(this.deptTrainB);

        // sorting the trains in descending order based on distance (here distances are stored in id)
        this.DeptTrain = this.DeptTrain.sort((a, b) => b.id - a.id);
        let boggieListToArray = [];

        // remove any boggie with id as 0 (ie. HYB)
        for (let i = 0; i < this.DeptTrain.length; i++) {
            if (this.DeptTrain[i].id != 0) {
                boggieListToArray.push(this.DeptTrain[i].name);
            }
        }

        // concatenate the merged train initials with the sorted boggies
        let boggieList = startBoggie.concat(boggieListToArray);
        let boggie = boggieList.toString();

        const search = ',';
        const replaceWith = ' ';

        // replace ',' with ' '
        let result = boggie.split(search).join(replaceWith);

        // If hyderadbad is one of the boggies, replace it with empty string
        result = result.replace('HYB', '');

        console.log(result.trim());
        return result.trim();
    }
}

module.exports = Vehicle;