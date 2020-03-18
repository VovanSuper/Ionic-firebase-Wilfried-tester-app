import { Component } from '@angular/core';

@Component({
  selector: 'app-syllabus',
  templateUrl: 'syllabus.page.html',
  styleUrls: ['syllabus.page.scss']
})
export class SyllabusPage {
  syllabusTextContent = {
    title: 'Syllabus',
    item: {
      title: 'About These Flashcards',
      body: 'If you need help recalling business concepts, then open up this collection of flashcard sets to start going over related topics. The flashcard sets may ask you to identify a full range of business-related items, such as definitions, key terms, concepts, graphic images, and more. Some of the topics addressed in this collection of flashcards include:',
      list: [
        'Marketing',
        'Employee performance',
        'Accounting',
        'Many more business topics!',
      ]
    }
  };
  subtitle: 'Business Flashcards';
  description: ' This collection of business flashcard sets is designed help you refresh your memory of major business terms and concepts. Whether you need to review all of the sets or only a few, these sets can help you improve your business knowledge for upcoming exams.';

  constructor() { }

}
