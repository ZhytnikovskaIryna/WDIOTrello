# TrelloJSWdio
WDIO Trello Tests (PO)
Initial setup in Trello:
- Empty board named 'Board Initial' should be present Trello before running the test ( it is already there, please don't delete it)
- All other boards created by tests should be manually deleted after each run run (as Trello doesn't allow to creation of more than 10 boards for a free account)

Notes:
- The 'search' test is still not stable on Firefox. I tried many things ( adding different waituntil...) but it didn't help. Browser.pause() solving the issue but I decided that it is bad practice to add it.
- config.js contains all constants used in tests

HOME TASK
1. Make sure Chai library is set up and used in your framework
2. Practice with Assert, Should, Expect interfaces to use them in tests
3. Understand the differences between mentioned interfaces
4. Push the code to remote repository and create Merge Request


