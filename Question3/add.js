// Yasaman Mirvahabi Sabet
// 101217770
// Question 3: File Module
// Create Log files

const fs = require('fs');
const path = require('path');

// Logs Directory
const logsDir = path.join(__dirname, 'Logs');

// Create logs directory
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created!');
}

// Changing current process to the logs
process.chdir(logsDir);

// Creating logs files
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `Log file Number ${i}`);
    console.log(`Created file... ${fileName}`);
}