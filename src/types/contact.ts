import {
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconMail,
  IconPhone,
} from '@tabler/icons';

export const contactList = {
  Phone: IconPhone,
  Email: IconMail,
  LinkedIn: IconBrandLinkedin,
  WhatsApp: IconBrandWhatsapp,
  Telegram: IconBrandTelegram,
};

export interface IContact {
  platform: keyof typeof contactList;
  text: string;
  link: string;
}
