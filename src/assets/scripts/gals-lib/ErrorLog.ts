import { List } from './DataStructures'
import { AnalysisError } from './analyser/AnalysisError'

export class ErrorLog {
  private static _instance: ErrorLog

  private errorList: List<AnalysisError>

  private constructor() {
    this.errorList = new List()
  }

  public static get Instance() {
    return this._instance || (this._instance = new this())
  }

  public static get errorList(): List<Error> {
    return this.errorList
  }

  add(error: AnalysisError) {
    this.errorList.add(error)
  }
}

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
