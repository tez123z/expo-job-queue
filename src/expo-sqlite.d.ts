declare module "expo-sqlite" {
  export interface SQLiteOpenOptions {
    name?: string
    [key: string]: any
  }

  export interface SQLiteRunResult {
    changes: number
    lastInsertRowId: number
  }

  export class SQLiteDatabase {
    constructor(databasePath: string, options: SQLiteOpenOptions)
    execAsync(source: string): Promise<void>
    getAllAsync<T>(source: string, ...params: any[]): Promise<T[]>
    runAsync(source: string, ...params: any[]): Promise<SQLiteRunResult>
    closeAsync(): Promise<void>
  }

  export function openDatabaseAsync(
    databaseName: string,
    options?: SQLiteOpenOptions,
    directory?: string,
  ): Promise<SQLiteDatabase>
}
