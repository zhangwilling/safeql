import { Literal } from "leoric/src/types/common";
import { Bone } from 'leoric'

// leoric 暂时不支持传入返回泛型，我这里魔改一下ts
interface IBone {
  // 这里官方原版,暂且改为 _query
  _query<T extends typeof Bone>(sql: string, values?: Array<Literal>, options?: RawQueryOptions & { model?: T }): Promise<{ rows: T extends typeof Bone ? InstanceType<T>[] : Record<string, Literal>[], fields?: Record<string, Literal>[], affectedRows?: number }>;
  // 可以返回 Array<T> 改善后的 query
  query<T extends typeof Bone | Record<string, Literal>>(sql: any, values?: Array<Literal>, options?: RawQueryOptions & { model?: T }): Promise<{ rows: T extends typeof Bone ? InstanceType<T>[] : Array<T>, fields?: Record<string, Literal>[], affectedRows?: number }>;
}
