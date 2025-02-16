import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import yaml from "js-yaml";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const config = await prisma.configuration.findUnique({
      where: { id },
    });

    if (!config) {
      return NextResponse.json(
        { error: "Configuration not found" },
        { status: 404 }
      );
    }

    // Convert the configuration object to a YAML string.
    const yamlString = yaml.dump(config);

    // Return the YAML string as a file download.
    return new NextResponse(yamlString, {
      headers: {
        "Content-Type": "text/yaml",
        "Content-Disposition": `attachment; filename=configuration-${id}.yaml`,
      },
    });
  } catch (error) {
    console.error("Error getting configuration:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
