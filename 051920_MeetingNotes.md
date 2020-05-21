## 2020-05-19 Team Meeting

**Attendees**
- Phani Darapureddy
- Matthew Erler
- Sonia Patterson
- Elizabeth Taillon  (notes)
- Stephanie Weaver

**FYI**  
- Jorge sent an email that he would be unable to attend, due to work.
- Phani & Stephanie will be on PTO for the next meeting, 2020-05-21.

### Notes:

**Standup Roles**
- Matthew shared proposed stand up roles, to rotate Scrum Master and person responsible for taking minutes (Stand_up_roles.md).
- Team agreed to this proposal.

**Jira**
- Team found the CONUNI board in Jira.
- Link: https://studentjira.lyit.ie/secure/RapidBoard.jspa?rapidView=66&projectKey=CONUNI&view=planning.nodetail&issueLimit=100
- Team confirmed they can get to this link.

**Analysis**
- Team to review research/analysis done by team members during sprint 1.
   
**Branching**
- Team reviewed 'Github Branching Strategy' document created by Jorge (branching_strategy.md).
- Recommended four branches: master, develop, documentation, features/bugfixes.
- A suggestion was made that the team might want to simplify by only using three branches: master, development, and documenation.
- Code: make changes in a branch, make a pull request, teammate reviews, then merged.
- Documentation: make changes in documentation branch, no need for a pull request.

**Documentation**
- Team decided to organize the 'documentation' branch into folders.
    - Meeting Notes folder
      - minutes from team meetings
    - Analysis folder
      - research done by the team
    - Design Documents folder
      - final decisions on design
      - functional design documents
      = technical design documents
    - Demo folder
      - project demos
    - Questions folder
      - living document, with open & closed questions
- Stephanie volunteered to create the remaining folders, and move existing documents as needed.

**Project Scope**
- Team discussed project scope.
- Could stand up the environment by hand, then the demo would discuss how this would be scripted in future phases.
- Phani suggested we use Maven, for automated test cases.
- Could use LAMP server in AWS, as per the lab, however Matthew suggested we use Angular, easier than PHP.
- Everyone doesn't need to do everything, but everyone does need to be aware of everything.
- Suggestion to have a meeting where Phani demonstrates how to create infrastructure in AWS.  Team members would follow along, so everyone understands how to do it.
- Need to consider security, from the beginning.
  - User security - how do we control user's access to the application.
  - For project, can implement light-weight, but demo would discuss plans for future phases.
- Suggestion to have a series of small meetings that walk through how to build each piece.
  - Different team members would each demonstrate one piece.  (ex. build a VM in AWS with MySQL)
  - Could be recorded, so everyone has all the steps, and can pull together pieces for a demo later.

**First Demo**
- Team discussed what is needed for first demo
  - Manually deployed pieces?
  - Design documents?  ex. high-level design flow
  - Suggestion:
    - Develop the user security plan.
    - Create HTTP instance, Jenkins, MySQL in AWS. - Phani volunteered
    - "Hello world" app available on a URL.
    - Team decided this would come later, not for the first demo.
  - Suggestion: 
    - Powerpoint with one high-level slide per person
    - What analysis we did, what we decided (our recommendation), and why
    - Team was concerned this would not demonstrate enough progress.
  - Suggestion:
    - Document what we plan on making the infrastructure (Web servers, DB).
    - Document what we plan on making the CI/CD pipeline (Jenkins, Docker).
    - Epics/User Stories
    - Matthew volunteered to put a document in Documentation folder, so each team member can put which Epics they plan to create, so no duplication.
    - Team was concerned about relying on Jira's stability for a demo.
  - Decision:
    - Document what we plan on making the infrastructure (Web servers, DB).
    - Document what we plan on making the CI/CD pipeline (Jenkins, Docker).
