import { Component } from '@angular/core';
import { Accordion } from '@ngx-dummy/accordion-simple/lib/IAccordion';
import { IAccordionStyling } from "@ngx-dummy/accordion-simple/helpers/IAccordionStylings";

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.page.html',
  styleUrls: ['overview.page.scss']
})
export class OverviewPage {
  overviewTextContent = {
    title: 'Overview',
    subtitle: 'Business Flashcards',
    description: ' This collection of business flashcard sets is designed help you refresh your memory of major business terms and concepts. Whether you need to review all of the sets or only a few, these sets can help you improve your business knowledge for upcoming exams.'
  };

  accordItems: Accordion = {
    id: 0,
    items: [
      {
        id: 0,
        title: 'Finance Summary',
        body: 'The flashcards will provide you with an understanding of some of the basic key accounting terms and concepts that are used both professionally, in business, and personally, such as preparing a budget or banking online.'
      },
      {
        id: 1,
        title: 'Economics Flashcards',
        body: 'This set of flashcards reviews twenty five terms and concepts that are central to the study of Economics. Learn the difference between microeconomics and macroeconomics, as well as the ways that economists study supply and demand. The set also reviews different types of economic markets and the various economic factors that businesses explore when determining the price and production of their goods.'
      },
      {
        id: 2,
        title: 'Ch 3. Employee Performance Flashcards',
        body: `
        What motivates you to go to class, hit the gym, cook dinner, see a movie, do your laundry, or hang out with friends? Sometimes, you might not even realize what is motivating you. Until that motivation is gone. Or, your previous motivator no longer motivates you. Perhaps your priorities changed and you need something new to motivate you.
        Organizations are asking similar questions of their employees. In the workplace, organizations are interested in what drives the behaviors of their employees. To complicate things, there is no 'one size fits all' approach when trying to understand organizational behaviors.
        Since the 18th century, the employment landscape has evolved and so have the skills needed from employees. In order to be competitive, organizations need to retain their employees, so they need to know what drives their employees to be high performers. So jump right into the flashcard set to learn what organizational behavior is and why understanding it became important.
        `
      }
    ]
  };

  accordStyling: IAccordionStyling = {
    guttedItems: '1rem',

    itemStyling: {
      headBgColor: '#4197b2',
      margin: '0',
      padding: '0'
    }
  };


  constructor() { }

}
