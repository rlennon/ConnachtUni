## 2020-06-04 Team Meeting

**Attendees**
- Phani Darapureddy
- Matthew Erler
- Sonia Patterson
- Stephanie Weaver
- Elizabeth Taillon
- Jorge (notes)


### Notes:
**Demo**
Link to Demo Video: *PENDING LINK*
- Phani went over a demo on Elastic beanstalk + CI/CD.

__elastic beanstalk__
- First topic was to go over Elastic beanstalk as it can help stand up environments in minutes.
- Elastic beanstalk - prepackaged software that will install what's needed using cloudFormation. It creates an application with all the typical features (monitoring, alerts, etc).
- It will also create load balancing and auto-scaling capabilities automatically
- In the demo - there were two EC2 instances created through the elastic beanstalk wizard
- Once the application was created - there were various options to configure - such as instance types, number of instances, software, capacity, monitoring

__code pipeline CI/CD__
- AWS CodePipeline - it's a service that's available like VMs
- Source provider - Github is available and can be configured based on someone's account. Once connected, it'll show the repos from github.
- For deploy --> Elastic beanstalk, and select the application (created in the first demo)
- Phani made some changes to the github repo, committed the changes, and the pipeline started automatically and deployed the new version of the code to the EC2 instances. Tested by refreshing the webpage.

Note: Make to delete the environment and everything related to the deployment so no charges are incurred.




