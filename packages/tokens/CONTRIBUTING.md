### Como instalar
```
nvm use
npm install
```

### Sobre esse projeto
Esse repositório disponibiliza os tokens de design do Axiom.

Ele está implementado utilizando a biblioteca [Style Dictionary](https://amzn.github.io/style-dictionary), que é um sistema que permite definir estilos uma única vez, de forma a consumir qualquer plataforma ou idioma. Um único lugar para criar e editar seus estilos, e um único comando exporta essas regras para todos os lugares que você precisar - iOS, Android, CSS, JS, HTML, arquivos de esboço, documentação de estilo, etc.

Ele foi criado utilizando a integração com o plugin do [Figma Tokens](https://www.figmatokens.com/), que permite que as definições sejam feitas nesse plugin do Figma, pelo time de Design Ops, e enviado através de um commit para esse repositório no arquivo `tokens/input.json`.

Esse projeto também utiliza a biblioteca [token-transformer](https://www.npmjs.com/package/token-transformer) para processar o arquivo de definições de tokens (`tokens/input.json`) e gerar uma versão compatível com o Style Dictionary no arquivo `tokens/output.json`

### Scripts

`npm run build` -  Executa os comandos de remoção, transformação e build de maneira sequencial, unificando em um processo único de build, se o foco do desenvolvimento não for uma etapa específica do processo, esse comando pode ser usado para a geração dos tokens.

`npm run clean` - remove os tokens antigos

`npm run token-transformer` -  processa o arquivo tokens/inputs.json e gera um novo arquivo tokens/output.json que vai servir de source para o script do Style Dictionary.

`npm run build-dictionary` -  Executa o arquivo build.js, que é o arquivo que roda o Style Dictionary, lendo o arquivo output.json e gera a pasta `build`, que contém dentro dela todas as plataformas prontas para serem consumidas.
As configurações de plataformas e arquivos que devem ser gerados estão na pasta `config`.

`npm run test` -  Executa os testes do projeto.

`npm run test:watch` -  Executa os testes do projeto em modo *livereload*.

`npm run test:update` - Executa os testes do projeto e atualiza os snapshots de acordo com o código atual.


### Referências
- [Automatizando o handoff de Design Tokens](https://dsvault.io/automatizando-handoff-design-tokens/#nao-sofra)
- [Repositório do Style Dictionary](https://github.com/amzn/style-dictionary)

### Testando a lib localmente

Para testar a lib localmente, podemos utilizar a feature "link" do gestor de pacote node, presente no [yarn](https://classic.yarnpkg.com/en/docs/cli/link) e [npm](https://docs.npmjs.com/cli/v8/commands/npm-link).

Exemplo:
1. Navegue até a raiz do projeto `@axiom-ui/tokens` e rode o comando `yarn link` para registrar o pacote localmente.
2. Então, basta utilizar o comando `yarn link "@axiom-ui/tokens"` para consumir a versão local registrada.

Uma vez que a dependência estiver linkada em um projeto local, a mesma ficará disponível no diretório `node_modules` deste projeto. Alterações serão refletidas imediatamente, não fazendo necessário novo `link` do pacote. <br>
Para remover a dependência, basta executar os passos acima utilizando o comando `unlink`.