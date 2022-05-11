/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import type { RecurseDefaults } from 'cypress-recurse';

/// <reference types="cypress" />
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * @param name The name of the snapshots that will be generated
       * @param testThreshold @default 0 A number between 0 and 1 that represents the allowed percentage of pixels that can be different between the two snapshots
       * @param retryOptions @default { limit: 0, timeout: Cypress.config('defaultCommandTimeout'), delay: Cypress.config('defaultCommandTimeout') / 5 }
       * @example cy.compareSnapshot('empty-canvas', 0.1)
       */
      compareSnapshot(
        name: string,
        testThreshold?: number,
        retryOptions?: typeof RecurseDefaults,
      ): Chainable<Element>;

      /**
       * Hides the element by setting `visibility: hidden`.
       */
      hide(): Cypress.Chainable<Element>;
    }
  }
}

// Type definitions for react-syntax-highlighter 13.5
// Project: https://github.com/conorhastings/react-syntax-highlighter
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
//                 Guo Yunhe <https://github.com/guoyunhe>
//                 Anirban Sengupta <https://github.com/anirban09>
//                 Michael Yuen <https://github.com/michaelyuen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

type lineTagPropsFunction = (
  lineNumber: number,
) => React.HTMLProps<HTMLElement>;

declare module 'react-syntax-highlighter' {
  export interface SyntaxHighlighterProps {
    language?: string | undefined;
    style?: any;
    customStyle?: any;
    lineProps?: lineTagPropsFunction | React.HTMLProps<HTMLElement> | undefined;
    codeTagProps?: React.HTMLProps<HTMLElement> | undefined;
    useInlineStyles?: boolean | undefined;
    showLineNumbers?: boolean | undefined;
    startingLineNumber?: number | undefined;
    lineNumberStyle?: any;
    [spread: string]: any;
  }

  export { default } from 'react-syntax-highlighter/dist/esm/default-highlight';
  export { default as Prism } from 'react-syntax-highlighter/dist/esm/prism';
}

declare module 'react-syntax-highlighter/dist/esm/default-highlight' {
  import * as React from 'react';
  import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
  export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {
    static supportedLanguages: string[];
  }
}

declare module 'react-syntax-highlighter/dist/esm/prism' {
  import * as React from 'react';
  import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
  export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {
    static supportedLanguages: string[];
  }
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  export { default as coy } from 'react-syntax-highlighter/dist/esm/styles/prism/coy';
  export { default as darcula } from 'react-syntax-highlighter/dist/esm/styles/prism/darcula';
  export { default as vs } from 'react-syntax-highlighter/dist/esm/styles/prism/vs';
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/coy' {
  const style: any;
  export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/darcula' {
  const style: any;
  export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/vs' {
  const style: any;
  export default style;
}

declare module 'react-syntax-highlighter/dist/esm/languages/hljs/typescript' {
  const language: any;
  export default language;
}
declare module 'react-syntax-highlighter/dist/esm/languages/hljs/javascript' {
  const language: any;
  export default language;
}
declare module 'react-syntax-highlighter/dist/esm/languages/hljs/html' {
  const language: any;
  export default language;
}
declare module 'react-syntax-highlighter/dist/esm/languages/hljs/json' {
  const language: any;
  export default language;
}
