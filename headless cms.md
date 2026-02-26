<div align=center>

# CMS
</div>



- [Installation and usage](#installation-and-usage)
- [Usage](#usage)
- [Frontend pages](#frontend-pages)
- [Architecture](#architecture)
- [Kittie](#kittie)



## Installation and usage
1. Install docker and node
  ```bash
  sudo apt update
  sudo apt install docker.io docker-compose nodejs npm git
  ```
2. Copy repo
  ```bash
  git clone https://github.com/Daynlight/CMS
  ```
3. Run container
  ```bash
  docker compose up
  ``` 
4. Login to Directus ```http://127.0.0.1:8055```.
  ```
  user: admin@admin.com
  password: admin
  ```
5. Shutdown container
  ```bash
  docker compose down
  ```



## Usage
headless cms/backend: ```http://127.0.0.1:8055```
frontend: ```http://127.0.0.1:4000```



## Frontend pages
- ```/``` - default user article page.
- ```/access``` - all articles accessed with token.
- ```/refresh``` - refresh cached articles (webhook).



## Architecture
- Frontend is build with ```express``` and ```axios```.
- Backend is headless cms (Directus).
- Frontend and Backend are created via ```docker```.
- Backend have database ```postgresql``` save in ```./data```.
- It have two types of content [```Articles```, ```Authors```].
- ```Articles``` and ```Authors``` are related **many to one**.
- ```editor@editor.com``` is server editor that can edit **articles** and **authors**.
- editor can't set status equal to published.
- ```publisher@publisher.com``` is server publisher that can only set status of article to **published**.
- Article can have 3 states [```draft```, ```review```, ```published```].
- Frontend can get ```published``` content from backend via ```http://directus:8055/items/articles```.
- Front can access all content by using token for **Authenticated** user.
- Authenticated user don't have password and login it provides only token to fetch all data.
- When Article change status to ```published``` it sends api request to frontend to refresh articles.
- If someone opens frontend and there is no article than it fetches data from backend.
- Articles are automatically updated every minute. 
- headless cms is just user friendly backend. 


## Kittie
<img src="https://i.pinimg.com/1200x/5f/59/c4/5f59c4d1f3d4dfb278d15d85844924fa.jpg">