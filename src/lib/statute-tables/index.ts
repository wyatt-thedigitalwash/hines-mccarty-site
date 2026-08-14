/**
 * Audited statute tables, one file per statute, merged into STATUTES in
 * src/lib/statutes.ts. Every table here passed the independent build-then-audit
 * workflow; FAILed tables never land in this directory.
 */
import type { StatuteTable } from "../statutes.ts";
import { TABLE_1028A } from "./usc-1028A.ts";
import { TABLE_1341 } from "./usc-1341.ts";
import { TABLE_1347 } from "./usc-1347.ts";
import { TABLE_1348 } from "./usc-1348.ts";
import { TABLE_1349 } from "./usc-1349.ts";
import { TABLE_1956 } from "./usc-1956.ts";
import { TABLE_20 } from "./usc-20.ts";
import { TABLE_212_15 } from "./fs-212-15.ts";
import { TABLE_213_29 } from "./fs-213-29.ts";
import { TABLE_2252 } from "./usc-2252.ts";
import { TABLE_2252A } from "./usc-2252A.ts";
import { TABLE_24 } from "./usc-24.ts";
import { TABLE_316_193 } from "./fs-316-193.ts";
import { TABLE_316_1939 } from "./fs-316-1939.ts";
import { TABLE_322_2615 } from "./fs-322-2615.ts";
import { TABLE_322_271 } from "./fs-322-271.ts";
import { TABLE_3553 } from "./usc-3553.ts";
import { TABLE_371 } from "./usc-371.ts";
import { TABLE_409_920 } from "./fs-409-920.ts";
import { TABLE_517_021 } from "./fs-517-021.ts";
import { TABLE_517_301 } from "./fs-517-301.ts";
import { TABLE_517_302 } from "./fs-517-302.ts";
import { TABLE_636 } from "./usc-636.ts";
import { TABLE_7201 } from "./usc-7201.ts";
import { TABLE_741_28 } from "./fs-741-28.ts";
import { TABLE_741_2901 } from "./fs-741-2901.ts";
import { TABLE_775_082 } from "./fs-775-082.ts";
import { TABLE_775_083 } from "./fs-775-083.ts";
import { TABLE_775_084 } from "./fs-775-084.ts";
import { TABLE_775_087 } from "./fs-775-087.ts";
import { TABLE_775_21 } from "./fs-775-21.ts";
import { TABLE_776_032 } from "./fs-776-032.ts";
import { TABLE_776_08 } from "./fs-776-08.ts";
import { TABLE_782_04 } from "./fs-782-04.ts";
import { TABLE_782_07 } from "./fs-782-07.ts";
import { TABLE_782_071 } from "./fs-782-071.ts";
import { TABLE_784_03 } from "./fs-784-03.ts";
import { TABLE_784_041 } from "./fs-784-041.ts";
import { TABLE_784_045 } from "./fs-784-045.ts";
import { TABLE_784_07 } from "./fs-784-07.ts";
import { TABLE_784_08 } from "./fs-784-08.ts";
import { TABLE_790_23 } from "./fs-790-23.ts";
import { TABLE_794_005 } from "./fs-794-005.ts";
import { TABLE_794_011 } from "./fs-794-011.ts";
import { TABLE_794_0115 } from "./fs-794-0115.ts";
import { TABLE_800_04 } from "./fs-800-04.ts";
import { TABLE_812_014 } from "./fs-812-014.ts";
import { TABLE_815_04 } from "./fs-815-04.ts";
import { TABLE_815_06 } from "./fs-815-06.ts";
import { TABLE_817_034 } from "./fs-817-034.ts";
import { TABLE_817_568 } from "./fs-817-568.ts";
import { TABLE_827_071 } from "./fs-827-071.ts";
import { TABLE_841 } from "./usc-841.ts";
import { TABLE_846 } from "./usc-846.ts";
import { TABLE_847_0135 } from "./fs-847-0135.ts";
import { TABLE_893_03 } from "./fs-893-03.ts";
import { TABLE_893_13 } from "./fs-893-13.ts";
import { TABLE_893_135 } from "./fs-893-135.ts";
import { TABLE_893_147 } from "./fs-893-147.ts";
import { TABLE_896_101 } from "./fs-896-101.ts";
import { TABLE_896_104 } from "./fs-896-104.ts";
import { TABLE_921_0022 } from "./fs-921-0022.ts";
import { TABLE_921_0023 } from "./fs-921-0023.ts";
import { TABLE_921_0024 } from "./fs-921-0024.ts";
import { TABLE_921_141 } from "./fs-921-141.ts";
import { TABLE_924 } from "./usc-924.ts";
import { TABLE_943_0435 } from "./fs-943-0435.ts";
import { TABLE_943_0584 } from "./fs-943-0584.ts";
import { TABLE_943_0585 } from "./fs-943-0585.ts";
import { TABLE_943_059 } from "./fs-943-059.ts";

