const fs = require("fs")

function readFileContent(filePath) {
    // Implementation
    fs.readFile(filePath, "utf-8", (err, data) => {
        if(err) {
            console.log(`Error reading the file: ${err}`)
        } 
        else {
            console.log("File Content: \n" + data)
        }
    })
}

readFileContent('test-files/file1.txt');
// Expected Output: Content of file1.txt

readFileContent('test-files/empty-file.txt');
// Expected Output: (empty string)

readFileContent('test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...
