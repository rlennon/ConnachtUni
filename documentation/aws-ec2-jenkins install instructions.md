# Installing Jenkins on AWS - EC2 instance

| Author: Phani Darpaureddy - L00156781 |
|---------------------------------------|


1.	Create AWS EC2 instance. 
•	Download the key. 
•	Setup security group – grant access on http at port 8080
•	Note down the public IP.
•	Setup java path
•	Setup 8080 port in AWS security group
2.	Update all package in the instance
Sudo yum -y update
3.	Check the java version
•	Java -version
•	Sudo yum install java-1.8.0
•	Sudo /usr/sbin/alternatives –config java  to check if multiple java versions are installed and pick which one you want
4. Download Jenkins
Sudo wget -O /etc/yum.repos.d/Jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo

5. Import key file from Jenkins to set the trust worthiness of the Jenkins installation
Sudo rpm –import http://pkg.jenkins-ci.org/redhat/jenkins-ci.org.key

6. Install Jenkins
Sudo yum install Jenkins

7. start Jenkins
Sudo service Jenkins start

8. Access Jenkins server using public DNS of your ec2 instance on port 8080
•	http://{public dns}:8080
a.	unlock Jenkins password
b.	sudo su –
c.	cd /var/lib/Jenkins/secrets/
d.	cat initalAdminPassword
install suggested plugins – maybe Github
9. to stop Jenkins
sudo service Jenkins stop
10. to remove Jenkins
•	sudo yum remove Jenkins
•	sudo rm -r /var/lib/Jenkins
