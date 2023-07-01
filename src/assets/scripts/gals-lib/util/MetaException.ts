import { AnalysisError } from '../analyser/AnalysisError'

enum Mode {
  DEFINITION,
  TOKEN,
  GRAMMAR
}

export class MetaException extends Error {
  static readonly Mode = Mode

  private _mode: Mode
  private _index: number

  constructor(mode: Mode, index: number, cause: AnalysisError) {
    super(cause.message) // TODO Verify real equivalency

    this._index = index
    this._mode = mode

    Object.setPrototypeOf(this, MetaException.prototype) // TODO Verify real equivalency
  }
}
