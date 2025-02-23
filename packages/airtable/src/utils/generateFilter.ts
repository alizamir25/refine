import type { CrudFilters } from "@refinedev/core";
import { compile } from "@qualifyze/airtable-formulator";
import { generateFilterFormula } from "./generateFilterFormula";

export const generateFilter = (filters?: CrudFilters): string | undefined => {
  if (filters) {
    return compile(["AND", ...generateFilterFormula(filters)]);
  }

  return undefined;
};
