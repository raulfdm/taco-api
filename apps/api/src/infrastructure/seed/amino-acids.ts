import path from "node:path";

import * as url from "node:url";
import csvtojson from "csvtojson/v2";
import { z } from "zod";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const aminoAcidsSchema = z.array(
  z.object({
    foodId: z.string().transform((id) => Number(id)),
    tryptophan: z.string().transform((id) => Number(id)),
    threonine: z.string().transform((id) => Number(id)),
    isoleucine: z.string().transform((id) => Number(id)),
    leucine: z.string().transform((id) => Number(id)),
    lysine: z.string().transform((id) => Number(id)),
    methionine: z.string().transform((id) => Number(id)),
    cystine: z.string().transform((id) => Number(id)),
    phenylalanine: z.string().transform((id) => Number(id)),
    tyrosine: z.string().transform((id) => Number(id)),
    valine: z.string().transform((id) => Number(id)),
    arginine: z.string().transform((id) => Number(id)),
    histidine: z.string().transform((id) => Number(id)),
    alanine: z.string().transform((id) => Number(id)),
    asparticAcid: z.string().transform((id) => Number(id)),
    glutamicAcid: z.string().transform((id) => Number(id)),
    glycine: z.string().transform((id) => Number(id)),
    proline: z.string().transform((id) => Number(id)),
    serine: z.string().transform((id) => Number(id)),
  }),
);

export type AminoAcid = z.infer<typeof aminoAcidsSchema>[number];

export type AminoAcidMap = Map<number, Omit<AminoAcid, "foodId">>;

export async function getAminoAcidsMap(): Promise<AminoAcidMap> {
  const aminoAcidsJson = await csvtojson().fromFile(
    path.resolve(__dirname, "../../../references/csv/amino-acids.csv"),
  );

  const aminoAcids = aminoAcidsSchema.parse(aminoAcidsJson);

  const aminoAcidsMap: AminoAcidMap = new Map();

  for (const aminoAcid of aminoAcids) {
    const { foodId, ...rest } = aminoAcid;
    aminoAcidsMap.set(aminoAcid.foodId, rest);
  }

  return aminoAcidsMap;
}
