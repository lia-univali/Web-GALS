import { AnalysisError } from '../analyser/AnalysisError'

enum Mode {
  DEFINITION,
  TOKEN,
  NON_TERMINAL,
  GRAMMAR
}

export class MetaException extends Error {
  static readonly Mode = Mode

  public _mode: Mode;
  public _index: number;
  public _cause: AnalysisError;

  constructor(mode: Mode, index: number, cause: AnalysisError) {
    super(cause.message) // TODO Verify real equivalency
    this._cause = cause;
    this._index = index
    this._mode = mode

    Object.setPrototypeOf(this, MetaException.prototype) // TODO Verify real equivalency
  }
}
