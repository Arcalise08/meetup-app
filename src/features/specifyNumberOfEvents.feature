Feature: specify number of events to show
  Scenario: By default, When the user loads the app the user is shown 30 events.
    Given the app isnt loaded
    When when the user opens the app
    Then they should see a list of 30 events

  Scenario: When user specifies number of events to show. they are shown the specified number of events
    Given the main page is open
    When the user specifies the number of events to show
    Then they are then shown that number of events
