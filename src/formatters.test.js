import { formatTitle, formatIngredient, formatSource, formatImage, formatUrl } from './formatters'

describe('formatters', () => {
    describe('formatTitle', () => {
        describe('title has fewer than 25 characters', () => {
            it('returns the title unaltered', () => {  
                expect(formatTitle('Cookbook')).toBe('Cookbook');
            });
        });
        
        describe('title has more than 25 characters', () => {
            it('returns the title altered', () => {  
                const result = formatTitle('12345678912345678901234512222')
                 expect(result).toBe('1234567891234567890123451...');
            });
        });
    });

    describe('ingredient to be a text', () => {
        it('returns the ingredient as a text', () => {
            const ingredient = {text: "2 eggs, beaten", weight: 86};
            expect(formatIngredient(ingredient)).toBe("2 eggs, beaten");
        })
    })

    describe('recepie has a source', () => {
        it('returns the recipe with a source', () => {
            const source = "Smitten Kitchen";
            expect(formatSource(source)).toBe("Smitten Kitchen");
        })
    })

    describe('recipe has an image', () => {
        it('returns the recipe with an image', () => {
            const image = "https://www.edamam.com/web-img/525/525cc278ac65318654aca6cebc111675.jpg";
            expect(formatImage(image)).toBe("https://www.edamam.com/web-img/525/525cc278ac65318654aca6cebc111675.jpg");
        })
    })

    describe('recipe has a url', () => {
        it('returns the recipe wih a url', () => {
            const url = "http://www.101cookbooks.com/archives/japanese-pizza-recipe.html";
            expect(formatUrl(url)).toBe("http://www.101cookbooks.com/archives/japanese-pizza-recipe.html");
        })
    })
    
});