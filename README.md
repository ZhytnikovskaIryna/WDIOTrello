# TrelloJSWdio

<h2> Repo contains three sub-projects:</h2>

1. WDIO UI tests for Trello (/WDIO). Stack: WDIO/mocha/spec/html-nice-reporter
2. API tests for Drop-box(/API). Stack: axios/mocha/chai
3. BDD UI tests for Trello(/BDD_CUCUMBER). Stack: WDIO/Cucumber/spec/html-nice-reporter

<h3>Pre-requirements for WDIO and BDD tests:</h3>

- Empty board named 'Board Initial' should be present in Trello before running the test ( it is already there, please don't delete it)
- All other boards created by tests should be manually deleted after each run (as Trello doesn't allow to creation of more than 10 boards for a free account)

<h3>Run WDIO tests:</h3>

1. Open 'WDIO' folder
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

5. See 'master-report.html' report in WDIO/reports folder
