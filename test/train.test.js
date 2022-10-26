const fs = require('fs');
const Train = require('../train');
const expect = require('chai').expect;

describe('Test cases for Train Problem', () => {

    it('should give the correct output for input1.txt', () => {
        const filename = 'sample_input/input1.txt';
        data = fs.readFileSync(filename).toString();
        let train1 = new Train();
        const result = train1.getDepartureTrain(data);

        expect(result).to.equal('DEPARTURE TRAIN_AB ENGINE ENGINE NJP PTA AGA BPL BPL ITJ ITJ');
    })

    it('should give the correct output for input2.txt', () => {
        const filename = 'sample_input/input2.txt';
        data = fs.readFileSync(filename).toString();
        let train2 = new Train();
        const result = train2.getDepartureTrain(data);

        expect(result).to.equal('DEPARTURE TRAIN_AB ENGINE ENGINE GHY GHY NJP NJP PTA NDL NDL AGA BPL NGP');
    })

    it('should give the correct output for input3.txt', () => {
        const filename = 'sample_input/input3.txt';
        data = fs.readFileSync(filename).toString();
        let train3 = new Train();
        const result = train3.getDepartureTrain(data);

        expect(result).to.equal('DEPARTURE TRAIN_AB ENGINE ENGINE NJP PTA ITJ NGP');
    })

    it('should give the correct output for input4.txt', () => {
        const filename = 'sample_input/input4.txt';
        data = fs.readFileSync(filename).toString();
        let train4 = new Train();
        const result = train4.getDepartureTrain(data);
        const JOURNEY_ENDED = undefined;

        expect(result).to.equal(JOURNEY_ENDED);
    })

    it('should give the correct output for input5.txt', () => {
        const filename = 'sample_input/input5.txt';
        data = fs.readFileSync(filename).toString();
        let train5 = new Train();
        const result = train5.getDepartureTrain(data);

        expect(result).to.equal('DEPARTURE TRAIN_AB ENGINE ENGINE GHY NJP PTA NDL AGA BPL BPL ITJ ITJ NGP NGP');
    })

    it('should give the correct output for input6.txt', () => {
        const filename = 'sample_input/input6.txt';
        data = fs.readFileSync(filename).toString();
        let train6 = new Train();
        const result = train6.getDepartureTrain(data);

        expect(result).to.equal('DEPARTURE TRAIN_AB ENGINE ENGINE NJP NJP PTA NDL AGA BPL ITJ ITJ ITJ');
    })

    it('should give the correct output for input7.txt', () => {
        const filename = 'sample_input/input7.txt';
        data = fs.readFileSync(filename).toString();
        let train7 = new Train();
        const result = train7.getDepartureTrain(data);

        expect(result).to.equal('DEPARTURE TRAIN_AB ENGINE ENGINE GHY PTA BPL ITJ');
    })

    it('should give the correct output for input8.txt', () => {
        const filename = 'sample_input/input8.txt';
        data = fs.readFileSync(filename).toString();
        let train8 = new Train();
        const result = train8.getDepartureTrain(data);
        const JOURNEY_ENDED = undefined;

        expect(result).to.equal(JOURNEY_ENDED);
    })

    it('should give the correct output for input9.txt', () => {
        const filename = 'sample_input/input9.txt';
        data = fs.readFileSync(filename).toString();
        let train9 = new Train();
        const result = train9.getDepartureTrain(data);

        expect(result).to.equal('DEPARTURE TRAIN_AB ENGINE ENGINE NJP NDL NDL BPL ITJ NGP');
    })

    it('should give the correct output for input10.txt', () => {
        const filename = 'sample_input/input10.txt';
        data = fs.readFileSync(filename).toString();
        let train10 = new Train();
        const result = train10.getDepartureTrain(data);

        expect(result).to.equal('DEPARTURE TRAIN_AB ENGINE ENGINE GHY GHY NJP AGA AGA ITJ NGP NGP NGP');
    })
})