# Database Analysis

Comparison of two possible databases for the project:  MySQL and MongoDB.

| [MySQL](dev.mysql.com/doc)                                        | [MongoDB](https://docs.MongoDB.com/)                              |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| Relational Database                                               | NoSQL Database                                                    |
| Pre-Defined Schema                                                | Schema-free (optional schema validation for a collection)         | 
| Tables with Columns, all Rows in a Table have same structure      | JSON-like Documents, fields can vary by document                  |
| SQL (Structured Query Language)                                   | MQL (MongoDB Query Language)                                      |
| New fields require a schema change, impacting existing rows       | Add new fields to any document, without impacting existing data   |
| Normalized data                                                   | Denormalized data                                                 |
| JOIN operation to merge data from multiple tables in single query | Separate queries, or lookup operator within aggregate operations  |
| ACID (Atomicity, Consistency, Isolation, Durability)              | BASE (Basically Available, Soft State, Eventual Consistency)      |
| CAP theorem 'CA' (Consistency & Availability)                     | CAP theorem 'CP' (Consistency & Partition tolerance)              |
| Vertical Scaling                                                  | Horizontal Scaling                                                |
| Master-Master and Master-Slave Replication                        | Master-Slave Replication, Sharding                                |
| Privilege based access, SSL                                       | Role based access, SSL                                            |
| Risk of SQL Injection attacks, prepared statements can mitigate   | Less risk, due to how documents are used to describe queries      |

## Conclusion

Recommendation is to use MySQL for this project.  The project only requires a small simple database to store structured data, for 
users and security roles. Given the nature of the project, it is not anticipated that the data will grow significantly in either
volume or complexity.  MySQL will be simpler to use, as the team has some familiarity from a prior project, and this project
has a tight deadline.  The risk of SQL injection attacks can be mitigated by the use of prepared statements, or named queries.

<br>

### Sources:
* https://www.xplenty.com/blog/the-sql-vs-nosql-difference/
* https://www.simform.com/mongodb-vs-mysql-databases/
* https://blog.panoply.io/mongodb-and-mysql
* https://www.mongodb.com/compare/mongodb-mysql
* https://www.techopedia.com/definition/23949/atomicity-consistency-isolation-durability-acid-database-management-system
* https://www.techopedia.com/definition/29164/basically-available-soft-state-eventual-consistency-base
* https://en.wikipedia.org/wiki/CAP_theorem
* https://www.acunetix.com/blog/articles/defence-in-depth-part-4-validate-everything-parameterize-sql-queries/
* https://dev.mysql.com/doc/refman/8.0/en/sql-prepared-statements.html


