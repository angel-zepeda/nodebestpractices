const fs = require("fs");
const terminal = require

class goodMorningStudents {
  bless() {



    fs.readFile("./students.txt", "utf-8", function(error, data) {
      const studentsArray = data.split(";");
      studentsArray.forEach(student => {
        console.log(`Good morning ${student}`);
      });
    });
  }
}

new goodMorningStudents().bless();