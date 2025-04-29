
import { Vendor } from "@/types";

export const vendors: Vendor[] = [
  {
    id: "cloudinary",
    name: "Cloudinary",
    cost: "$100,000", 
    costNumber: 100000,
    details: "BAA only available with enterprise plan",
    enterpriseOnly: true,
    updatedAt: "2025-04-29"
  },
  {
    id: "langgraph",
    name: "LangGraph",
    cost: "$17,000",
    costNumber: 17000,
    updatedAt: "2025-04-29"
  },
  {
    id: "twilio",
    name: "Twilio",
    cost: "$20,000",
    costNumber: 20000,
    updatedAt: "2025-04-29"
  },
  {
    id: "fly",
    name: "Fly.io",
    cost: "$1,200",
    costNumber: 1200,
    updatedAt: "2025-04-29"
  },
  {
    id: "vercel",
    name: "Vercel",
    cost: "$45,000",
    costNumber: 45000,
    details: "Included in enterprise plan only",
    enterpriseOnly: true,
    updatedAt: "2025-04-29"
  },
  {
    id: "auth0",
    name: "Auth0",
    cost: "$29,840/year",
    costNumber: 29840,
    updatedAt: "2025-04-29"
  },
  {
    id: "fullstory",
    name: "FullStory",
    cost: "$15,000/year",
    costNumber: 15000,
    details: "Minimum spend required",
    minSpend: true,
    updatedAt: "2025-04-29"
  },
  {
    id: "together",
    name: "together.ai",
    cost: "$10,000",
    costNumber: 10000,
    details: "Minimum spend required",
    minSpend: true,
    updatedAt: "2025-04-29"
  }
];
