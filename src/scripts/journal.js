/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
import api from "./data.js";
import renderJournalEntries from "./entriesDOM.js";




api.getJournalEntries().then(renderJournalEntries);