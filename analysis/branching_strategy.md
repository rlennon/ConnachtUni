# Github Branching Strategy
The following summarizes a recommended branching strategy for use with the ConnachtUni project - along with some sample scenarios.

## Branching Strategy
There are a number of possible branching strategies. It really depends on the team and the project to decide which branching strategy works for them.

The following branching strategy is based a typical "best practices" branching strategies. Additionally, I've modified it a bit to simplify its use for our specific project.

***Definitions/Clarifications:***
 - "infinite branches" - these are branches that do not get merged into other branches. These branches will always exist.
 - "short lived branches" - these are created temporarily and the changes then get merged into any of the infinite branches. The short lived branches can then be deleted.
 - branch policies - steps/processes that need to be completed in order to update a branch. For example - with no branch policies, anybody can directly update a branch. Some of branch policies include requiring a Pull Request in order to submit a change, or requiring that the Pull Request is reviewed and approved by other members of the team, etc. 

Branch Name | Purpose | Guidelines
|--         |--       |--
master      | Infinite branch. This is the "Production" version of the code which is currently running and used by end users. | Include Pull Request based on the develop branch reviews.
develop          | Infinite branch. This is the latest version that is in development and available for deployment. |  Features/bugfixes branches only get merged to develop once they're tested and validated. Should include branch policies such as requiring Pull Requests (PR), reviewer/approver of PRs, build validation.
documentation | Infinite branch. This is where all documentation is placed. This does not get merged into master or develop. | No need for branch policies here. Any team member can directly update. Basic review by the team member making the change should occur.
features/bugfixes | short lived branches. These are used to make changes to the code. | these should use a naming convention such as "bugfix/sign_in_bug" or "feature/new_pic_sizes". These should be created from the develop branch. Once these are ready, they should be tested and then merged into develop.

***Sample Scenario 1***

We need to implement new feature called 'student logins' (let's say to see how active a student is in this new platform).
1. Create a new branch from "develop" and call it "feature/studentlogins"
2. Develop the code needed for the student login functionality within the feature/studentlogins branch
3. Test the changes and make sure everything works.
4. Do a Pull Request to the develop branch. 
5. Get all the reviews/approvals to get the merge successfully into develop. Once merged, the feature/studentlogins can be deleted.
6. It's done now. The develop code can then be released to production on schedule or as-needed, and then the code should be merged into the master branch.

***Sample Scenario 2***

We're updating the documentation to include details about the project plan.
1. Make sure you use the "documentation" branch
2. Make the necessary changes
3. Commit the changes directly to the documentation branch. No need for reviews/etc.

## Other considerations
- The automated testing (e.g., integration, performance, etc) can be triggered on a short-lived branch. This can then help ensure only code that passes makes it to the develop branch.
- "hotfixes" - that is, fixing an issue directly in production should be done in production based on the master branch, and then merged into any in-flight release branch or develop branch as well.
- tagging is used as well in some instances and it's useful. But in our case, it appears it's unnecessary to go through that. 
- Release branches (v1, v2, etc) and environment branches (e.g., dev, qa, test, etc) are also other ways to approach this. However it seemed simpler to manage having a develop and master branch for the code.

## References:
- https://docs.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance?view=azure-devops 
- https://docs.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops
- https://medium.com/@sairamkrish/git-branching-strategy-for-true-continuous-delivery-eade4435b57e
- https://cocoacasts.com/tips-and-tricks-using-a-branching-strategy-that-works
