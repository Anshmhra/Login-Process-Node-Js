const { stdin } = require("process");
const readline=require("readline");
const crypto=require("crypto");
const fs=require("fs");
const path=require("path");


const readLineInterface= readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    
});

console.log("Enter your details to create your account\n");
readLineInterface.question("\nEnter Your Name: ",(name)=>{
   

    readLineInterface.question("Enter Your Email Id: ",(Id)=>{
          
                

         readLineInterface.question("Enter Your Password: ",(password)=>{

             readLineInterface.question("Please Verfiy Your Password: ", (confirmPassword) =>{
                
                if (password !== confirmPassword) {
                    console.log("\nPassword is Incorrect, account not created.");
                    readLineInterface.close();
                    return;
                }

                
                const hashPass=crypto
                .createHash("sha256")
                .update(password)
                .digest("hex");

               

                const LoginPath=path.join(__dirname,"User-data.txt");

                const Detail = `User Data:\n\nName: ${name}\nEmail: ${Id}\nPassword (hashed): ${hashPass}`;
                fs.writeFile(LoginPath, Detail,(err)=>{

                    if(err) return console.error(err);
                    console.log("\nAccount Created!");
                    console.log("\nNow u can login in this account by entering your entered password");

                 
                    
                  login(confirmPassword);
                   
                })

             })
          

                   
            })


   
                
 })
})
function login(confirmPassword) {
    readLineInterface.question("\nEnter your password for login : ",(loginPass)=>{
                     if (confirmPassword !== loginPass) {
                    console.log("\nPassword is Incorrect!, try again");
                   login(confirmPassword);
                    return;
                } else{
                    console.log("Login Successfully!");
                     readLineInterface.close();
                }
                

                 })

}



