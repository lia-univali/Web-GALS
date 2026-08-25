import type { Token } from '../analyser/Token'

export interface BasicScanner {
  setInput(text: string): void
  nextToken(): Token | null // Adicionar lexical exception
}

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
