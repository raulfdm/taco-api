import path from "node:path";

import * as url from "url";
import csvtojson from "csvtojson/v2";
import { z } from "zod";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const fattyAcidsSchema = z.array(
  z
    .object({
      foodId: z.string().transform((id) => Number(id)),
      saturated: z.string().transform((id) => Number(id)),
      monounsaturated: z.string().transform((id) => Number(id)),
      polyunsaturated: z.string().transform((id) => Number(id)),
      "12:0": z.string().transform((id) => (id ? Number(id) : null)),
      "14:0": z.string().transform((id) => (id ? Number(id) : null)),
      "16:0": z.string().transform((id) => (id ? Number(id) : null)),
      "18:0": z.string().transform((id) => (id ? Number(id) : null)),
      "20:0": z.string().transform((id) => (id ? Number(id) : null)),
      "22:0": z.string().transform((id) => (id ? Number(id) : null)),
      "24:0": z.string().transform((id) => (id ? Number(id) : null)),
      "14:1": z.string().transform((id) => (id ? Number(id) : null)),
      "16:1": z.string().transform((id) => (id ? Number(id) : null)),
      "18:1": z.string().transform((id) => (id ? Number(id) : null)),
      "20:1": z.string().transform((id) => (id ? Number(id) : null)),
      "18:2n6": z.string().transform((id) => (id ? Number(id) : null)),
      "18:3n3": z.string().transform((id) => (id ? Number(id) : null)),
      "20:4": z.string().transform((id) => (id ? Number(id) : null)),
      "20:5": z.string().transform((id) => (id ? Number(id) : null)),
      "22:5": z.string().transform((id) => (id ? Number(id) : null)),
      "22:6": z.string().transform((id) => (id ? Number(id) : null)),
      "18:1t": z.string().transform((id) => (id ? Number(id) : null)),
      "18:2t": z.string().transform((id) => (id ? Number(id) : null)),
    })
    .transform((input) => {
      return {
        foodId: input.foodId,
        saturated: input.saturated,
        monounsaturated: input.monounsaturated,
        polyunsaturated: input.polyunsaturated,
        twelveZero: input["12:0"],
        fourteenZero: input["14:0"],
        fourteenOne: input["14:1"],
        sixteenZero: input["16:0"],
        sixteenOne: input["16:1"],
        eighteenZero: input["18:0"],
        eighteenOne: input["18:1"],
        eighteenOneT: input["18:1t"],
        eighteenTwoN6: input["18:2n6"],
        eighteenTwoT: input["18:2t"],
        eighteenThreeN3: input["18:3n3"],
        twentyZero: input["20:0"],
        twentyOne: input["20:1"],
        twentyFour: input["20:4"],
        twentyFive: input["20:5"],
        twentyTwoZero: input["22:0"],
        twentyTwoFive: input["22:5"],
        twentyTwoSix: input["22:6"],
        twentyFourZero: input["24:0"],
      };
    }),
);

export type FattyAcid = z.infer<typeof fattyAcidsSchema>[number];

export type FattyAcidMap = Map<number, Omit<FattyAcid, "foodId">>;

export async function getFattyAcidsMap(): Promise<FattyAcidMap> {
  const fattyAcidsJson = await csvtojson().fromFile(
    path.resolve(__dirname, "../../../references/csv/fatty-acids.csv"),
  );

  const fattyAcids = fattyAcidsSchema.parse(fattyAcidsJson);

  const fattyAcidsMap: FattyAcidMap = new Map();

  for (const fattyAcid of fattyAcids) {
    const { foodId, ...rest } = fattyAcid;
    fattyAcidsMap.set(fattyAcid.foodId, rest);
  }

  return fattyAcidsMap;
}
