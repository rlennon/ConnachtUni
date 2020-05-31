# AWS CodeBuild Analysis

AWS CodeBuild is a build service, which compiles source code, runs tests, and produces artifacts.  It supports popular programming languages and build tools.  It can be run using the CodeBuild console, or automated using the AWS CLI or AWS SDKs, or run as part of an AWS CodePipeline.  One can view the overall status of the build, build phase details, and build logs.
<br><br>
At a high level, one provides an input build project, including: where to get the source code, how to run the build, and where to store the output.  Build specifications are written using a specific [syntax](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html), in a yaml format.
<br><br>
[Pricing](https://aws.amazon.com/codebuild/pricing/) is based on the number of build minutes.  The free tier includes 100 build minutes of build.general1.small per month.  However, there may be additional charges for related services such as S3 storage for build artifacts, or for using it with AWS CodePipeline.
<br>
<br>

##### AWS CodeBuild ["Getting started"](https://docs.aws.amazon.com/codebuild/latest/userguide/getting-started.html) Tutorials
AWS has "Getting started" tutorials for CodeBuild using the console, and using the AWS CLI.  I worked through the console version, but did not have time to work through the AWS CLI version.
<br><br>
The console tutorial walks through creating a small Java project with a unittest, built using Maven, but doesn't require prior knowledge of Java or Maven (all code is supplied).  The tutorial uses code uploaded to an S3 bucket, not GitHub.  The first time I worked through it, it failed with a syntax in the code, but after that was corrected, it built sucessfully.
<br><br>
I was able to work through the tutorial a second time, mofifying it to pull code from a GitHub repository.  It offered options to connect via OAuth or Personal access token.  According to the [documentation](https://docs.aws.amazon.com/codebuild/latest/userguide/sample-github-pull-request.html), it looks like it should be possible to set up a webhook to build any time code is pushed to a GitHub repository, but I didn't have time to try this.
<br><br>
Note: The tutorial warned that required resources might not be free, but it did work on an AWS Educate account.
<br><br>


<br>

### Sources:
- https://aws.amazon.com/codebuild/
- https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html
- https://docs.aws.amazon.com/codebuild/latest/userguide/concepts.html
- https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html
- https://aws.amazon.com/codebuild/pricing/
- https://docs.aws.amazon.com/codebuild/latest/userguide/getting-started.html
- https://docs.aws.amazon.com/codebuild/latest/userguide/sample-github-pull-request.html
