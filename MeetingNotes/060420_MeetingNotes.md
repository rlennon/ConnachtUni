## 2020-06-04 Team Meeting

__Attendees__
- Phani Darapureddy
- Matthew Erler
- Sonia Patterson
- Stephanie Weaver
- Elizabeth Taillon
- Jorge (notes)


### Notes:
__Demo__
Link to Demo Video: *PENDING LINK*
- Phani went over a demo on Elastic beanstalk + CI/CD.

__elastic beanstalk__
- First topic was to go over Elastic beanstalk as it can help stand up environments in minutes.
- Elastic beanstalk - prepackaged software that will install what's needed using cloudFormation. It creates an application with all the typical features (monitoring, alerts, etc). This is Platform As A Service (PaaS).
- It will also create load balancing and auto-scaling capabilities automatically
- In the demo - there were two EC2 instances created through the elastic beanstalk wizard
- Once the application was created - there were various options to configure - such as instance types, number of instances, software, capacity, monitoring

__code pipeline CI/CD__
- AWS CodePipeline - it's a service that's available like VMs
- Source provider - Github is available and can be configured based on someone's account. Once connected, it'll show the repos from github.
- For deploy --> Elastic beanstalk, and select the application (created in the first demo)
- Phani made some changes to the github repo, committed the changes, and the pipeline started automatically and deployed the new version of the code to the EC2 instances. Tested by refreshing the webpage.

Note: Make to delete the environment and everything related to the deployment so no charges are incurred.

__Other Topics__
- Matt suggested to use Microsoft Visual Studio Code IDE available from the app store. It also allows to run the node.js application from within the IDE.
- We may need elevated privileges in our laptops in order to install nodejs.
- Deliverables:
- Summary presentation with the various pieces of the work (e.g., trello vs jira, performance testing, security, code scans, etc). That way everybody will have a chance to present something.
- Research security related items are available as well
- Demo of the development of the "hello world" app (Matt)
- Test that checks for the text "hello world" in the webpage and generates a report whether it's successful or not.  (Jorge)

"Phase 2"/Stretch goals to consider:
- ? Include the test into the CI/CD pipeline 
- ? Some screen mockups that show what the site might look like
- ? Investigate about Code Build/Test through the automated pipeline.
- ? Run the code scanning tool - and get a report

__Next week's agenda__

- Sprint planning 
- ? Practice Demo of the entire pipeline
- ? Have the draft presentation


