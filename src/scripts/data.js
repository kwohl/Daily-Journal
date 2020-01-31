// const journalEntry = {
//     date: "",
//     concept: "",
//     entry: "",
//     mood: ""
// };

const getEntries = () => {
fetch('http://localhost:8088/entries') // Fetch from the API
    .then(resp => resp.json())  // Parse as JSON
    .then(entries => {
        renderJournalEntries(entries)
        // What should happen when we finally have the array?
        });
};