import { expect as _expect } from 'chai';
const expect = _expect;
import removeWords from '../removeWords';

describe('removeWords', function() {
    it('devrait enlever les mots spécifiés', function() {
        expect(removeWords('Hello, ceci est un test', ['ceci', 'un'])).to.equal('Hello, est test');
    });

    it('ne devrait pas enlever les mots si la casse est différente', function() {
        expect(removeWords('Hello Java', ['java'])).to.equal('Hello Java');
    });

    it('devrait retourner la chaîne originale si aucun mot n\'est à enlever', function() {
        expect(removeWords('Hello World', ['foo', 'bar'])).to.equal('Hello World');
    });
    
});