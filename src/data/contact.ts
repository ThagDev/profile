export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const contactInformation: ContactInfo[] = [
  {
    icon: "Mail",
    label: "Email",
    value: "hoquocthang1507@gmail.com",
    href: "mailto:hoquocthang1507@gmail.com",
  },
  {
    icon: "Phone",
    label: "Phone",
    value: "+84 (555) 123-4567",
    href: "tel:+84555123456",
  },
  {
    icon: "MapPin",
    label: "Location",
    value: "HCM City, Viet Nam",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "LinkedIn",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "Twitter",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: "Instagram",
  },
];

export const availabilityInfo = {
  status: "Available for new projects",
  description:
    "I'm currently available for freelance work and new opportunities. Feel free to reach out if you'd like to discuss a project or collaboration.",
  responseTime: "24-48 hours",
  preferredContact: "Email",
};

export const contactFormFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your full name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "your@email.com",
    required: true,
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "What's this about?",
    required: true,
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Tell me about your project or question...",
    required: true,
    rows: 5,
  },
];
