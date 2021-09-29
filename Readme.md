# Intellectual and Developmental Disabled Association WebSite Project

## Project URL

- [paidd](http://paidd.cafe24app.com/)

## Project Description

This project was created to create a site for the Intellectual and Developmental Disabled Association in Pohang, Gyeongsangbuk-do, Korea.

## Project Stack

### Client

Following items are core frontend technologies used in this project:

- React
- React Router
- Redux
- tailwind css

### Server

Following items are core backend technologies used in this project:

- mongo DB
- cafe24 hosting
- REST API

## Data Schema

### Mongo DB

```
User {
  id : string,
  type : (master, org1, org2, org3, org4),
  email : string,
  password : string
}
Counseling {
  status : (unread, read, complete),
  title : string,
  content : string,
  writer : string,
  response : string,
  password : string
}
Notice {
	type : (org1, org2, org3, org4, participation)
	title : string,
	content : string,
}
Gallery {
	type : (org1, org2, org3, org4, participation)
	title : string,
	content : string,
	imagePath : string
}
Support : {
	status : (read, unread)
	name : string,
	private : string,
	phone : string,
	email : string
	address : string,
	periodical : number,
	temporary : number,
	goods : string
}
Volunteer : {
	status : (read, unread)
	name : string,
	birth: string,
	phone : number,
	vms : string,
	activity : string,
	hopeContent : string,
	hopeTime : string,
}

```

### Redux Schema

```jsx
setting {
	loginToken: ("login", null),
	currentEmail: string,
	currentPassword: string,
	menu: number,
	submenu: number,
	sidebar: ("on", "off"),
	profile: ("on","off"),
	uid: string,
	selected: number,
}
```

## Paidd Architecture

### Page

1. Home
2. Introducdtion
3. Business
4. Organization
5. Participation
6. Local

### Functions

## Manager

1. Manager Login
2. Notice CRUD
3. Photo Gallery CRUD
4. Support CRUD
5. Volunteer CRUD
6. Counseling CRUD

## User

- Everybody can read all posts.
- Anyone write posts about counseling, support document, volunteer in participation page.

## part to be supplemented

- UI/UX
- paging Check
