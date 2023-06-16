import { Grid, Typography } from "@mui/material";
import React from "react";

const Terms = () => {
  const Terms = [
    {
      name: "Accuracy",
      value:
        "The information provided on this website may not be completely accurate. The information is only meant for reference purposes. You cannot hold us liable for any damage caused due to the information provided on this website. The marketplace, our services and the internet is regularly evolving and though we try to maintain accuracy, it may not always be the case that the data is completely accurate. You can contact us if you find any discrepancy on our website and we will make sure that we update the information. We will also not be liable for damage caused due to information from any third party associated with us.",
    },

    {
      name: "Undertaken Work",
      value:
        "We may or may not perform the additional work that we have not charged for. Any additional services on our part will have to be met with additional cost on yours. You cannot ask us to complete a work that you have not paid for.",
    },

    {
      name: "Work Responsibilities",
      value:
        "We will ensure that the work is perfect on our part while taking care of all the due diligence. You will be informed about all the decisions taken towards your project. In case of mistake, it will be rectified by our employees as soon as possible. Our employees will only be liable to fix a mistake if it was committed by them. Any loss due to external factors must not be the claim of rectification of a mistake.",
    },

    {
      name: "Limitation of Liability",
      value:
        "We will only be accountable for a maximum liability of the total purchase price of the product or service. Some products have a limited period of refund. After this period has surpassed, we cannot be held accountable for a refund or return of any product or service. We have zero accountability for any kind of loss due to the participation of any third party service provider.",
    },

    {
      name: "Billing",
      value:
        "Paying through credit card would mean that you have authorised the issuer of the credit card to pay the said amount without asking for or requirement of a signed receipt. The charges themselves will be viewed as an authorisation for payment by the card holder. By authorising us to put a charge on your credit card, you also authorise any third party, through which we complete transactions, to continue putting charges on your card till the amount is paid in full. In case of any discrepancy, you can hold the authorisation of payment till the issue is resolved. Providing a debit card number will lead to a deduction of the said amount from the account that is connected to that card. To reverse this, you must provide us with updated information and correct credit card number. The amount deducted from your account will be refunded only when we receive the said amount from your credit card. Payment failure due to issues like insufficient funds would warrant additional fees that you must pay in order to avail our services. Our terms and conditions as well as the T&Cs, of the issuer of the card or account, are applicable on all type of transactions whether they be made from credit card, debit card, automated transfer or any other electronic means of transferring funds.",
    },

    {
      name: "Product / Service Availaibility",
      value:
        "Some of the products of services might not be available temporarily or even permanently. We will inform you about the availability of product or service before you make a payment. The delivery date will also vary according to the availability of the product or service.",
    },

    {
      name: "Third Party Service Providers",
      value:
        "Our website contains information about third party service providers. It is upto you to avail their services. We will not be held accountable for any loss caused due to services or products of these or any their parties. We advise users to proceed using their website after going through their privacy policy and terms and conditions.",
    },

    {
      name: "Rights to Refuse",
      value:
        "We hold the rights to refuse our services due to any discrepancy found in the information provided by the user. We can also cancel orders or make changes.",
    },

    {
      name: "Disclaimer of Warranties",
      value:
        "We regularly update information on our website. The information can be changed without any notice. All the images and videos on our website are meant only for informative purposes. You cannot use anything from our website without getting prior permission.",
    },

    {
      name: "Governing Law",
      value:
        "Any conflict arising with us or any third party related to us will be disputed in the court of Delhi. All parties involved must adhere to and uphold the law of the State of Delhi.",
    },

    {
      name: "Trademark & Copyright",
      value:
        "All the trademarks mentioned on this website are owned by respective companies. You cannot reuse the information provided on this website without prior authorization by us or the company which owns the trademark. Plagiarizing content from our website can lead to penalties.",
    },
  ];

  return (
    <Grid
      container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        paddingTop: 10,
      }}
    >
      <Grid item>
        <Typography variant="h4">Terms of Service</Typography>
      </Grid>
      <Grid item style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Grid
          container
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          {Terms.map((term) => (
            <Grid item key={term.name}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                {term.name}
              </Typography>
              <Typography variant="body2">{term.value}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Terms;
