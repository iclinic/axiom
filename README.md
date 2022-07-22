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


### Sobre esse projeto
Esse é o repositório que disponibiliza o Design System da iClinic, o Axiom.

Ele está implementado utilizando a biblioteca [Style Dictionary](https://amzn.github.io/style-dictionary), que é um sistema que permite definir estilos uma única vez, de forma a consumir qualquer plataforma ou idioma. Um único lugar para criar e editar seus estilos, e um único comando exporta essas regras para todos os lugares que você precisar - iOS, Android, CSS, JS, HTML, arquivos de esboço, documentação de estilo, etc.

Ele foi criado utilizando a integração com o plugin do [Figma Tokens](https://www.figmatokens.com/), que permite que as definições sejam feitas nesse plugin do Figma, pelo time de Design Ops, e enviado através de um commit para esse repositório no arquivo `tokens/input.json`.

Esse projeto também utiliza a biblioteca [token-transformer](https://www.npmjs.com/package/token-transformer) para processar o arquivo de definições de tokens (`tokens/input.json`) e gerar uma versão compatível com o Style Dictionary no arquivo `tokens/output.json`

### Scripts

`npm run clean` - remove os tokens antigos

`npm run token-transformer` -  processa o arquivo tokens/inputs.json e gera um novo arquivo tokens/output.json que vai servir de source para o script do Style Dictionary.

`npm run build` -  Executa o arquivo build.js, que é o arquivo que roda o Style Dictionary, lendo o arquivo output.json e gera a pasta `build`, que contém dentro dela todas as plataformas prontas para serem consumidas.
As configurações de plataformas e arquivos que devem ser gerados estão na pasta `config`.

