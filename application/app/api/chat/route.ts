import { chatbot } from '@/utils/chatbot';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ message: 'Invalid Prompt!' }, { status: 400 });
    }

    const result = await chatbot(prompt);
    return NextResponse.json(
      {
        message: 'Working!',
        output: result
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error || 'Internal Server Error'
      },
      { status: 500 }
    );
  }
}
