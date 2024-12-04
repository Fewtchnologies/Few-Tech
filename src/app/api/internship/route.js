// src/app/api/internship/route.js
import dbConnect from '@/lib/dbConnect';
import Application from '@/models/Application';

export async function POST(req) {
  try {
    await dbConnect();
    const { name, email, phone, resumeLink, coverLetter } = await req.json(); // Parse request body
    const application = new Application({
      name,
      email,
      phone,
      resumeLink,
      coverLetter,
    });
    await application.save();

    return new Response(
      JSON.stringify({ message: "Application submitted successfully" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to submit application" }),
      { status: 500 }
    );
  }
}