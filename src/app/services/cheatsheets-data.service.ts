import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheatsheetsDataService {

  fontWeights = [
    {name: 'Common weight name', value: 'Value'},
    {name: 'Thin (Hairline)', value: '100'},
    {name: 'Extra Light (Ultra Light)', value: '200'},
    {name: 'Light', value: '300'},
    {name: 'Normal (Regular)', value: '400'},
    {name: 'Medium', value: '500'},
    {name: 'Semi Bold (Demi Bold)', value: '600'},
    {name: 'Bold', value: '700'},
    {name: 'Extra Bold (Ultra Bold)', value: '800'},
    {name: 'Black (Heavy)', value: '900'},
  ];

  cssSelectors = {
    selectors: [
      {name: 'Selector', value: 'Explanation'},
      {name: 'div > p', value: 'all p tags, one level deep in div'},
      {name: 'div + p', value: 'p tags immediately after div'},
      {name: 'div ~ p', value: 'p tags preceded by div'},
      {name: '#idname *', value: 'all elements inside #idname'},
    ],
    pseudoSelectors: [
      {name: 'Selector', value: 'Explanation'},
      {name: 'a:link', value: 'link in normal state'},
      {name: 'a:active', value: 'link in clicked state'},
      {name: 'a:visited', value: 'visited link'},
      {name: 'input:checked', value: 'checked inputs'},
      {name: 'input:disabled', value: 'disabled inputs'},
      {name: 'input:enabled', value: 'enabled inputs'},
      {name: 'input:focus', value: 'input has focus'},
      {name: 'input:in-range', value: 'value in range'},
      {name: 'input:out-of-range', value: 'input value out of range'},
      {name: 'input:valid', value: 'input with valid value'},
      {name: 'input:invalid', value: 'input with invalid value'},
      {name: 'input:optional', value: 'no required attribute'},
      {name: 'input:required', value: 'input with requred attribute'},
      {name: 'input:read-only', value: 'with readonly attribute'},
      {name: 'input:read-write', value: 'no readonly attrib.'},
      {name: 'div:empty', value: 'element with no children'},
      {name: 'p::first-letter', value: 'first letter in p'},
      {name: 'p::first-line', value: 'first line in p'},
      {name: 'p:lang(en)', value: 'p with en language attribute'},
      {name: ':not(span)', value: 'element that\'s not a span'},
      {name: 'p:nth-child(3n+1)', value: 'nth-child (an + b) formula'},
      {name: 'p:nth-last-child(2)', value: 'second child from behind'},
      {name: 'p:nth-of-type(2)', value: 'second p of its parent'},
      {name: 'p:nth-last-of-type(2)', value: '...from behind'},
      {name: 'p:only-of-type', value: 'unique of its parent'},
      {name: 'p:only-child', value: 'only child of its parent'},
      {name: ':root', value: 'documents root element'},
      {name: '::selection', value: 'portion selected by user'},
      {name: ':target', value: 'highlight active anchor'},
    ],
    attributeSelectors: [
      {name: 'Selector', value: 'Explanation'},
      {name: 'a[target]', value: 'links with a target attribute'},
      {name: 'a[target="_blank"]', value: 'links which open in new tab'},
      {name: '[title~="chair"]', value: 'title element containing a word'},
      {name: '[class^="chair"]', value: 'class starts with chair'},
      {name: '[class|="chair"]', value: 'class starts with the chair word'},
      {name: '[class*="chair"]', value: 'class contains chair'},
      {name: '[class$="chair"]', value: 'class ends with chair'},
      {name: 'input[type="button"]', value: 'specified input type'},
    ]
  };

  domEvents = {
    mouseEvents: [
      {name: 'Event', value: 'Explanation'},
      {name: 'onclick', value: 'The event occurs when the user clicks on an element'},
      {name: 'oncontextmenu', value: 'The event occurs when the user right-clicks on an element to open a context menu'},
      {name: 'ondblclick', value: 'The event occurs when the user double-clicks on an element'},
      {name: 'onmousedown', value: 'The event occurs when the user presses a mouse button over an element'},
      {name: 'onmouseenter', value: 'The event occurs when the pointer is moved onto an element'},
      {name: 'onmouseleave', value: 'The event occurs when the pointer is moved out of an element'},
      {name: 'onmousemove', value: 'The event occurs when the pointer is moving while it is over an element'},
      {name: 'onmouseout', value: 'The event occurs when a user moves the mouse pointer out of an element, or out of one of its children'},
      {name: 'onmouseover', value: 'The event occurs when the pointer is moved onto an element, or onto one of its children'},
      {name: 'onmouseup', value: 'The event occurs when a user releases a mouse button over an element'},
      // {name: '', value: ''},
    ]
  };

  usefulLinks = {
    hacks: {
      cssAndHtml: [
        {title: 'Responsive video embed', url: 'http://odinokun.com/2020-03-26-kak-vstavit-adaptivnoe-video-na-sajt.html', lang: 'ru'},
        {title: 'Responsive text based on image size', url: 'https://dev.to/afif/responsive-text-based-on-image-size-36n9', lang: 'en'},
        {title: 'HTML vs Body: How to Set Width and Height for Full Page Size', url: 'https://www.freecodecamp.org/news/html-page-width-height/', lang: 'en'}
      ],
      js: [
        {title: '', url: '', lang: ''}
      ]
    },
    inspiration: {
      individualElements: [
        {title: 'About Us Pop-Out Effect', url: 'https://codepen.io/ainalem/details/QWGNzYm'},
        {title: 'Animated tabbar', url: 'https://codepen.io/aaroniker/details/rNMmZvq'},
        {title: 'Credit Card Form - VueJs', url: 'https://codepen.io/JavaScriptJunkie/details/YzzNGeR'},
        {title: 'Rolling Radio Buttons', url: 'https://codepen.io/jkantner/details/MWjrxPz'},
      ],
      websites: [

      ]
    },
    playgrounds: [
      {title: '', url: ''}
    ]
  };
  constructor() { }
}
