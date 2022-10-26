module.exports = class VehicleTrain {
    
    constructor(data) {

        this.station_after_HYB = {
            "HYB": 0, "NGP": 400, "ITJ": 700, "BPL": 800,
            "AGA": 2500, "NDL": 2700, "PTA": 3800, "NJP": 4200, "GHY": 4700
        };
    }

    getFinalResult(boggie){
        const search = ',';
        const replaceWith = ' ';

        // replace ',' with ' '
        const result = boggie.split(search).join(replaceWith);

        return result;
    }

    printArrivalOfTrain_(input){
        let train_ArrivalInitials = ['ARRIVAL', input[0], 'ENGINE'];
        let arr = [];
        let tempBoggie = [];

        for(let i = 2; i < input.length; i++){

            // checking if the boggies for train A has stations that falls after hyderabad
            if(this.station_after_HYB.hasOwnProperty(input[i].trim())){
                arr.push(input[i]);
                let trainObj = new Object();

                // creating a new object with name and id property 
                // name stores the station names
                // id stores the distances
                trainObj = {
                    name: input[i].trim(),
                    id: this.station_after_HYB[input[i].trim()]
                };
                
                tempBoggie.push(trainObj);
            }
        }

        // concat the arrived boggies with arrival train A initials and convert it to string
        let boggieList = train_ArrivalInitials.concat(arr); 
        let boggie = boggieList.toString();

        // get the final clean result
        const result = this.getFinalResult(boggie);

        console.log(result.trim());
        return tempBoggie;
    } 
}