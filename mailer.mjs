import nodemailer from "nodemailer";
import emailList from "./mail-recipients.json" assert {type:"json"};



// async..await is not allowed in global scope, must use a wrapper
export async function 
mail(applicationList,statusList)
  {

    let emailBody = `<b>Hello this is the landtrust bot. I have found useful information!<BR><BR> <U><h2>NEW LISTINGS</B></h2></U>`;

    applicationList.forEach( item => 
        {
emailBody += 
`<h6 align="right" color="#D3D3D3"> NEW-LISTING </h6>
<ul>
<li><B>DESCRIPTION</B> : ${item.DESCRIPTION}</li>
 <li><B>STATUS</B> : ${item.STATUS}</li>
 <li><B>STREET_NAME</B>: ${item.STREET_NAME} </li>
 <li><B>STREET_NUM</B> : ${item.STREET_NUM} </li>
 <li><B>STREET_TYPE</B> : ${item.STREET_TYPE} </li>
 <li><B>POSTAL</B> : ${item.POSTAL} </li>
 <li><B>APPLICATION NUMBER</B> : ${item.APPLICATION_NUMBER} </li>
 <li><B>APPLICATION TYPE</B> : ${item.APPLICATION_TYPE}
 <li><B>ID</B> : ${item._id} </li>
 <li><B>REFERENCE_FILE_NUMBER</B> : ${item.REFERENCE_FILE_NUMBER}</li>
 <li><B>HEARING_DATE</B> : ${item.HEARING_DATE} </li>
 <li><B>DATE_SUBMITTED</B> : ${item.DATE_SUBMITTED}</li> <BR><BR><hr><BR><BR>
</ul>`
        })
    
        emailBody += "<BR><BR> <B><U><h2>NEW STATUS CHANGES</B></h2></U>";

        statusList.forEach( item => 
            {
                emailBody += 
                ` <h6 align="right"  style="color: #D3D3D3"> NEW-STATUS-UPDATE</h6>
                <ul>
                <li><B>STATUS</B> : ${item.STATUS}</li>               
                <li><B>DESCRIPTION</B> : ${item.DESCRIPTION}</li>
                 <li><B>STREET_NAME</B>: ${item.STREET_NAME} </li>
                 <li><B>STREET_NUM</B> : ${item.STREET_NUM} </li>
                 <li><B>STREET_TYPE</B> : ${item.STREET_TYPE} </li>
                 <li><B>POSTAL</B> : ${item.POSTAL} </li>
                 <li><B>APPLICATION NUMBER</B> : ${item.APPLICATION_NUMBER} </li>
                 <li><B>APPLICATION TYPE</B> : ${item.APPLICATION_TYPE}
                 <li><B>ID</B> : ${item._id} </li>
                 <li><B>REFERENCE_FILE_NUMBER</B> : ${item.REFERENCE_FILE_NUMBER}</li>
                 <li><B>HEARING_DATE</B> : ${item.HEARING_DATE} </li>
                 <li><B>DATE_SUBMITTED</B> : ${item.DATE_SUBMITTED}</li> <BR><BR><hr><BR><BR>
                </ul>`
            })
/*         emailBody += 
`<ul>
<li><B>DESCRIPTION</B> : ${item.DESCRIPTION}</li>
 <li><B>STATUS</B> : ${item.STATUS}</li>
 <li><B>DATE_SUBMITTED</B> : ${item.DATE_SUBMITTED}</li>


 <li><B>HEARING_DATE</B> : ${item.HEARING_DATE} </li>
 <li><B>STREET_NAME</B>: ${item.STREET_NAME} </li>
 <li><B>STREET_NUM</B> : ${item.STREET_NUM} </li>
 <li><B>STREET_TYPE</B> : ${item.STREET_TYPE} </li>
 <li><B>POSTAL</B> : ${item.POSTAL} </li>
 <li><B>APPLICATION TYPE</B> : ${item.APPLICATION_TYPE} </li>
 <li><B>APPLICATION NUMBER</B> : ${item.APPLICATION_NUMBER} </li>
 <li><B>REFERENCE_FILE_NUMBER</B> : ${item.REFERENCE_FILE_NUMBER} </li>
 <li><B>ID</B> : ${item._id} </li>
 <BR><BR><hr><BR><BR>
</ul>`
        }) */


 /* const  applicationListString = JSON.stringify(applicationList.map( item => {
    
    return  `    ID: ${item._id}
    APPLICATION_NUMBER : ${item.APPLICATION_NUMBER}
    POSTAL : ${item.POSTAL}
    STATUS : ${item.STATUS}
    APPLICATION_TYPE : ${item.APPLICATION_TYPE}
    DATE_SUBMITTED : ${item.DATE_SUBMITTED}
    REFERENCE_FILE_NUMBER : ${item.REFERENCE_FILE_NUMBER}
    HEARING_DATE : ${item.HEARING_DATE}

     STREET_NAME: ${item.STREET_NAME}
     STREET_NUM : ${item.STREET_NUM}
     STREET_TYPE : ${item.STREET_TYPE} `

    }) ); */
 


//Create email list from the json
    let mailRecipients = "";
for (let item of emailList)
{
    mailRecipients += item.EMAIL + ",";

}
console.log(mailRecipients)

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "landtrust.bot@gmail.com", // generated ethereal user
          pass: "ixkorwzkfjykmmnq", // generated ethereal password
        },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: mailRecipients, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "somePLAINTEXT", // plain text body
      html: emailBody, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

 return 'nodemailer: "I have completed my tasks"';
  }

  


export default mail;
