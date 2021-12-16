const nodemailer=require('nodemailer');
const cron=require('node-cron');
const schedule=require('node-schedule');
// email message options
const mailOptions={
    from:'jjj',
    to:'fff',
    subject:'jiji',
    text:'text it is..!'
};
// email transport configuration
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'xxx@gmail.com',
        pass:'ccc'
    }
});
const someDate=new Date('30/08/2021 21:08:00')
//send email
const m=schedule.scheduleJob(someDate,() =>{
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log("email send"+info.response);
            m.cancel()
        }   
     })
})



