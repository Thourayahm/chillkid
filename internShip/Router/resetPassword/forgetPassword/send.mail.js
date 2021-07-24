function sendEmail(user, token) {
    sgMail.setApiKey(sendGridKey);
    const msg = {
      to: user.email,
      from: "", // your email
      subject: "Reset password requested",
      html: `
       <a href="${clientURL}/reset-password/${token}">${token}</a>
     `
     // I'm only going to use an (a tag) to make this easier to
     // understand but feel free to add any email templates 
     // in the `html` property
    };
  
    sgMail.send(msg)
      .then(() => {
        console.log("Email sent");
    }).catch((error) => {
        console.error(error);
    })
  }
