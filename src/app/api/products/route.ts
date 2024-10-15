import mockData from "@/lib/mock/products.json";

export async function GET() {
  return Response.json(mockData);
}
