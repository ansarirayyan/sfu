/* Right-click on the extension's icon in the Chrome toolbar and select "Inspect" 
or "Inspect popup." This will open the Developer Tools for the popup, where you 
can view the console logs. */


console.log("This is from content.js");


// Function to extract fields
//function extractFields() {	
	console.log("Run extractFields()");
  const data = {};
  console.log("Created the data var or const or whatever");
  const labels = document.querySelectorAll('.slds-form-element__label'); 
  console.log("We just ran document.querySelectorAll('.slds-form-element__label')");
  const labelValues = Array.from(labels).map(label => label.textContent.trim()); // ohh they doing this below I guess
  console.log("Now we finna trim labels to make labelValues");
  console.log("Gonna print the labelValues now!");
  console.log(labelValues);

	console.log("This is the line before the labels.forEach callback func");
	//console.log("This is labelText: ", labelText);
  labels.forEach(label => {
	  console.log("We running labels.forEach thingy");
    const labelText = label.textContent.trim();
	console.log("This is labelText: ", labelText); // why this not working
    const valueElement = label.parentElement.querySelector('.slds-form-element__control lightning-formatted-text');
    if (valueElement) {
      const valueText = valueElement.textContent.trim();
      data[labelText] = valueText;
    }
  });

  console.log("Extracted data:", data);
  //return data;
//}

// Automatically on page load
/*window.onload = () => {
  console.log("Page loaded, extracting fields...");
  const extractedData = extractFields();
}; */

// Triggered by a MutationObserver
/* const observer = new MutationObserver(() => {
  console.log("DOM mutated, checking for target elements...");
  const labels = document.querySelectorAll('.slds-form-element__label');
  if (labels.length > 0) {
    console.log("Found target elements, extracting fields...");
    const extractedData = extractFields();
    observer.disconnect();
  }
}); 
observer.observe(document.body, { childList: true, subtree: true }); */

// Triggered by a message from popup.js 
/*
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "extractData") {
    console.log("Extracting fields on message...");
    const extractedData = extractFields();
    sendResponse(extractedData);
  } 
}); */

document.getElementById("extractButton").addEventListener("click", () => {
  // Example data to send
  const emailData = { subject: "Sample Email", body: "Hello, this is a test email!" };
  console.debug(emailData); // chat am i tripping this aint working?

  chrome.runtime.sendMessage(
    { action: "sendEmail", data: emailData },
    (response) => {
      if (response.success) {
        //alert("Email sent successfully!");
		alert("Here is the subject: " + emailData.subject);
		console.log("Here is the subject: " + emailData.subject);
      } else {
        alert("Failed to send email.");
      }
    }
  );
});
