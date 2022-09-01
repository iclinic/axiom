
![image](https://user-images.githubusercontent.com/9949206/180495595-4c9d4b6a-642d-459f-9361-fd0f4d200658.png)

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
Esse repositório disponibiliza os tokens de design do Axiom.

Ele está implementado utilizando a biblioteca [Style Dictionary](https://amzn.github.io/style-dictionary), que é um sistema que permite definir estilos uma única vez, de forma a consumir qualquer plataforma ou idioma. Um único lugar para criar e editar seus estilos, e um único comando exporta essas regras para todos os lugares que você precisar - iOS, Android, CSS, JS, HTML, arquivos de esboço, documentação de estilo, etc.

Ele foi criado utilizando a integração com o plugin do [Figma Tokens](https://www.figmatokens.com/), que permite que as definições sejam feitas nesse plugin do Figma, pelo time de Design Ops, e enviado através de um commit para esse repositório no arquivo `tokens/input.json`.

Esse projeto também utiliza a biblioteca [token-transformer](https://www.npmjs.com/package/token-transformer) para processar o arquivo de definições de tokens (`tokens/input.json`) e gerar uma versão compatível com o Style Dictionary no arquivo `tokens/output.json`

### **Axiom Design Tokens**
Uim *token de design* é uma **decsão de design codificado e armazenado em variáveis promovendo a padronização de vários elementos de estilo** como: tipografia, cores, regras de espaçamento, elevação e relacionados. São os alicerces para um Design System e promovem unidade entre os diferentes produtos de nosso Pilar, sendo compartilhados entre designers e pessoas desenvolvedoras.

#### [Global Tokens](https://www.figma.com/file/RbSJs5TvWqiQVxij5iDaiU/Axiom---Estudos?node-id=6888%3A18918)
Tokens globais são os valores em nossa linguagem de design, representados por nomes primitivos independentes de contexto. Nossa paleta de cores, animação, tipografia e valores de dimensão são todos registrados como tokens globais. Eles podem ser usados ​​diretamente e são herdados por todos os outros tipos de token.

#### [Core Tokens](https://www.figma.com/file/RbSJs5TvWqiQVxij5iDaiU/Axiom---Estudos?node-id=6972%3A10821)
Orientados aos elementos da interface, os Core Tokens são os principais grupos de Tokens que utilizamos na composição dos nossos components. A partir dessa organização conseguimos identificar e definir facilmente sua aplicação.

#### [Alias Tokens](https://www.figma.com/file/RbSJs5TvWqiQVxij5iDaiU/Axiom---Estudos?node-id=6977%3A10888)
Os Alias tokens, também conhecidos como Tokens de decisão, estão relacionados a um contexto ou abstração específico. Os aliases ajudam a comunicar a finalidade pretendida de um token e são eficazes quando um valor com uma única intenção aparece em vários lugares.

#### [Brand Tokens](https://www.figma.com/file/RbSJs5TvWqiQVxij5iDaiU/Axiom---Estudos?node-id=6988%3A15276)
Essas são as cores que indicam e reforçam a identidade visual da marca. São comumente utilizadas em ilustrações e referenciadas em Alias Colors como interactive, backgrounds, highlights, entre outros.

### Scripts

`npm run clean` - remove os tokens antigos

`npm run token-transformer` -  processa o arquivo tokens/inputs.json e gera um novo arquivo tokens/output.json que vai servir de source para o script do Style Dictionary.

`npm run build` -  Executa o arquivo build.js, que é o arquivo que roda o Style Dictionary, lendo o arquivo output.json e gera a pasta `build`, que contém dentro dela todas as plataformas prontas para serem consumidas.
As configurações de plataformas e arquivos que devem ser gerados estão na pasta `config`.


### Referências
- [Automatizando o handoff de Design Tokens](https://dsvault.io/automatizando-handoff-design-tokens/#nao-sofra)
- [Repositório do Style Dictionary](https://github.com/amzn/style-dictionary)
