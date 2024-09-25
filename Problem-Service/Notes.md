The main branch is the deployment branch and the master is the development branch.

### About the database design for the application ###

We have several options with us in order to store the problems' data - relational database, non relational database and static storage like S3. Let's discuss them one by one:

1. Relational database: Probably not suitable for storing this data as the data is not relational in nature. Had there been different entities and relationships existed between those entities, relational DB would have been a good choice. 

2. Static storage like S3: A good potential candidate for storing the data, especially because of its static nature. We can store the data in an S3 bucket or equivalent and perform CRUD operations on it, basis admin rights. However, we'll not be going ahead with this as it needs credit card for signing up.

3. Non relational DB like MongoDB: A good choice to store the problems' data, because of its unstructured nature. Moreover, the maximum size of data that can be stored in a document is 16 MB, which is large enough for our use case. It's worth noting that MongoDB internally stores the data in form of BSON (Binary JSON) , which allows efficient data storage and traversal.

### More on database drivers, ORMs etc ###

Q. What is a database driver and why is it used?

A. Database driver is a software component that enables communication between an application and database management system (not the database). Example: MySQL2 is a database driver used to connect to MySQL RDBMS.

Q. What is an ORM and why is it used?

A. ORM stands for Object Relational Mapper. It is a software component that acts as an abstraction layer between the application and the database layer, and allows developers to work with data in relational databases using object oriented programming (OOP) structures.

Examples: Sequelize, Hibernate etc

ORMs are beneficial because as developers we prefer to write high level object oriented code than writing raw database queries. That being said, raw database queries may still be preferred over ORM in case of complex queries like joins of multiple tables etc.

Q. What are ODMs?

A. ODM stands for Object Document Mapping, it's similar to ORM, but with the difference that it's used for Document based NoSQL databases.

Example: Mongoose

### An important note ###

Problem statements can have text, images, tables etc. Due to this, we’ll store the entire problem description including the text, images, hints, constraints etc. in the form of Markdown. And this markdown can be stored as a string in MongoDB/S3.

## Sanitization of Incoming Markdown ###

As we discussed that we'll be storing the problem description in the form of Markdown, there are some considerations while using it. Markdown can have HTML, and HTML in turn can have malicious scripts. Hence, we need to sanitize the incoming markdown from API request body.

There's a library called `sanitize-html` which can be used to sanaitize HTML. However, the incoming data we have is in the form of Markdown. Hence, we'll leverage a library called `marked`, by which we'll first convert the Markdown into HTML. We can then sanitize the obtained output HTML.

After getting the sanitized HTML, we can either choose to return the sanitized HTML or convert it into Markdown. As Markdown is an easier data format to work with (compared to HTML), we'll convert the sanitized HTML back to Markdown using `turn-down` .