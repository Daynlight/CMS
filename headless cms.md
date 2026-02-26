


## Requirements
D8 – Headless CMS + workflow publikacji + preview + webhook (10 p.)
- [x] Uruchom headless CMS (dowolny) oraz frontend, który wyświetla treści z CMS-a. Celem jest pokazanie współczesnego podejścia: treści zarządza się w panelu, a publikacja odbywa się przez osobny frontend.
- [x] Minimum 2 typy treści + relacja między nimi (np. artykuł–autor).
- [x] Role i uprawnienia: co najmniej Editor (tworzy szkice) i Publisher (publikuje).
- [x] Workflow statusów (np. draft -> review -> published): publiczny frontend pokazuje tylko opublikowane.

- [ ] Preview treści nieopublikowanej (draft/review) z zabezpieczeniem (np. token).
- [ ] Webhook z CMS-a, który po publikacji uruchamia akcję po stronie frontu (rebuild/odświeżenie/rewalidacja – wybór należy do Ciebie).



## Installation and usage
1. Copy repo
```bash
git clone https://github.com/Daynlight/CMS
```
2. Install docker
```bash
sudo apt install docker.io docker-compose
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
administrator panel: ```http://127.0.0.1:8055```
frontend: ```http://127.0.0.1:4000```




