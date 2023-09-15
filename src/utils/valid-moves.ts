export const validateStraightLine = (intPos: string, finalPos: string) => {
  const [intFile, intRank] = intPos.split("");
  const [finalFile, finalRank] = finalPos.split("");
  return {
    isSameFile: intFile === finalFile,
    isSameRank: intRank === finalRank,
  };
};

const File: { [key: string]: number } = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8
};

export const validateDiagonal = (intPos: string, finalPos: string) => {
  const [intFile, intRank] = intPos.split("");
  const [finalFile, finalRank] = finalPos.split("");
  return (
    Math.abs((intRank as any) - Number(finalRank)) ===
    Math.abs(File[intFile] - File[finalFile])
  );
};

export const validateLShape = (intPos: string, finalPos: string) => {
  const [intFile, intRank] = intPos.split("");
  const [finalFile, finalRank] = finalPos.split("");

  const a = Number(intRank) + 2 === Number(finalRank)  && File[intFile] + 1 === File[finalFile]
  const b = Number(intRank) + 2 === Number(finalRank)  && File[intFile] - 1 === File[finalFile]
  const c = Number(intRank) - 2 === Number(finalRank)  && File[intFile] + 1 === File[finalFile]
  const d = Number(intRank) - 2 === Number(finalRank)  && File[intFile] - 1 === File[finalFile]
  const e = Number(intRank) + 1 === Number(finalRank)  && File[intFile] + 2 === File[finalFile]
  const f = Number(intRank) + 1 === Number(finalRank)  && File[intFile] - 2 === File[finalFile]
  const g = Number(intRank) - 1 === Number(finalRank)  && File[intFile] + 2 === File[finalFile]
  const h = Number(intRank) - 1 === Number(finalRank)  && File[intFile] - 2 === File[finalFile]
  console.log(a, b, c, d, e, f, g, h, "ANIRUDH")
  return a || b || c || d || e || f || g || h
};

