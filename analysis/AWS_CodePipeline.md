AWS CodePipeline automates the build, test, and deploy phases of your release process every time there is a code change, based on the release model you define. This enables rapid and reliable delivery of features and updates.

It easily integrates with GitHib. Do not have to provision or set up servers. 

Define the pipeline structure through a declarative JSON document that specifies the release workflow and its stages and actions. These documents enable you to update existing pipelines as well as provide starting templates for creating new pipelines.

Commit changes to the source repository are automatically detected. Changes are built and if there are any test cases configured, those tests will run. After the tests are complete, the built code is deployed to staging servers for testing. From the staging server, CodePipeline runs more tests, such as integration or load tests. Upon the successful completion of those tests, and after a manual approval action that was added to the pipeline is approved, CodePipeline deploys the tested and approved code to production instances.

Access Control: Uses AWS IAM to manage who can changes to and who controls the release workflow. 

Pricing: AWS CodePipeline costs $1.00 per active pipeline* per month. To encourage experimentation, pipelines are free for the first 30 days after creation.
	• An active pipeline is a pipeline that has existed for more than 30 days and has at least one code change that runs through it during the month. There is no charge for pipelines that have no new code changes running through them during the month. An active pipeline is not prorated for partial months.
AWS Free Tier*
As part of the AWS Free Tier, AWS CodePipeline offers new and existing customers one free active pipeline each month.
Your free usage is calculated each month across all regions and automatically applied to your bill - free usage does not accumulate.


Assessment: This looks like a viable tool for this project, but we need to be careful of incurring costs. We will need to learn more about setting up the JSON document.


Reference

Amazon Web Service (2020). AWS. Retrieved from https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome-introducing.html
