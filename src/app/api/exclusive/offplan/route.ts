import strapi, { populate } from "@/utils/strapi";
import { NextResponse } from "next/server";
export async function GET() {
  const buy_properties = await strapi.find("off-plans", {
    populate,
    filters: {
      Exclusive: true,
    },
  });
  return NextResponse.json(buy_properties.data);
}
