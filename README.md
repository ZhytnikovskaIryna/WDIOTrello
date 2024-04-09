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

<h3>Run Dropbox API test:</h3>

1. Open 'API' folder
2. Create .env file in the root of a project and insert code:

```javascript
TOKEN =
  //here you insert the token that you will learn how to generate in the next steps;
```

2. Go to https://www.dropbox.com/login.
3. Sign in to a Dropbox account using the following credentials:

- email: `testingTrelloEpam@ukr.net`
- password: `Trello@123`

4. Go to https://www.dropbox.com/developers/apps/info/hurcp1kqq0jdwc6
5. Find the button `Generate` in Generated access token section on the opened Settings page.
6. Generate a new temporary token, copy it and paste it in `.env` file. You should have something like this (note that the token provided in the example will not work):

```javascript
TOKEN = "******";
```

2. Execute command

```bash
npm install
```

3. execute command

```bash
npm test
```

4. see results in terminal

<h3>Run Cucumber BDD tests:</h3>

1. Open 'BDD_CUCUMBER' folder
2. Execute command

```bash
npm install
```

3.  to run all tests execute command

```bash
npm run all
```

4. or execute command to run smoke tests

```bash
npm run smoke
```

5. See 'master-report.html' report in BDD_CUCUMBER/reports folder
