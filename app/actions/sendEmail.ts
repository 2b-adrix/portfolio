"use server";

export async function sendEmailAction(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: "New Message from Portfolio",
        from_name: "Portfolio Contact Node",
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Server Action fetch error:", error);
    return { success: false, message: "Failed to connect to the mail server." };
  }
}
