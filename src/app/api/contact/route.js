import { NextResponse } from "next/server";
/** CONTACT FORM DELIVERY INTEGRATION POINT. Replace after delivery credentials are supplied. */
export async function POST() { return NextResponse.json({ error: "Contact form delivery has not been configured." }, { status: 501 }); }
