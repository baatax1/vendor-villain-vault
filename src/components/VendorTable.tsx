
import { useState } from "react";
import { Vendor } from "@/types";
import { vendors } from "@/data/vendors";
import { Flame, Skull, Zap } from "lucide-react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type SortField = "name" | "costNumber";

const VendorTable = () => {
  const [sortField, setSortField] = useState<SortField>("costNumber");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const getSortedVendors = () => {
    return [...vendors].sort((a, b) => {
      if (sortField === "name") {
        return sortDirection === "asc" 
          ? a.name.localeCompare(b.name) 
          : b.name.localeCompare(a.name);
      } else {
        return sortDirection === "asc" 
          ? a.costNumber - b.costNumber 
          : b.costNumber - a.costNumber;
      }
    });
  };

  const getCostIcon = (vendor: Vendor) => {
    if (vendor.costNumber >= 50000) {
      return <Skull className="inline mr-1 text-hellfire-500" size={18} />;
    } else if (vendor.costNumber >= 15000) {
      return <Flame className="inline mr-1 text-hellfire-500" size={18} />;
    } else {
      return <Zap className="inline mr-1 text-hellfire-400" size={18} />;
    }
  };

  return (
    <div className="px-4 mb-12">
      <div className="max-w-6xl mx-auto flame-bg rounded-lg p-4 overflow-hidden fire-shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-hellfire-200 heading-font">The Shame List</h2>
          
          <div className="flex gap-2">
            <Button 
              variant="outline"
              size="sm"
              onClick={() => handleSort("name")}
              className={`border-hellfire-600 hover:bg-hellfire-900/40 ${
                sortField === "name" ? "bg-hellfire-900/60 text-hellfire-200" : "bg-transparent text-gray-300"
              }`}
            >
              Name {sortField === "name" && (sortDirection === "asc" ? "↑" : "↓")}
            </Button>
            
            <Button 
              variant="outline"
              size="sm"
              onClick={() => handleSort("costNumber")}
              className={`border-hellfire-600 hover:bg-hellfire-900/40 ${
                sortField === "costNumber" ? "bg-hellfire-900/60 text-hellfire-200" : "bg-transparent text-gray-300"
              }`}
            >
              Cost {sortField === "costNumber" && (sortDirection === "asc" ? "↑" : "↓")}
            </Button>
          </div>
        </div>
        
        <div className="rounded-md border border-hellfire-900/60 overflow-hidden">
          <Table>
            <TableHeader className="bg-brimstone-900">
              <TableRow className="hover:bg-brimstone-900/80">
                <TableHead className="text-hellfire-200 font-semibold">Vendor</TableHead>
                <TableHead className="text-hellfire-200 font-semibold">BAA Cost</TableHead>
                <TableHead className="hidden md:table-cell text-hellfire-200 font-semibold">Details</TableHead>
                <TableHead className="hidden md:table-cell text-hellfire-200 font-semibold">Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {getSortedVendors().map((vendor) => (
                <TableRow 
                  key={vendor.id}
                  className="hover:bg-brimstone-800/40 border-b border-hellfire-900/40"
                >
                  <TableCell className="font-medium text-gray-200">
                    {vendor.name}
                  </TableCell>
                  <TableCell className="text-hellfire-200 font-semibold">
                    {getCostIcon(vendor)}{vendor.cost}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-gray-300">
                    {vendor.details || "-"}
                    {vendor.enterpriseOnly && <span className="ml-1 px-2 py-0.5 bg-hellfire-900/60 text-hellfire-200 text-xs rounded">Enterprise Only</span>}
                    {vendor.minSpend && <span className="ml-1 px-2 py-0.5 bg-hellfire-900/60 text-hellfire-200 text-xs rounded">Min Spend</span>}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-gray-400 text-sm">
                    {vendor.updatedAt}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default VendorTable;
