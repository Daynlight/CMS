


## Requirements
D8 – Headless CMS + workflow publikacji + preview + webhook (10 p.)
- [ ] Uruchom headless CMS (dowolny) oraz frontend, który wyświetla treści z CMS-a. Celem jest pokazanie współczesnego podejścia: treści zarządza się w panelu, a publikacja odbywa się przez osobny frontend.
- [ ] Minimum 2 typy treści + relacja między nimi (np. artykuł–autor).
- [ ] Role i uprawnienia: co najmniej Editor (tworzy szkice) i Publisher (publikuje).
- [ ] Workflow statusów (np. draft -> review -> published): publiczny frontend pokazuje tylko opublikowane.
- [ ] Preview treści nieopublikowanej (draft/review) z zabezpieczeniem (np. token).
- [ ] Webhook z CMS-a, który po publikacji uruchamia akcję po stronie frontu (rebuild/odświeżenie/rewalidacja – wybór należy do Ciebie).

## Installation
1. Install docker
```bash
sudo apt install docker.io docker-compose
```
