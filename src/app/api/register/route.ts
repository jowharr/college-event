import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, studentId, department, year, eventTitle } = body;

        // Validation
        if (!name || !email || !studentId || !eventTitle) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        // Check for credentials
        if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
            console.error("Missing Google Sheets credentials");
            return NextResponse.json(
                { message: "Server configuration error: Missing Google Credentials" },
                { status: 500 }
            );
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            },
            scopes: [
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.file",
                "https://www.googleapis.com/auth/spreadsheets",
            ],
        });

        const sheets = google.sheets({ auth, version: "v4" });

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "A1", // Appends to the first sheet
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [
                        new Date().toISOString(), // Timestamp
                        eventTitle,
                        name,
                        email,
                        studentId,
                        department,
                        year
                    ]
                ],
            },
        });

        return NextResponse.json({ message: "Registration successful" }, { status: 200 });

    } catch (error: any) {
        console.error("Registration Error:", error);
        return NextResponse.json({ message: error.message || "Internal Server Error" }, { status: 500 });
    }
}
