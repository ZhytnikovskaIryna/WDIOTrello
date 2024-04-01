Homework:

1. Install Webdriver.io/ Playwright / Cypress OR Take your existing JavaScript based TAF
2. Implement POM for your application under test
3. Use at least once an Abstract Class. Implemented in /src/POM/page.ts
4. Implement an Interface. Implemented in /src/configs/test-data.ts
5. Use Literall / Union / Generic Types. Implemented in /src/configs/test-data.ts

6. Use at least one Enum: Implemented in /src/configs/test-data.ts

<h3>Run Typescript WDIO tests:</h3>

1. Open 'TYPESCRIPT' folder
2. Add .env file in root directory with following content:

```javascript
USERTRELLO = "testingTrelloEpam@ukr.net";
PASSWORDTRELLO = "Trello@123";
```

3. Execute command

```bash
npm install
```

4. Execute command

```bash
npm run wdio'
```

<h3>Pre-requirements for Typescript tests:</h3>
- Empty board named 'Board Initial' should be present in Trello before running the test ( it is already there, please don't delete it)
- All other boards created by tests should be manually deleted after each run (as Trello doesn't allow to creation of more than 10 boards for a free account)
