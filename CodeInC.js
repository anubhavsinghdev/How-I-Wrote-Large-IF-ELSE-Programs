const fs = require("fs");
fs.open("./Main.c", "w", (err, file)=>{
const preText = `#include <stdio.h>
int main() {
    int n;
    printf("Enter a positive number : ");
    scanf("%d", &n);
    if (n == 0) {
        printf("Even");
    } `;
fs.appendFileSync("./Main.c", preText);
for (let i = 1; i < 10000; i+=2) {
    const text = `else if (n == ${i}) { 
        printf("Odd");
    } else if (n == ${i + 1}) {
        printf("Even");
    } `;
fs.appendFileSync("./Main.c", text);
}
fs.appendFileSync("./Main.c", `
}`);
});
