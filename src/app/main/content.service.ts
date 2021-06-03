import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

    data = {
        techStack: [
            {
                title: 'Ionic/Angular',
                details: ['the main set of frameworks I\'ve been working with', 'this website and many projects included in my portfolio have been powered by this combo']
            },
            {
                title: 'SCSS',
                details: ['widely used extension of the syntax of CSS, part of my daily coding routine']
            },
            {
                title: 'Wordpress',
                details: ['automatic and manual installation/update of plugins; their integration with the website', 'adding cutom fields to admin panel pages, output of their content to the website']
            },
            {
                title: 'Amazon Alexa',
                details: ['adding new pages and Alexa skills']
            },
            {
                title: 'SVG',
                details: ['color and size changes', 'simple animation']
            },
            {
                title: 'REST API',
                details: ['sending requests to the server and processing the response']
            },
            {
                title: 'LocalStorage',
                details: ['saving and utilizing information about the user for better UX']
            },
            {
                title: 'NPM',
                details: ['installation of Node packages and utilizing their features in the projects']
            },
            {
                title: 'Responsiveness',
                details: [
                    'elements display and concealment basing on the viewport dimensions',
                    'adjustments of the elements\' size, position, etc. using flexbox and media-queries',
                    'familiar with the concepts of mobile first and graceful degradation approaches'
                ]
            },
            {
                title: 'Animations and transformations',
                details: [
                    'Animations and transformations in response to user events (mouse movements, clicks, etc)',
                    'using pure CSS, or in combination with JS'
                ]
            },
            {
                title: 'Parallax effects',
                details: ['a web site trend where the background content (i.e. an image) is moved at a different speed than the foreground content while scrolling.']
            },
            {
                title: 'UI/UX basic principles',
                details: ['even though UI/UX are in the scope of the designer\'s responsibility, as practice shows, it is good for a coder to be aware of their principles as well.']
            },
        ],
        softSkills: [
            {
                title: 'Flexible',
                details: ['If a problem can\'t be solved in one way, I come up with several alternative ideas on how to do it']
            },
            {
                title: 'Reliable',
                details: ['I do not drop tasks or postpone their delivery unless there is a really good reason for that. In case I do have to, the client gets to know about it as soon as possible.']
            },
            {
                title: 'Punctual',
                details: ['Time is the most valuable asset in this rapid world. Thus, I highly appreciate working with people who treat it wisely and don\'t waste neither their time, nor mine.']
            },
            {
                title: 'Easy to reach',
                details: ['I usually respond to messages in Telegram, Skype and Viber within an hour between 9am and 10pm Kyiv time (+3UTC). However I do appreciate receiving only really urgent messages after 6pm.']
            },
            {
                title: 'Communicable',
                details: ['I\'m not a fan of small talks and chutters. However, I do appreciate informative and polite communication with my colleagues and clients.']
            },
        ]
    };
  constructor() { }
}
