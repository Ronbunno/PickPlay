import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {







  faqs = [
    {
      question: 'Is PickPlay an official game platform?',
      answer: `No, we're an <strong>unofficial recommendation site</strong>. We don't host or distribute games - we only link to official stores like Google Play and Apple App Store.`,
      isOpen: false
    },
    {
      question: 'How do you choose which games to feature?',
      answer: `Games are selected based on popularity, user requests, and our team's hands-on testing. We have no paid partnerships with developers.`,
      isOpen: false
    },
    {
      question: 'Can I download games directly from your site?',
      answer: `Never. All download buttons redirect to <strong>official stores only</strong>. We never host APK/IPA files.`,
      isOpen: false
    },
    {
      question: 'How can game developers request changes?',
      answer: `Developers can email <a href="mailto:ronbunno7@gmail.com" class="text-blue-600 hover:underline">developerspickplay.com</a> to update assets or information.`,
      isOpen: false
    },
    {
      question: 'Are you compliant with copyright laws?',
      answer: `Yes. We operate under <strong>Fair Use</strong> for commentary and identification. See our <a href="/copyright" class="text-blue-600 hover:underline">Copyright Policy</a> for details.`,
      isOpen: false
    }
  ];

  toggleFaq(faq: any): void {
    faq.isOpen = !faq.isOpen;
  }










}
