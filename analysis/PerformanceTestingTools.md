# Performance Testing Tools


Testing tools in Visual Studio

Only unit testing is available in the free version of Visual studio. 

Web performance and load test projects need the enterprise version of Visual Studio.

Other testing tools that are available in the enterprise version of Visual Studio are:

- **Live Unit Testing** - automatically runs unit tests in the background, and graphically displays code coverage and test results in the Visual Studio code editor.
	
- **IntelliTest** - automatically generates unit tests and test data for your managed code. IntelliTest improves coverage and dramatically reduces the effort to create and maintain unit tests for new or existing code.

- **Coded UI tests** - provides a way to create fully automated tests to validate the functionality and behavior of the application’s user interface. Can automate UI testing across a variety of technologies, including XAML-based UWP apps, browser apps, and SharePoint apps.

## Recommendation

However, there are several opensource tools to performance test Angular applications. Based on my research, I recommend using **Apache JMeter**. It can be used to performance test both dynamic and static resources, Web dynamic applications. t can be used to simulate a heavy load on a server, group of servers, network or object to test its strength or to analyze overall performance under different load types.

The website provides tutorials that are easy to follow. This is the most friendly option for beginners because:

	- it provides record-and-replay functionality via HTTP(S) Test Script Recorder 30
  
	- no programming languages knowledge is required - you can create the test in GUI form
  
	- Angular often means AJAX and JMeter supports AJAX requests firing via Parallel Controller

Another close second tool was Selenium; however, it does not offer the accuracy like JMeter.


### References

Apache Software Foundation (2020). Apache JMeter. Retrieved from [https://jmeter.apache.org/index.html](https://jmeter.apache.org/index.html)

Microsoft (2020). Testing Tools in Visual Studio. Retrieved from [https://docs.microsoft.com/en-us/visualstudio/test/?view=vs-2019](https://docs.microsoft.com/en-us/visualstudio/test/?view=vs-2019)
