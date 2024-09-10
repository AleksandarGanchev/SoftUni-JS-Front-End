import { artGallery } from "./artGallery.js";
import { expect } from "chai";

describe("Tests …", function() {
    describe('test addArtwork method', function() {
        it("should throw error", function() {
        expect(() => { artGallery.addArtwork(43, '20 x 30', 'Van Gogh') }).to.throw('Invalid Information!');
        expect(() => { artGallery.addArtwork('Painter', '20 x 30', 43) }).to.throw('Invalid Information!');
        expect(() => { artGallery.addArtwork('Painter', '20x30', 'Van Gogh') }).to.throw('Invalid Dimensions');
        expect(() => { artGallery.addArtwork('Painter', '20 x 30', 'Van Gogo') }).to.throw('This artist is not allowed in the gallery!');
        });

        it ('should return correct result', function() {
            expect(artGallery.addArtwork('Painter', '20 x 30', 'Van Gogh')).to.equal('Artwork added successfully: \'Painter\' by Van Gogh with dimensions 20 x 30.')
        });
    });

    describe('test calculateCosts method', function () {
        it('should throw error', function() {
            expect(() => {artGallery.calculateCosts('sasho', 1337, true)}).to.throw('Invalid Information!');
            expect(() => {artGallery.calculateCosts(43, 'pesho', true)}).to.throw('Invalid Information!');
            expect(() => {artGallery.calculateCosts(43, 1337, 43)}).to.throw('Invalid Information!');
            expect(() => {artGallery.calculateCosts(-43, 1337, true)}).to.throw('Invalid Information!');
            expect(() => {artGallery.calculateCosts(43, -1337, true)}).to.throw('Invalid Information!');
        })

        it('should return discounted total price', function() {
            expect(artGallery.calculateCosts(5, 5, true)).to.equal('Exhibition and insurance costs are 9$, reduced by 10% with the help of a donation from your sponsor.')
        })

        it('should return total price', function() {
            expect(artGallery.calculateCosts(5, 5, false)).to.equal('Exhibition and insurance costs are 10$.')
        })
    })

    describe('test organizeExhibits method', function() {
        it('should throw error', function() {
            expect(() => { artGallery.organizeExhibits('gosho', 4) }).to.throw('Invalid Information!');
            expect(() => { artGallery.organizeExhibits(4, 'gosho') }).to.throw('Invalid Information!');
            expect(() => { artGallery.organizeExhibits(-4, 4) }).to.throw('Invalid Information!');
            expect(() => { artGallery.organizeExhibits(4, -4) }).to.throw('Invalid Information!');
        });

        it ('should return', function() {
            expect(artGallery.organizeExhibits(2, 2)).to.equal('There are only 1 artworks in each display space, you can add more artworks.')
            expect(artGallery.organizeExhibits(200, 10)).to.equal('You have 10 display spaces with 20 artworks in each space.')
        });
    })
});

