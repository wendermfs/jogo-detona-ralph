# 🕹️ Jogo Detona Ralph

Projeto desenvolvido como desafio de código da **Digital Innovation One (DIO)**. Trata-se de um jogo clássico estilo "Whack-a-Mole", no qual o jogador deve clicar no personagem Ralph assim que ele aparecer nas janelas do prédio.

---

## 🎮 Como Jogar

1. O jogo exibe um painel de 9 janelas.
2. O personagem Ralph aparece aleatoriamente em uma das janelas.
3. Clique sobre o Ralph para pontuar (`Your Score`).
4. Acompanhe o tempo restante (`Time Left`) e suas vidas.
5. Faça o máximo de pontos possível antes que o tempo acabe!

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página e contêineres do jogo.
- **CSS3**: Estilização com Flexbox/Grid, fontes retrô via Google Fonts (*Press Start 2P* e *Bebas Neue*).
- **JavaScript**: Lógica de sorteio de janelas, manipulação de eventos e contagem regressiva de tempo.
- **Áudio & Imagens**: Efeitos sonoros e sprites do jogo.

---
## 📁 Estrutura de Arquivos

```text
jogo-detona-ralph/
├── src/
│   ├── images/
│   │   ├── favicon.jpg
│   │   ├── player.png
│   │   ├── ralph.png
│   │   └── wall.png
│   ├── scripts/
│   │   └── engine.js
│   ├── sound/
│   │   └── hit.m4a
│   └── styles/
│       ├── reset.css
│       └── style.css
├── .gitignore
├── index.html
└── README.md

---

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/jogo-detona-ralph.git](https://github.com/SEU_USUARIO/jogo-detona-ralph.git)