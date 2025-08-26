export class EcomException extends Error {
  private readonly _errorMessage: string;
  private readonly _errorCode: number;
  constructor(errorMessage: string, errorCode: number) {
    super(errorMessage);
    this._errorMessage = errorMessage;
    this._errorCode = errorCode;
  }
}
