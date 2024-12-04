import dbConnect from '@/lib/dbConnect';
import Contact from '@/models/Contact';

export async function POST(req) {
  try {
    await dbConnect();
    const { name, email, message } = await req.json();
    const contact = new Contact({ name, email, message });
    await contact.save();

    return new Response(
      JSON.stringify({ message: 'Contact message saved successfully' }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to save contact message' }),
      { status: 500 }
    );
  }
}