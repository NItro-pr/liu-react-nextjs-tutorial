"use server";

import { readFile } from "fs/promises";
import { join } from "path";

export async function getData() {
  try {
    const filePath = join(process.cwd(), "data", "ghtz_sample.tsv");
    const data = await readFile(filePath, "utf-8");
    const lines = data.split("\n").map((line) => line.trim()).filter(Boolean);
    const headers = lines[0].split("\t").map((header) => header.trim());
    const allLines = lines.slice(1).map((line) => {
      const values = line.split("\t").map((value) => value.trim());
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index] || "";
        return obj;
      }, {} as Record<string, string>);
    });
    return allLines;
  } catch (error) {
    console.error("Error reading tsv file:", error);
    return [];
  }
}