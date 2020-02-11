const api = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },
    saveJournalEntry(newEntry) {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
    },
    deleteJournalEntry(entryId) {
        return fetch(`http://localhost:8088/entries/${entryId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    }
}

export default api;