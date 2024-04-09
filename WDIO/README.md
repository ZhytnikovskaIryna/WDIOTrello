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

<h3>Per-commit hooks</h3>
Husky pre-commit hook is setup to be executed before each commit.

Prettier code formatting and Eslint code fixes are executed before commit by this commannds:

```javascript
  "lint:fix": "eslint ./ --fix",
  "pretty": "pretty-quick",
```
