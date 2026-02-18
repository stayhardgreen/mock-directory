export type VendorStatus = "active" | "inactive";

export interface VendorContact {
  name: string;
  email: string;
  phone: string;
}

export interface Vendor {
  id: string;
  name: string;
  status: VendorStatus;
  rating: number;
  leadTimeDaysTypical: number;
  country: string;
  city: string;
  lastOrderDate: string | null;
  tags: string[];
  contact: VendorContact;
}
