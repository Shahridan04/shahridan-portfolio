# EmailJS Setup Instructions

Follow these steps to set up direct email sending for your contact form:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free - 200 emails/month)
3. Create your account

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (Idanshah58@gmail.com)
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template:

**Template Name:** Portfolio Contact Form

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
You have a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template
5. Copy the **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key**
3. Copy it (you'll need this later)

## Step 5: Add Environment Variables

1. In your project root, create a file named `.env.local`
2. Copy the contents from `.env.local.example`
3. Fill in your values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Replace the `xxxxxxxxx` with your actual values from EmailJS.

## Step 6: Restart Your Development Server

1. Stop your current server (Ctrl+C)
2. Run `npm run dev` again
3. The form should now send emails directly!

## Testing

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email (Idanshah58@gmail.com) - you should receive the message!

## Troubleshooting

- **"EmailJS configuration missing"**: Make sure your `.env.local` file exists and has all three variables
- **Emails not sending**: Check that your EmailJS service is connected and active
- **Template not found**: Verify your Template ID is correct
- **Service error**: Make sure your Gmail account is properly connected in EmailJS

## Need Help?

If you run into issues, check the EmailJS documentation: https://www.emailjs.com/docs/

