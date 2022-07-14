# Axiom

### Como instalar
```
nvm use
npm install
```
Para instalar o pacote privado, é necessário colocar no contexto do bash a variável **NPM_TOKEN**. Solicite-a com algum desenvolvedor responsável.

### Como publicar uma nova versão no NPM
1. Atualize o package.json com a nova tag na propriedade "version".
2. Faça o merge na master e crie uma nova tag semântica com o mesmo valor informado na chave "version" do package.json. 

>Após criar a tag, o fluxo no github actions irá fazer a publicação automaticamente.
