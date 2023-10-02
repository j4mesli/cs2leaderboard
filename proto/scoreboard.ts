import Long from "long";
import * as _m0 from "protobufjs/minimal";
 
export const protobufPackage = "";

export interface ScoreLeaderboardData {
  questId: number;
  score: number;
  accountentries: ScoreLeaderboardData_AccountEntries[];
  matchentries: ScoreLeaderboardData_Entry[];
  leaderboardName: string;
}

export interface ScoreLeaderboardData_Entry {
  tag: number;
  val: number;
}

export interface ScoreLeaderboardData_AccountEntries {
  accountid: number;
  entries: ScoreLeaderboardData_Entry[];
}

function createBaseScoreLeaderboardData(): ScoreLeaderboardData {
  return { questId: 0, score: 0, accountentries: [], matchentries: [], leaderboardName: "" };
}

export const ScoreLeaderboardData = {
  encode(message: ScoreLeaderboardData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questId !== 0) {
      writer.uint32(8).uint64(message.questId);
    }
    if (message.score !== 0) {
      writer.uint32(16).uint32(message.score);
    }
    for (const v of message.accountentries) {
      ScoreLeaderboardData_AccountEntries.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.matchentries) {
      ScoreLeaderboardData_Entry.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.leaderboardName !== "") {
      writer.uint32(50).string(message.leaderboardName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScoreLeaderboardData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScoreLeaderboardData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.questId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.score = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.accountentries.push(ScoreLeaderboardData_AccountEntries.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.matchentries.push(ScoreLeaderboardData_Entry.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.leaderboardName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScoreLeaderboardData {
    return {
      questId: isSet(object.questId) ? globalThis.Number(object.questId) : 0,
      score: isSet(object.score) ? globalThis.Number(object.score) : 0,
      accountentries: globalThis.Array.isArray(object?.accountentries)
        ? object.accountentries.map((e: any) => ScoreLeaderboardData_AccountEntries.fromJSON(e))
        : [],
      matchentries: globalThis.Array.isArray(object?.matchentries)
        ? object.matchentries.map((e: any) => ScoreLeaderboardData_Entry.fromJSON(e))
        : [],
      leaderboardName: isSet(object.leaderboardName) ? globalThis.String(object.leaderboardName) : "",
    };
  },

  toJSON(message: ScoreLeaderboardData): unknown {
    const obj: any = {};
    if (message.questId !== 0) {
      obj.questId = Math.round(message.questId);
    }
    if (message.score !== 0) {
      obj.score = Math.round(message.score);
    }
    if (message.accountentries?.length) {
      obj.accountentries = message.accountentries.map((e) => ScoreLeaderboardData_AccountEntries.toJSON(e));
    }
    if (message.matchentries?.length) {
      obj.matchentries = message.matchentries.map((e) => ScoreLeaderboardData_Entry.toJSON(e));
    }
    if (message.leaderboardName !== "") {
      obj.leaderboardName = message.leaderboardName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScoreLeaderboardData>, I>>(base?: I): ScoreLeaderboardData {
    return ScoreLeaderboardData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScoreLeaderboardData>, I>>(object: I): ScoreLeaderboardData {
    const message = createBaseScoreLeaderboardData();
    message.questId = object.questId ?? 0;
    message.score = object.score ?? 0;
    message.accountentries = object.accountentries?.map((e) => ScoreLeaderboardData_AccountEntries.fromPartial(e)) ||
      [];
    message.matchentries = object.matchentries?.map((e) => ScoreLeaderboardData_Entry.fromPartial(e)) || [];
    message.leaderboardName = object.leaderboardName ?? "";
    return message;
  },
};

function createBaseScoreLeaderboardData_Entry(): ScoreLeaderboardData_Entry {
  return { tag: 0, val: 0 };
}

export const ScoreLeaderboardData_Entry = {
  encode(message: ScoreLeaderboardData_Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== 0) {
      writer.uint32(8).uint32(message.tag);
    }
    if (message.val !== 0) {
      writer.uint32(16).uint32(message.val);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScoreLeaderboardData_Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScoreLeaderboardData_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.tag = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.val = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScoreLeaderboardData_Entry {
    return {
      tag: isSet(object.tag) ? globalThis.Number(object.tag) : 0,
      val: isSet(object.val) ? globalThis.Number(object.val) : 0,
    };
  },

  toJSON(message: ScoreLeaderboardData_Entry): unknown {
    const obj: any = {};
    if (message.tag !== 0) {
      obj.tag = Math.round(message.tag);
    }
    if (message.val !== 0) {
      obj.val = Math.round(message.val);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScoreLeaderboardData_Entry>, I>>(base?: I): ScoreLeaderboardData_Entry {
    return ScoreLeaderboardData_Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScoreLeaderboardData_Entry>, I>>(object: I): ScoreLeaderboardData_Entry {
    const message = createBaseScoreLeaderboardData_Entry();
    message.tag = object.tag ?? 0;
    message.val = object.val ?? 0;
    return message;
  },
};

function createBaseScoreLeaderboardData_AccountEntries(): ScoreLeaderboardData_AccountEntries {
  return { accountid: 0, entries: [] };
}

export const ScoreLeaderboardData_AccountEntries = {
  encode(message: ScoreLeaderboardData_AccountEntries, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    for (const v of message.entries) {
      ScoreLeaderboardData_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScoreLeaderboardData_AccountEntries {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScoreLeaderboardData_AccountEntries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountid = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entries.push(ScoreLeaderboardData_Entry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScoreLeaderboardData_AccountEntries {
    return {
      accountid: isSet(object.accountid) ? globalThis.Number(object.accountid) : 0,
      entries: globalThis.Array.isArray(object?.entries)
        ? object.entries.map((e: any) => ScoreLeaderboardData_Entry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ScoreLeaderboardData_AccountEntries): unknown {
    const obj: any = {};
    if (message.accountid !== 0) {
      obj.accountid = Math.round(message.accountid);
    }
    if (message.entries?.length) {
      obj.entries = message.entries.map((e) => ScoreLeaderboardData_Entry.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScoreLeaderboardData_AccountEntries>, I>>(
    base?: I,
  ): ScoreLeaderboardData_AccountEntries {
    return ScoreLeaderboardData_AccountEntries.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScoreLeaderboardData_AccountEntries>, I>>(
    object: I,
  ): ScoreLeaderboardData_AccountEntries {
    const message = createBaseScoreLeaderboardData_AccountEntries();
    message.accountid = object.accountid ?? 0;
    message.entries = object.entries?.map((e) => ScoreLeaderboardData_Entry.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
