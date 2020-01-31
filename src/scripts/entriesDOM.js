/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
    const entriesContainer = document.querySelector(".entryLog");

        entries.forEach(entry => {
            const journalHtml = makeJournalEntryComponent(entry);
            entriesContainer.innerHTML += journalHtml;
        })
}

// Invoke the render function
// renderJournalEntries(journalEntries)