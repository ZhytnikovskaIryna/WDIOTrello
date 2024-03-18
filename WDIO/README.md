# TrelloJSWdio

WDIO Trello Tests (PO)
Initial setup in Trello:

- Empty board named 'Board Initial' should be present in Trello before running the test ( it is already there, please don't delete it)
- All other boards created by tests should be manually deleted after each run (as Trello doesn't allow to creation of more than 10 boards for a free account)
- add .env file in root directory with following content:
  USERTRELLO='testingTrelloEpam@ukr.net'
  PASSWORDTRELLO='Trello@123'

  Notes:

- The 'search' test is still not stable on Firefox. I tried many things ( adding different waituntil...) but it didn't help. Browser.pause() solving the issue but I decided that it is bad practice to add it.
