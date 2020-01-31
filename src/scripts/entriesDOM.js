/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
import makeJournalEntryComponent from "./entryComponent.js";

const renderJournalEntries = (entries) => {
    const entriesContainer = document.querySelector(".entryLog");

        entries.forEach(entry => {
            const journalHtml = makeJournalEntryComponent(entry);
            entriesContainer.innerHTML += journalHtml;
        })
}

export default renderJournalEntries;
// Invoke the render function
// renderJournalEntries(journalEntries)