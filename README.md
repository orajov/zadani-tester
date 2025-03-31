# FAKTURY ONLINE - domácí úkol

## Spuštění

### 1. Klonování repozitáře
   ```bash
   git clone https://github.com/orajov/zadani-tester.git
   ```

### 2. Instalace závislostí
   ```bash
   npm install
   ```
### 3. Nastavení ENV

**CYPRESS_URL**=`https://dev.fakturaonline.cz`

**CYPRESS_LANGUAGE**=`cs`

**CYPRESS_RESOLUTION**=`1920x1080`

### 4. Spuštění testů
   ```bash
   npm run test:e2e
   ```

## Vysvětlení
- Změna prostředí a jazyku aplikace lze v CI ovládat pomocí **enviromentálních proměnných**.
- Testování je **data-driven**, ve složce data se nacházejí jsony s daty pro jednotlivé test suites.
- Způsob používání selektorů je řešení pro **testování jazykových mutací**, pokud se testy napojí na vývojářské locales (zde jsem vytvořil vlastní locales pro ukázku).
- Report testování se mimo konzoli vygeneruje ve složce **e2e/report**.
- Použití selektorů je praktické také na ovládání tabulek test-driven způsobem pomocí **iterací**.
- Pomocí parametru mobileResolution v Cypress.config() můžeme pomocí podmínek zapínat kód pro ovládání aplikace v **mobilním rozlišení**, pokud se někdy design liší.

### Prostor pro zlepšení
- V úkolu jsem se zaměřil spíše na demostraci ovládání testování skrze env pro praktické ovládání v CI a dodržování DRY principu.
- Pomocí parametrizace jobů pak můžeme pokrýt další prohlížeče a různá rozlišení.
- Dále bychom mohli pokračovat v psaní dalších testů pro vytváření, editaci, mazání faktur a vydajů či sortování a vyhledávání záznamů nebo zobrazování sloupů v tabulce.
- Další možné zlepšení může být přejití na typescript a případně nainstalovat tslint.
- Můžeme logovat a ukládat do artefaktů další věci jako třeba chyby aplikace, sledovat traffic pomocí interceptů atd.
- Veškére tyto body můžu ještě rozvést na callu.