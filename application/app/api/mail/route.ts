import { sendAppointmentEmail } from '@/utils/mail';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { patient_name, insurance_provider, phone_number, reason } = await request.json()
    const result = await sendAppointmentEmail(patient_name, insurance_provider, phone_number, reason);
    return NextResponse.json(
      {
        message: 'Appointment Booked!',
        output: result
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error?.message || 'Internal Server Error'
      },
      { status: 500 }
    );
  }
}
