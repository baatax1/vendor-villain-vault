
export interface Vendor {
  id: string;
  name: string;
  cost: string;  // Display text for cost amount
  costNumber: number; // Numeric value for sorting
  details?: string;
  minSpend?: boolean;
  enterpriseOnly?: boolean;
  updatedAt?: string;
  source?: string;
}
