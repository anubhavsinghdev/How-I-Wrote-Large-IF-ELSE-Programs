const fs = require("fs");
fs.open("./Main.cpp", "w", (err, file)=>{
const preText = `
#include <iostream>
using namespace std;
int main() {
    int n;
    cout << "Enter a positive number : ";
    cin >> n;
    if (n==0) {
        cout << "Even";
    } `;
fs.appendFileSync("Main.cpp", preText);
for (let i = 1; i < 10000; i+=2) {
    const text = `else if (n == ${i}) { 
        cout << "Odd";
    } else if (n == ${i + 1}) {
        cout << "Even";
    } `;
fs.appendFileSync("Main.cpp", text);
}
fs.appendFileSync("Main.cpp", `
}`);
});