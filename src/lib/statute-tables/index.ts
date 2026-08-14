/**
 * Audited statute tables, one file per statute, merged into STATUTES in
 * src/lib/statutes.ts. Every table here passed the independent build-then-audit
 * workflow; FAILed tables never land in this directory.
 */
import type { StatuteTable } from "../statutes";
import { TABLE_409_920 } from "./fs-409-920";
import { TABLE_741_2901 } from "./fs-741-2901";
import { TABLE_775_21 } from "./fs-775-21";
import { TABLE_776_08 } from "./fs-776-08";
import { TABLE_782_04 } from "./fs-782-04";
import { TABLE_782_07 } from "./fs-782-07";
import { TABLE_784_041 } from "./fs-784-041";
import { TABLE_784_045 } from "./fs-784-045";
import { TABLE_784_07 } from "./fs-784-07";
import { TABLE_794_011 } from "./fs-794-011";
import { TABLE_827_071 } from "./fs-827-071";
import { TABLE_893_135 } from "./fs-893-135";
import { TABLE_896_101 } from "./fs-896-101";
import { TABLE_921_0023 } from "./fs-921-0023";
import { TABLE_943_0584 } from "./fs-943-0584";
import { TABLE_943_0585 } from "./fs-943-0585";
import { TABLE_943_059 } from "./fs-943-059";

export const VERIFIED_TABLES: Record<string, StatuteTable> = {
  "409.920": TABLE_409_920,
  "741.2901": TABLE_741_2901,
  "775.21": TABLE_775_21,
  "776.08": TABLE_776_08,
  "782.04": TABLE_782_04,
  "782.07": TABLE_782_07,
  "784.041": TABLE_784_041,
  "784.045": TABLE_784_045,
  "784.07": TABLE_784_07,
  "794.011": TABLE_794_011,
  "827.071": TABLE_827_071,
  "893.135": TABLE_893_135,
  "896.101": TABLE_896_101,
  "921.0023": TABLE_921_0023,
  "943.0584": TABLE_943_0584,
  "943.0585": TABLE_943_0585,
  "943.059": TABLE_943_059,
};
