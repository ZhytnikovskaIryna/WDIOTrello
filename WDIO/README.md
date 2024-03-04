# TrelloJSWdio

WDIO Trello Tests (PO)
Initial setup in Trello:

- Empty board named 'Board Initial' should be present Trello before running the test ( it is already there, please don't delete it)
- All other boards created by tests should be manually deleted after each run run (as Trello doesn't allow to creation of more than 10 boards for a free account)
  Notes:
- The 'search' test is still not stable on Firefox. I tried many things ( adding different waituntil...) but it didn't help. Browser.pause() solving the issue but I decided that it is bad practice to add it.
- config.js contains all constants used in tests

HOME TASK

Take your set up test automation framework and improve it by applying knowledge from this module. Refactor automated tests created in the previous module based on Page object pattern and follow DRY, KISS, YAGNI principles (other design patterns can be used as well)

The solution should be split into next layers:

1. Core layer (core functionality of TAF, that isn’t project specific).
2. Business layer (should contain all functionality, related with business logic of the tested application)
3. Tests layer (should contain automated tests, TAF configuration)
4. Push the code to remote repository and create Merge Request
