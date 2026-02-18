export type PartStatus = "active" | "inactive";

export interface Part {
  id: string;
  vendorId: string;
  sku: string;
  name: string;
  category: string;
  status: PartStatus;
  unitCost: number | null;
  currency: string;
  leadTimeDays: number | null;
  inStock: boolean;
  updatedAt: string;
  tags: string[];
}
