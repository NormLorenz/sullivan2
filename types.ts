export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  content: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}
