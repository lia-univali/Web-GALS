import { AnalysisError } from './AnalysisError'

export class LexicalError extends AnalysisError {
  constructor(message: string, position?: number) {
    if (position == undefined) {
      super(message)
    } else {
      super(message, position)
    }
  }
}

export class SemanticError extends AnalysisError {
  constructor(message: string, position?: number) {
    if (position == undefined) {
      super(message)
    } else {
      super(message, position)
    }
  }
}

export class SyntacticError extends AnalysisError {
  constructor(message: string, position?: number) {
    if (position == undefined) {
      super(message)
    } else {
      super(message, position)
    }
  }
}

export class NotLLException extends Error
{	
	constructor(string: string)
	{
		super(string);
	}
}