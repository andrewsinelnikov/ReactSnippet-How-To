# MERNSnippet: How To
---
## Build Models

### Description
> [Models](https://mongoosejs.com/docs/models.html) are constructors for creating, reading and updating data from the underlying MongoDB database.<br/>

This guide will teach you how to describe your data for [MongoDB](https://www.mongodb.com/) database.

### Step 1
Add **models** folder into your backend part, create **Product.js** file there<br/>
![1](img/1.png) <br />
![2](img/2.png) <br />
And import **mongoose** library into **Product.js** <br />
![3](img/3.png) <br />

### Step 2
Define the [Schema](https://mongoosejs.com/docs/guide.html#definition)<br>
> A [schema](https://mongoosejs.com/docs/guide.html#definition) is a definition of the structure of a document. It's a constructor that requires an object where each field corresponds to the name in the collection<br/>

- There are 2 ways using **Schema**. It's up to you which one to use. <br />
  1. First way <br />
  ![4](img/4.png) <br />
  2. Second way <br />
  ![5](img/5.png) <br />
- Object definition. <br />
  The general form is `keyName:SchemaType`, where **keyName** is a name of the property, **SchemaType** can include a type, a default value, or other info <br>
  ![6](img/6.png) <br />
  ** SchemaType ** can be one of the following values: `String`, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, `Map`.