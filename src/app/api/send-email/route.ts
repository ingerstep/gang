import { FeedBackTMP } from "@src/emailtmp/FeedbackTMP";
import { sendEmail } from "@utils/email";
import { NextResponse, type NextRequest } from "next/server"

export async function POST(request: NextRequest) {
    const body = await request.json()
    const { subject } = body
    const to = 'welcome@mygang.ru';

    try {
        await sendEmail({
            to,
            subject: 'Сотрудничество',
            html: FeedBackTMP(body),
        });
        return NextResponse.json({ message: "Success!", status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "Failed!", status: 500 })
    }
}