function saveString(text: string, filename: string): void {
    const blob: Blob = new Blob([text], { type: "text/csv" });
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link);
}

// Generate CSV content
function getCSVContent(): string {
    // Create an array of arrays, where each sub-array represents a row in the CSV
    const data: string[][] = [
        ["Name", "Age", "City"],
        ["Alice", "24", "New York"],
        ["Bob", "30", "San Francisco"]
    ];

    // Map each row to a CSV string and join them with CRLF line breaks
    const csvContent: string = data.map(row => {
        // Join each field in the row with a semicolon (depends on the region)
        return row.join(";");
        // CRLF for compatibility with Excel on Windows
    }).join("\r\n"); 

    return csvContent;
}


// Add event listener to download button
document.getElementById('downloadBtn')?.addEventListener('click', () => {
    saveString(getCSVContent(), "data.csv");
});
