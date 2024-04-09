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
