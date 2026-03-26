# colors-lab-project
A simple color manager

## Tech Stack:
* LAMP Tech Stack: Linux, Apache, MySQL, PHP
* DigitalOcean droplet is used for the server hosting
* GoDaddy is used for the domain name hosting
* VSCode is used as the IDE Code Editor
* GitHub/Git is used as the Version Control

## Database Structure
### Database Name: COP4331
#### Table: Colors
Example:

| ID | Name | UserID |
| --- | --- | --- |
| 1 | Blue | 1 |

#### Table: Users
Example:

| ID | FirstName | LastName | Login | Password |
| --- | --- | --- | --- | --- |
| 1 | Rick | Leinecker | RickL | COP4331 |

## API Documentation:
### AddColor.php
Stored at: /var/www/html/LAMPAPI/AddColor.php\
Description: adds a color to the database

Expects:
* color
* userId

Returns:
* error
    * empty, if success
    * error type, if fail

### Login.php
Stored at: /var/www/html/LAMPAPI/Login.php\
Description: logs a user into the color manager

Expects:
* login
* password

Returns:
* firstName, lastName, and id, if success
* "No Records Found" error, if fail

### SearchColors.php
Stored at: /var/www/html/LAMPAPI/SearchColors.php\
Description: searches database for color that mataches user input

Expects:
* search (the string the user specified)
* userId

Returns:
* All colors that match or partial-match the user defined search string, if success
* "No Records Found" error, if fail

## Accessing Website:
Users can access the website through the URL: http://colors-lab-project.xyz/

## Using the Website:
### Login Page:
Only two users have access to login. If you would like access, please contact me as there is no registration option at the moment.

### Color Manager Page:
There are two actions avaiable:
1. Search for a color, partial search is supported
2. Add a color

## AI Usage Disclosure:
This project was developed with assistance from generative AI tools:

* Tool: ChatGPT (GPT-5.2), OpenAI
* Date: Jan. 25-31, 2026
* Scope: Understanding Code in Lab and Bash Commands
* Nature of Use: Generated explaination of code blocks based on the files provided in the colors lab. Also, generated information on bash commands for use on the DigitalOcean server.

All AI-generated code was reviewed, tested, and modified to meet assignment requirements. Final implementation reflects my understanding of the concepts.
