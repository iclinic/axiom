
![image](https://user-images.githubusercontent.com/9949206/180495595-4c9d4b6a-642d-459f-9361-fd0f4d200658.png)
<!-- TODO: add npm package version badge -->

# **Axiom Design System Tokens**

Repositório destinado a gestão dos tokens de design do Design System Axiom.

## Instalação

```bash
npm install @axiom/tokens
# ou
yarn add @axiom/tokens
```

### Desing Token

Um *token de design* é uma **decsão de design codificado e armazenado em variáveis promovendo a padronização de vários elementos de estilo** como: tipografia, cores, regras de espaçamento, elevação e relacionados. São os alicerces para um Design System e promovem unidade entre os diferentes produtos de nosso Pilar, sendo compartilhados entre designers e pessoas desenvolvedoras.

Os tokens estão sendo disponibilizados em 2 cateorias: tokens "base" e tokens de "tema" como descrito abaixo.

### **Axiom Base Tokens: `@axiom/tokens/base`**

Um **Axiom Base Token** é a menor decisão de design codificada e compartilhada entre designers de produto e pessoas desenvolvedoras. Estes tokens são utilizados como base para quaisquer tema e podem ser consumidas na construção de nossas interfaces.
Base Tokens armazenam valores absolutos de propriedades css como cores, espaçamento, opacidade, sombras, bordas, fontes e tipografia. 

Exemplo:
```ts
// Axiom Base Tokens Example
import { color } from '@axiom/tokens/global'


// Color
color.grey.50 // '#4D4D4D'
color.alphaPurple.160 // '#8140D80F'

// Spacing
spacing.2 // '8px'
spacing.8 // '32px'

// Opacity
opacity.level.1 // '0.04'
opacity.level.10 // '0.96'

// Shadow
shadow.level.2 // 'box-shadow: 0px 2px 2px 0px hsla(0, 0%, 0%, 0.08); box-shadow: 0px 0px 2px 0px hsla(0, 0%, 0%, 0.04);'
shadow.level.6 // 'box-shadow: 0px 24px 48px -8px hsla(0, 0%, 0%, 0.09); box-shadow: 0px 48px 64px -24px hsla(0, 0%, 0%, 0.09);'

// Border
border.radius.none // '0px'
border.radius.sm // '1px'
border.width.none // '0px'
border.width.sm // '4px'


// Font
font.family.base // 'Roboto'

font.size.base // '1rem'
font.size.xxl // '2.5rem'

font.weight.regular // 'Regular'
font.weight.medium // 'Medium'
font.weight.bold // 'Bold'

font.letterSpacing.small // '1%'
font.letterSpacing.medium // '4%'

font.case.sentence // 'sentence'
font.case.uppercase // 'uppercase'

font.decoration.none // 'none'
font.decoration.underline // 'underline'
font.decoration.linThrough // 'line-through'

font.lineHeight.xxs // '100%'
font.lineHeight.sm // '128%'
```


### **Theme tokens: `@axiom/tokens/[name]`**

**Theme Tokens** são especializados em adicionar características específicas de marca e/ou tema ao Design System. Eles armazenam valores de propriedades css para cores (`color`) e sombras (`shadow`).

Exemplo:
```ts
// Usando tokens do tema iclinic
import { color } from '@axiom/tokens/iclinic'
color.brand.primary.80 = '#046EEC'
color.surface.feedback.success.accent = '#379539'

// Usando variação "inverse" do tema iclinc
import { color } from '@axiom/tokens/iclinic-inverse'
color.brand.primary.80 = '#046EEC'
color.surface.feedback.success.accent = '#DAECDA'
```

> Exemplo de outras possíveis variações de tema:
> - `@axiom/tokens/sazonal`
> - `@axiom/tokens/shosp`
> - `@axiom/tokens/pebmed`
