import type { Vendor } from "../types/vendor";
import { mockFetch } from "./mockApi";
import vendors from "../data/vendors.json";

export async function getVendors(): Promise<Vendor[]> {
  return mockFetch(vendors as Vendor[]);
}

export async function getVendorById(id: string): Promise<Vendor | null> {
  const list = (vendors as Vendor[]).find((v) => v.id === id) ?? null;
  return mockFetch(list);
}
