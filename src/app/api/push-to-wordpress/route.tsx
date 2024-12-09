import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, description } = await req.json();

  try {
    const response = await fetch("https://2b8f38849c.nxcli.io/wp-json/wp/v2/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.WORDPRESS_TOKEN}`,
      },
      body: JSON.stringify({
        title,
        content: `<h1>${title}</h1><p>${description}</p>`,
        status: "publish",
      }),
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Failed to push data" }, { status: 500 });
  }
}
