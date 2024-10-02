// test
import { expect as _expect } from 'chai';
const expect = _expect;
import getMostPopularPlaces from '../getMostPopularPlaces';

describe('getMostPopularPlaces', function() {
    it('devrait retourner les deux quartiers les plus populaires', function() {
        expect(getMostPopularPlaces('Analamahitsy', 'Analamahitsy', 'Itaosy', 'Behoririka', 'Itaosy', 'Itaosy')).to.equal('Itaosy Analamahitsy');
    });

    it('devrait fonctionner avec des quartiers différents', function() {
        expect(getMostPopularPlaces('A', 'B', 'A', 'C', 'B', 'B')).to.equal('B A');
    });

    it('devrait retourner les deux premiers quartiers même si un seul est mentionné', function() {
        expect(getMostPopularPlaces('A', 'A', 'A')).to.equal('A undefined');
    });
});