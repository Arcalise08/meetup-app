Feature: toggle event details
  Scenario: By default, When the user loads the app. No event details are visible
    Given the app isnt loaded
    When when the user opens the app
    Then they should see a list of events with details not showing

  Scenario: When user clicks show details, the details are then displayed
    Given the details for event are hidden
    When the user clicks show details
    Then the user is shown details for current event

  Scenario: when user clicks hide details, the details are then hidden
    Given the details for current event are hidden
    When the user clicks hide details
    Then the event details are then hidden