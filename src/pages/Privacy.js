import { Grid , Typography } from '@mui/material';
import React from 'react'

const Privacy = () => {
    const Privacy = [
        {
          name: "Data collected from users",
          value: "There are various forms through which we collect data from users. This data is used for providing a better and personalized experience to each user. This data is stored at one of our secure data centers in Delhi. Most detail that we collect pertain to personal information of a person such as their name, date of birth, email address, billing address and details, residential address and so on. Authorization of billing is confirmed before putting a charge on the card card of user or client. Users can choose to hold a charge in case of any discrepancy. They can also choose to cancel the payment in case they do not want to avail our services. Additional information about your business and organisation is collected for delivery purposes. Most of our work required collaboration with the organisation. This in turn requires a lot of information sharing between both the parties."
        },
        {
          name: "Using Cookies and Log Files to Create Profile",
          value: "PPI (Personally Identifiable Information) profiles are maintained securely at our confidential data centers. The details collected generally consist of but are not restricted to name, email address, residential address, age and organisation type. This information is meant for better understanding our users and aggrandizing our services to meet their expectations. We do not share any information collected from our website unless we gain authorization from the user. This information is only shared with our parent company and our subsidiaries."
        },
        {
          name: "Communication, Email and Newsletters",
          value: "We store your email id, in case you sign up for our newsletters and offers. Newsletters are regularly sent out in order to keep visitors updated about recent changes in the business world or on our website. All the changes that can influence visitors or clients is mentioned in these letters. Offers contain deals and discounts offered by us. You can subscribe to these services anytime."
        },
        {
          name: "Data Sharing and Retention",
          value: "Spraxa Solutions adheres to its policy of privacy protection for customers and clients as well as site visitors. We do not share data until we are legally abided to. We acceded to the demands of legal departments in case they have a warrant for taking data from us. In case of legal proceedings, the Law of state of Delhi will guide our judgement of data sharing. We do not share data with third parties associated with us unless we get the authorization from the user."
        },
        {
          name: "Social Media",
          value: "To gather the IP addresses of users, we use social media networks such as Facebook, Twitter, LinkedIn and so on. Through cookies, we collect data to identify user interests and tailor our services to provide personalized experiences. We do not share information collected through social media cookies."
        },
        {
          name: "Security",
          value: "SSL (Secure Socket Layer) technology is used for securing user data. This type of encryption ensures that data does not fall into wrong hands."
        },
        {
          name: "Links",
          value: "Third party links on our website should be visited with caution. We advise our users to check their privacy policy before accessing information on their website."
        },
        {
          name: "Amendments",
          value: "We reserve the rights to make changes to our privacy policy anytime we would like to. It is up to the users to stay updated about policy changes through our website. Users will be informed about most changes through our newsletters."
        }
    ];      
    return (
        <Grid container style={{display:'flex', flexDirection:'column', alignItems:'center', gap:10, paddingTop:10}}>
          <Grid item>
            <Typography variant="h4">Privacy Policy</Typography>
          </Grid>
          <Grid item style={{paddingLeft:20, paddingRight:20}}>
            <Grid container style={{display:'flex', flexDirection:'column', gap:10}}>
              {Privacy.map((privacy) => (
                  <Grid item key={privacy.name}>
                      <Typography variant="subtitle1" style={{fontWeight:'bold'}}>{privacy.name}</Typography>
                      <Typography variant="body2">{privacy.value}</Typography>
                  </Grid >
              ))}
            </Grid>
          </Grid>
        </Grid >
    )
}

export default Privacy