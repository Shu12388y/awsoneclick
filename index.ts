import fs from "node:fs";
import {exec} from "node:child_process";
import { BuildEc2TF } from "./Iaas/build-ec2";



function main(){
    if(process.argv[2] == "deploy"){
        let data  =  BuildEc2TF(process.argv[3],process.argv[4],"",process.argv[5]);
        fs.mkdir("infra",(err)=>{
            console.log(err)
        })
        fs.writeFileSync("./infa/main.tf",data.trim(),"utf-8");
    }
    // console.log(process.argv[2])
}
main()



// function ReadFileTF() {
//   let data = BuildEc2TF("aws", "us-west-1","2.0.3","node-server");
//   fs.writeFileSync("main.tf", data.trim(), "utf-8");
// //   exec('terraform validate',(err,stdout,stdin)=>{
// //     if(err){
// //         console.log(err)
// //     }
// //     if(stdout){
// //         console.log(stdout)
// //     }
// //   })
// }

// ReadFileTF();
