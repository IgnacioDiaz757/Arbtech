import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let name = "";
    let email = "";
    let message = "";

    if (contentType.includes("application/json")) {
      const body = await req.json();
      name = (body.name || "").toString();
      email = (body.email || "").toString();
      message = (body.message || "").toString();
    } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      name = (form.get("name") || "").toString();
      email = (form.get("email") || "").toString();
      message = (form.get("message") || "").toString();
    }

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Campos requeridos" }, { status: 400 });
    }

    // Placeholder: Aquí podrían integrar Resend/EmailJS/DB/CRM
    console.log("CONTACT_FORM", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Error inesperado" }, { status: 500 });
  }
}


