# Boteco Maria — Aplicativo Web

Aplicativo web completo para o **Boteco Maria** (*Bar, Petiscaria e Botequim Tradicional* em Santo André - SP, desde 2008).

## Funcionalidades

- **Tela Inicial (`/`)**: Hero 3D tátil, status automático Aberto/Fechado considerando o fuso de São Paulo (`America/Sao_Paulo`) e viradas após a meia-noite, selo *Premiado Veja ABC*, avaliação Google (`4,3/5 · Mais de 2.600 avaliações`), destaque para as empadinhas premiadas, carrossel de produtos e atalhos para Reservar Mesa, Ver Cardápio, Como Chegar e ligação direta.
- **Cardápio (`/cardapio`)**: Filtros animados por categoria (*Empadinhas*, *Petiscos*, *Pratos & Feijoada*, *Bebidas & Chopp*), cards 3D responsivos e modal de detalhes.
- **Reservas (`/reservas`)**: Formulário de preparação com seleção de data, horários compatíveis com o funcionamento do dia, quantidade de pessoas e preferência por mesa interna ou externa, resumo dinâmico e botão **RESERVAR** que aciona ligação direta para `tel:+551144371333` para confirmação com o estabelecimento.
- **A Casa (`/sobre`)**: História desde 2008, reconhecimentos (*Veja ABC*, *Revista Gula / Diageo*), endereço completo com botão para o Google Maps, links oficiais (Instagram, Facebook e site) e quadro de horários.

## Execução Local

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```
