const fs = require("fs");
fs.open("./Main.java", "w", (err, file)=>{
preText = `
// to run this code compile as javac -J-Xss128m filename.java
import java.util.*;
class Main {
public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter a positive number : ");
    int n = sc.nextInt();
    sc.close();
    check1(n);
    check2(n);
    check3(n);
    check4(n);
    check5(n);
    check6(n);
    check7(n);
    check8(n);
    check9(n);
    check10(n);
}
    `;
fs.appendFileSync("Main.java", preText);

let i = 0;
for(let j=1 ; j <= 10 ; j++){
    prefunction = `
static void check${j}(int n) {
    `;
    fs.appendFileSync("Main.java", prefunction);
    x=0;
    for (; x < 1000; i += 2, x += 2) {
        if (i === 0 || i % 1000 === 0) {
            text = `if (n == ${i}) { 
        System.out.print("Even");
    } else if (n == ${i + 1}) {
        System.out.print("Odd");
    } `;
        }
        else {
            text = `else if (n == ${i}) { 
        System.out.print("Even");
    } else if (n == ${i + 1}) {
        System.out.print("Odd");
    } `;
        }
        fs.appendFileSync("Main.java", text);
    }

    fs.appendFileSync("Main.java", `
}`);
}
fs.appendFileSync("Main.java", `
}`);
});
