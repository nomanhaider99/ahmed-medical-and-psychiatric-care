import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport(
    {
        service: "gmail",
        auth: {
            user: process.env.GMAIL,
            pass: process.env.GOOGLE_APP_PASSWORD,
        },
        port: 465
    }
)

export const sendAppointmentEmail = async (patient_name: string, insurance_name: string, phone_number: string, reason_for_visit: string) => {
    try {
        const result = await transporter.sendMail(
            {
                from: process.env.GMAIL,
                to: 'info@ahmedmedicalpsychiatriccare.com',
                subject: 'New Appointment - Ahmed Medical Psychiatric Care',
                html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                    <meta charset="UTF-8">
                    <title>Psychiatric Appointment Request</title>
                    </head>
                    <body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">

                    <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
                        <tr>
                        <td align="center">

                            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">

                            <!-- Header -->
                            <tr>
                                <td style="background:#4a6fa5; padding:18px; text-align:center; color:#ffffff;">
                                <h2 style="margin:0; font-size:20px;">New Appointment Request</h2>
                                </td>
                            </tr>

                            <!-- Content -->
                            <tr>
                                <td style="padding:24px; color:#333333;">

                                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; font-size:14px;">

                                    <tr>
                                    <td style="padding:10px; font-weight:bold; background:#f0f2f5; width:35%;">
                                        Patient Name
                                    </td>
                                    <td style="padding:10px;">
                                        ${patient_name}
                                    </td>
                                    </tr>

                                    <tr>
                                    <td style="padding:10px; font-weight:bold; background:#f0f2f5;">
                                        Insurance Name
                                    </td>
                                    <td style="padding:10px;">
                                        ${insurance_name}
                                    </td>
                                    </tr>

                                    <tr>
                                    <td style="padding:10px; font-weight:bold; background:#f0f2f5;">
                                        Phone Number
                                    </td>
                                    <td style="padding:10px;">
                                        ${phone_number}
                                    </td>
                                    </tr>

                                    <tr>
                                    <td style="padding:10px; font-weight:bold; background:#f0f2f5; vertical-align:top;">
                                        Reason for Visit
                                    </td>
                                    <td style="padding:10px; line-height:1.5;">
                                        ${reason_for_visit}
                                    </td>
                                    </tr>

                                </table>

                                </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td style="background:#f0f2f5; padding:14px; text-align:center; font-size:12px; color:#666;">
                                This message was generated automatically by the appointment system.
                                </td>
                            </tr>

                            </table>

                        </td>
                        </tr>
                    </table>

                    </body>
                    </html>
                `
            }
        );
        return result.response;
    } catch (error: any) {
        throw new Error(error)
    }
}