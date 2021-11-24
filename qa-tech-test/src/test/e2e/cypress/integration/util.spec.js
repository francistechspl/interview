const getCentralIndex = require('../../../util');

describe('Find the center index of the array', () => {
    it('Non-array returns null', () => {
        expect(getCentralIndex(null)).to.equal(null);
    })

    it('Empty list returns null', () => {
        expect(getCentralIndex([])).to.equal(null);
    })
    
    it('Less than 2 values returns null', () => {
        expect(getCentralIndex([10])).to.equal(null);
    })
    
    it('Equal to 2 values returns null', () => {
        expect(getCentralIndex([10, 10])).to.equal(null);
    })
    
    it('Able to find in middle of 3 values', () => {
        expect(getCentralIndex([10, 2, 10])).to.equal(1);
    })
    
    it('No middle in large array', () => {
        expect(getCentralIndex([133,63,23,90,6,7,168,16,19])).to.equal(null);
    })
    
    it('Interview question - 1', () => {
        expect(getCentralIndex([133,60,23,92,6,7,168,16,19])).to.equal(3);
    })
    
    it('Interview question - 2', () => {
        expect(getCentralIndex([23,50,63,90,10,30,155,23,18])).to.equal(4);
    })
    
    it('Interview question - 3', () => {
        expect(getCentralIndex([30,43,29,10,50,40,99,51,12])).to.equal(5);
    })
})