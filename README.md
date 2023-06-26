Project's name:
    DecemberLabs_Nightwatch

Description:
    Test automation project that uses NodeJS and Nightwatch to perform UI tests on DecemberLabs web applications.

Requirements:
    Make sure you have the following tools installed before you begin:
        - Microsoft Visual Studio Code (version 1.79.2).
        - Chrome browser (Last version).
        - NodeJS 16.17.1 (Need to create an environment variable on windows OP).

To be able to run the project:
    - Clone this repository to your local machine.
    - Download and Install NodeJS.
    - Install Nightwatch on Visual Studio Code.
    - Open the project in Visual Studio Code.

Project Structure:
    - Tests folder: Contains the test classes where the scenarios and test cases are defined.
    - PageObject folder: Contains the classes that represent the web pages of the application under test. These classes encapsulate the elements and of the UI.
    - tests_output folder: Store the html document that allows see the test's reports.
    - node_modules folder: Contains all the dependencies and external modules needed for the project.

PageObjects classes:
    They store the elements and methods to interact with the components of each page in the application.

Test classes:
    Store the test scripts related to the page being tested.

Other Important Files:
    - Nightwatch.conf.js: Store the configuration needed to run the test cases, in this file browsers, webdriver and other settings are defined.
    - config.js: This class allows to open and closed the browser every time a test ran.
    - package.json: Is where all dependencies are defined.

To Run the TestCases: 
    On Visual Studio Code, in superior menu click on View and select TERMINAL menu, and type the following commands:
        -Run all testcases ----> npx nightwatch
        -For a particulary TestPage ----> npx nightwatch --test Test/TestPageName.js
        -For a particulary TestCase ----> npx nightwatch --test Test/TestPageName.js --testcase "TestCaseName"

Improvements:
    - The required fields validation should be more strong, validate the large of the input data, not allow to entry numebers in Name's field for example.
    - An error message should be displayed when required fields got empty or with data errors in order to inform the user of the kind of mistake is making.
    - Approx Budget field will be a better user experience if the user itself is the responsable of input the amount, with radio button elements the user has no control of ingress an specific budged, is better with a simple input field.
