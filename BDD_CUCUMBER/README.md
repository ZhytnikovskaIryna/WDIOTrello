<h3>Pre-requirements for WDIO and BDD tests:</h3>

- Empty board named 'Board Initial' should be present in Trello before running the test ( it is already there, please don't delete it)
- All other boards created by tests should be manually deleted after each run (as Trello doesn't allow to creation of more than 10 boards for a free account)

<h3>Run Cucumber BDD tests:</h3>

1. Open 'BDD_CUCUMBER' folder
2. Execute command

```bash
npm install
```

3. Add .env file in root directory with following content:

```javascript
USERTRELLO = "testingTrelloEpam@ukr.net";
PASSWORDTRELLO = "Trello@123";
```

4. to run all tests execute command

```bash
npm run all
```

5. or execute command to run smoke tests

```bash
npm run smoke
```

6. See 'master-report.html' report in BDD_CUCUMBER/reports folder
