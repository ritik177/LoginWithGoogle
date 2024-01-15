# npm init -y

--> for package.json file

# npm i express mongoose cors dotenv

# npm i passport

--> Passport is Express-compatible authentication middleware for Node.js.

# npm i passport-google-oauth20

-->Passport strategy for authenticating with Google using the OAuth 2.0 API.

# steps for google login

create a Project:
Open Google Developer Console.
Create New Project
Enter a name for your project and click "create".
Enable APIs and Services:

In the Google Developer Console, select your project.
In the left sidebar, click on "Dashboard".
Click on "+ ENABLE APIS AND SERVICES" at the top of the page.
Search for "Google + API" and select it.
Click the "Enable" button.
Create OAuth 2.0 Credentials:

In the google Developer Console , go to "credentials" in the left sidebar.
Click on " Create Credentials" and select "OAuth client ID".
choose "Web application" as the application type.
Set the authorized javaScript origins (e.g., http://localhost, http://localhost:3000 for deveopment).
Set the authorised redirect URIs (e.g, http://localhost:6005/auth/google/callback for development).
Click "create"

save the generated client ID and Client Secret.
