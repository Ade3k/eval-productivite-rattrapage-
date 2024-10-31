// concatenateStrings.test.js

// Fonction à tester
const concatenateStrings = (string1, string2) => {
    if (typeof string1 === 'string' && typeof string2 === 'string') {
      return `${string1} ${string2}`;
    } else {
      throw new Error(
        'Les types des paramètres ne correspondent pas : les arguments string1 et string2 doivent être des chaînes de caractères.'
      );
    }
  };
  
  // Début des tests
  describe('concatenateStrings', () => {
    // Test d'une concaténation correcte
    test('concatène deux chaînes de caractères', () => {
      expect(concatenateStrings('Bonjour', 'Monde')).toBe('Bonjour Monde');
    });
  
    // Test d'erreur si le premier paramètre n'est pas une chaîne
    test("renvoie une erreur si le premier paramètre n'est pas une chaîne", () => {
      expect(() => concatenateStrings(123, 'Monde')).toThrow(
        'Les types des paramètres ne correspondent pas : les arguments string1 et string2 doivent être des chaînes de caractères.'
      );
    });
  
    // Test d'erreur si le second paramètre n'est pas une chaîne
    test("renvoie une erreur si le second paramètre n'est pas une chaîne", () => {
      expect(() => concatenateStrings('Bonjour', null)).toThrow(
        'Les types des paramètres ne correspondent pas : les arguments string1 et string2 doivent être des chaînes de caractères.'
      );
    });
  
    // Test d'erreur si les deux paramètres ne sont pas des chaînes
    test("renvoie une erreur si les deux paramètres ne sont pas des chaînes", () => {
      expect(() => concatenateStrings({}, [])).toThrow(
        'Les types des paramètres ne correspondent pas : les arguments string1 et string2 doivent être des chaînes de caractères.'
      );
    });
  });
  