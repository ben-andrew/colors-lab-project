# colors-lab-project
A simple color manager

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
Stored at: /var/www/html/LAMPAPI/AddColor.php
Description: adds a color to the database

Expects:
* color
* userId

Returns:
* error
    * empty, if success
    * error type, if fail

### Login.php
Stored at: /var/www/html/LAMPAPI/Login.php
Description: logs a user into the color manager

Expects:
* login
* password

Returns:
* firstName, lastName, and id, if success
* "No Records Found" error, if fail

### SearchColors.php
Stored at: /var/www/html/LAMPAPI/SearchColors.php
Description: searches database for color that mataches user input

Expects:
* search (the string the user specified)
* userId

Returns:
* All colors that match or partial-match the user defined search string, if success
* "No Records Found" error, if fail