export const VERIFIED_TABLES: Record<string, StatuteTable> = {
  "1028A": TABLE_1028A,
  "1341": TABLE_1341,
  "1347": TABLE_1347,
  "1348": TABLE_1348,
  "1349": TABLE_1349,
  "1956": TABLE_1956,
  "20": TABLE_20,
  "212.15": TABLE_212_15,
  "213.29": TABLE_213_29,
  "2252": TABLE_2252,
  "2252A": TABLE_2252A,
  "24": TABLE_24,
  "316.193": TABLE_316_193,
  "316.1939": TABLE_316_1939,
  "322.2615": TABLE_322_2615,
  "322.271": TABLE_322_271,
  "3553": TABLE_3553,
  "371": TABLE_371,
  "409.920": TABLE_409_920,
  "517.021": TABLE_517_021,
  "517.301": TABLE_517_301,
  "517.302": TABLE_517_302,
  "636": TABLE_636,
  "7201": TABLE_7201,
  "741.28": TABLE_741_28,
  "741.2901": TABLE_741_2901,
  "775.082": TABLE_775_082,
  "775.083": TABLE_775_083,
  "775.084": TABLE_775_084,
  "775.087": TABLE_775_087,
  "775.21": TABLE_775_21,
  "776.032": TABLE_776_032,
  "776.08": TABLE_776_08,
  "782.04": TABLE_782_04,
  "782.07": TABLE_782_07,
  "782.071": TABLE_782_071,
  "784.03": TABLE_784_03,
  "784.041": TABLE_784_041,
  "784.045": TABLE_784_045,
  "784.07": TABLE_784_07,
  "784.08": TABLE_784_08,
  "790.23": TABLE_790_23,
  "794.005": TABLE_794_005,
  "794.011": TABLE_794_011,
  "794.0115": TABLE_794_0115,
  "800.04": TABLE_800_04,
  "812.014": TABLE_812_014,
  "815.04": TABLE_815_04,
  "815.06": TABLE_815_06,
  "817.034": TABLE_817_034,
  "817.568": TABLE_817_568,
  "827.071": TABLE_827_071,
  "841": TABLE_841,
  "846": TABLE_846,
  "847.0135": TABLE_847_0135,
  "893.03": TABLE_893_03,
  "893.13": TABLE_893_13,
  "893.135": TABLE_893_135,
  "893.147": TABLE_893_147,
  "896.101": TABLE_896_101,
  "896.104": TABLE_896_104,
  "921.0022": TABLE_921_0022,
  "921.0023": TABLE_921_0023,
  "921.0024": TABLE_921_0024,
  "921.141": TABLE_921_141,
  "924": TABLE_924,
  "943.0435": TABLE_943_0435,
  "943.0584": TABLE_943_0584,
  "943.0585": TABLE_943_0585,
  "943.059": TABLE_943_059,
};
