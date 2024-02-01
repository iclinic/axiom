
![image](https://user-images.githubusercontent.com/9949206/180495595-4c9d4b6a-642d-459f-9361-fd0f4d200658.png)


# **Axiom Design System Tokens**
![NPM Version](https://img.shields.io/npm/v/%40axiom-ui%2Ftokens)

Repositório destinado a gestão dos tokens de design do Design System Axiom.

## Instalação

```bash
npm install @axiom-ui/tokens
# ou
yarn add @axiom-ui/tokens
```

### Desing Token

Um *token de design* é uma **decisão de design codificado e armazenado em variáveis promovendo a padronização de vários elementos de estilo** como: tipografia, cores, regras de espaçamento, elevação e relacionados. São os alicerces para um Design System e promovem unidade entre os diferentes produtos de nosso Pilar, sendo compartilhados entre designers e pessoas desenvolvedoras.

Os tokens estão sendo disponibilizados em 2 categorias: tokens "base" e tokens de "tema" como descrito abaixo.

### **Axiom Base Tokens: `@axiom-ui/tokens/base`**

Um **Axiom Base Token** é a menor decisão de design codificada e compartilhada entre designers de produto e pessoas desenvolvedoras. Estes tokens são utilizados como base para quaisquer tema e podem ser consumidas na construção de nossas interfaces.
Base Tokens armazenam valores absolutos de propriedades css como cores, espaçamento, opacidade, sombras, bordas, fontes e tipografia.

Exemplo:
```ts
// Axiom Base Tokens Example
import { color } from '@axiom-ui/tokens/base'


// Color
color.grey[50] // '#4D4D4D'
color.alphaPurple[160] // '#8140D80F'

// Spacing
spacing[2] // '8px'
spacing[8] // '32px'

// Opacity
opacity.level[1] // '0.04'
opacity.level[10] // '0.96'

// Shadow
shadow.level[2] // 'box-shadow: 0px 2px 2px 0px hsla(0, 0%, 0%, 0.08); box-shadow: 0px 0px 2px 0px hsla(0, 0%, 0%, 0.04);'
shadow.level[6] // 'box-shadow: 0px 24px 48px -8px hsla(0, 0%, 0%, 0.09); box-shadow: 0px 48px 64px -24px hsla(0, 0%, 0%, 0.09);'

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


### **Theme tokens: `@axiom-ui/tokens/[name]`**

**Theme Tokens** são especializados em adicionar características específicas de marca e/ou tema ao Design System. Eles armazenam valores de propriedades css para cores (`color`) e sombras (`shadow`).

Exemplo:
```ts
// Usando tokens do tema iclinic
import { color } from '@axiom-ui/tokens/iclinic'
color.brand.primary[80] = '#046EEC'
color.surface.feedback.success.accent = '#379539'

// Usando variação "inverse" do tema iclinc
import { color } from '@axiom-ui/tokens/iclinic-inverse'
color.brand.primary[80] = '#046EEC'
color.surface.feedback.success.accent = '#DAECDA'
```

> Exemplo de outras possíveis variações de tema:
> - `@axiom-ui/tokens/sazonal`
> - `@axiom-ui/tokens/shosp`
> - `@axiom-ui/tokens/pebmed`

## Integração theme tokens

### MUI v5

Para uma integração fluida e simples com React e MUI, é possível criar um subtheme dentro do theme do MUI apenas criando uma nova propriedade.

- Importe os tokens e exporte um novo objeto que será usado como `theme` junto com seu `type`:

```ts
// axiomTheme.ts
import {
  border,
  font,
  opacity,
  shadow,
  spacing,
  color,
  shadowBrand,
} from "@axiom-ui/tokens/iclinic";

export const axiomTheme = {
  border,
  font,
  opacity,
  shadow,
  spacing,
  color,
  shadowBrand,
};

export type AxiomTheme = typeof axiomTheme;
```

- Em um arquivo de `typings` global, extenda a interface `Theme` do MUI e adicione uma nova propriedade que será o tema do Axiom:

```ts
// types.d.ts

import type { AxiomTheme } from "styles/axiomTheme.ts";

declare module "@mui/material/styles" {
  interface Theme {
    axiom: AxiomTheme;
  }

  interface ThemeOptions {
    axiom?: AxiomTheme;
  }
}
```

- Depois é só importar o objeto `theme` e passar no provider do MUI:

```ts
// Theme.tsx
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

import { axiomTheme } from "styles/axiomTheme";

export const muiTheme = createTheme({});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MUIThemeProvider
      theme={{
        ...muiTheme,
        axiom: axiomTheme,
      }}
    >
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
```

- Acessando o tema nos componentes:

```ts
// Card.tsx

import { Box, styled } from "@mui/material";

export const Card = styled(Box)(({ theme }) => ({
  boxShadow: theme.axiom.shadow.level[4],
  backgroundColor: theme.axiom.color.background[1],
  padding: theme.axiom.spacing[10],
  borderRadius: theme.axiom.border.radius.md,
  display: "flex",
}));
```
