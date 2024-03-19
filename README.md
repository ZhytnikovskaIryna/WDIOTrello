# TrelloJSWdio

Run WDIO tests:
Pre-requirements :

- Empty board named 'Board Initial' should be present in Trello before running the test ( it is already there, please don't delete it)
- All other boards created by tests should be manually deleted after each run (as Trello doesn't allow to creation of more than 10 boards for a free account)
  Steps:

1. Open 'WDIO' folder
2. Add .env file in root directory with following content:
   USERTRELLO='testingTrelloEpam@ukr.net'
   PASSWORDTRELLO='Trello@123'
3. execute command 'npm install'
4. execute command 'npm run wdio'
5. see 'master-report.html' report in WDIO/reports folder

Run API test:

1. Open 'API' folder
2. Execute commnd 'npm install'
3. execute command 'npm test'
4. see results in terminal
