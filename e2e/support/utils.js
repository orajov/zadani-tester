export function getTestData(module, specName = Cypress.spec.fileName)  {    // funkce pro načítání dat
    const testName = specName.replace('E','').toLocaleLowerCase();
    const data = require(`../data/${module}.json`);
    const testData = data.find(item => item.testName === testName);

    if(!testData) {
        throw new Error(`Test data not found for ${module} in ${specName}`);
    } else {
        return testData;
    }
}

export function getTranslation() {  // funkce pro načítání jazykových mutací
    const language = Cypress.env('CYPRESS_LANGUAGE') || Cypress.config('language') || 'cs';
    const translation = require(`../../locales/${language}.json`);

    if(!translation) {
        throw new Error(`Translation not found for language ${language}`);
    } else {
        return translation;
    }
}

export function generateRandomString(length = 5) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}